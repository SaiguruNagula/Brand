// Robust IndexedDB Media Storage for client photography and brand assets
// Bypasses browser localStorage 5MB quota restrictions completely

const DB_NAME = 'BrandMasalaMediaDB';
const DB_VERSION = 1;
const STORE_NAME = 'client_assets';

export interface ClientAssetData {
  coverImage?: string;
  gallery?: string[];
  logoImage?: string;
  updatedAt?: number;
}

// Clean up any historical localStorage entry that might have caused quota errors
try {
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.removeItem('brand_masala_client_assets');
  }
} catch (e) {
  // Ignore
}

// Open or initialize IndexedDB instance
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported in this environment'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error || new Error('Failed to open database'));
    };
  });
}

// In-memory cache for ultra-fast synchronous initial renders
const memoryCache: Record<string, ClientAssetData> = {};

// Retrieve asset for a specific client
export async function getClientAsset(clientId: string): Promise<ClientAssetData | null> {
  if (memoryCache[clientId]) {
    return memoryCache[clientId];
  }

  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(clientId);

      request.onsuccess = () => {
        const result = request.result || null;
        if (result) {
          memoryCache[clientId] = result;
        }
        resolve(result);
      };

      request.onerror = () => {
        resolve(null);
      };
    });
  } catch (error) {
    console.warn('Could not read from IndexedDB, using fallback:', error);
    return null;
  }
}

// Save or merge asset for a client
export async function saveClientAsset(
  clientId: string,
  updates: Partial<ClientAssetData>
): Promise<ClientAssetData> {
  const existing = (await getClientAsset(clientId)) || {};
  const updated: ClientAssetData = {
    ...existing,
    ...updates,
    updatedAt: Date.now()
  };

  memoryCache[clientId] = updated;

  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(updated, clientId);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });

    // Notify all active components across the page
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('client-assets-updated', { detail: { clientId } }));
    }
  } catch (error) {
    console.error('Failed to persist asset to IndexedDB:', error);
  }

  return updated;
}

// Clear client assets
export async function clearClientAsset(clientId: string): Promise<void> {
  delete memoryCache[clientId];
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(clientId);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('client-assets-updated', { detail: { clientId } }));
    }
  } catch (error) {
    console.error('Failed to remove asset from IndexedDB:', error);
  }
}

// Client-side image optimizer: Scales down massive multi-megapixel smartphone camera files (e.g. 15-30MB)
// into optimal web-ready images (~200KB - 800KB) while preserving pin-sharp clarity
export function optimizeImageFile(file: File, maxDimension = 2048, quality = 0.88): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        // High quality bicubic image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        // Export as WebP if supported or standard JPEG
        try {
          const webpData = canvas.toDataURL('image/webp', quality);
          if (webpData.startsWith('data:image/webp')) {
            resolve(webpData);
            return;
          }
        } catch (_) {
          // fallback to jpeg
        }

        const jpegData = canvas.toDataURL('image/jpeg', quality);
        resolve(jpegData);
      };

      img.onerror = () => reject(new Error('Failed to load image for optimization'));
      img.src = e.target?.result as string;
    };

    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}
