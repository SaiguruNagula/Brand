# BRAND MASALA — Asset Replacement & Deployment Guide

This guide details how to replace visual assets, update logo files, and deploy the Brand Masala landing website.

---

## 1. Logo Replacement Instructions

The application uses an ultra-crisp vector typographic lockup by default (`BrandMasalaLogo.tsx`) which renders the exact Brand Masala logotype:
* **"brand"** in pure white / dark
* **"masala"** in brand yellow `#FFBB02`
* **Accent dot** in brand orange/red `#FC3520`
* **"A BRAND CONSULTANCY FIRM"** tagline in uppercase tracking

### Replacing with an Image or the provided `Logo3.png`:
1. Save your high-resolution logo image as:
   ```
   public/images/logo.png
   ```
2. Or use the vector file:
   ```
   public/images/brand-masala-logo.svg
   ```
3. In `src/components/BrandMasalaLogo.tsx` or `src/components/Navbar.tsx`, you can swap `<BrandMasalaLogo />` with:
   ```tsx
   <img src="/images/logo.png" alt="Brand Masala" className="h-8 sm:h-10 w-auto" />
   ```

---

## 2. Portfolio Image Replacement Instructions

All portfolio imagery is centralized in the `/public/images/` directory. Each file corresponds to authentic work from the Brand Masala Work Portfolio PDF:

| Project / Client | File Location | Recommended Dimensions | Notes |
| :--- | :--- | :--- | :--- |
| **Kulture Veneers & Surfaces** | `/public/images/social-kulture.jpg` | 1200 × 900 (4:3) | Social & Architectural Print |
| **SOHO Residences Skyline** | `/public/images/social-soho.jpg` | 1600 × 1000 (16:10) | Luxury Real Estate & Social |
| **SOHO Residences Platform** | `/public/images/web-soho-residences.jpg` | 1920 × 1080 (16:9) | Website & Brochure Showcase |
| **Turtle Wax Graphene** | `/public/images/social-turtlewax.jpg` | 1200 × 900 (4:3) | Automotive Detailing & Ads |
| **Tata Motors Mobility** | `/public/images/social-tatamotors.jpg` | 1200 × 900 (4:3) | Automotive Social Campaign |
| **SVC Realty Platform** | `/public/images/web-svc-realty.jpg` | 1920 × 1080 (16:9) | Architectural Design Platform |
| **Founder Portrait** | `/public/images/founder-kamaljeet.jpg` | 800 × 1000 (4:5) | Kamaljeet Singh (Page 30 of PDF) |

To replace any project image with a new export from Figma or the original master PDF:
1. Export the image as a high-quality JPG or WebP.
2. Drop it into `public/images/` with the exact corresponding filename listed above.
3. The site immediately reflects the change without editing code.

To add new projects or modify metadata, edit:
```
src/data/portfolioData.ts
```

---

## 3. Brand Color Palette Reference

* **Black (Dominant 90%)**: `#010101`
* **Yellow (Controlled Accent)**: `#FFBB02`
* **Orange / Red (Controlled Accent)**: `#FC3520`
* **White (Primary Contrast)**: `#FFFFFF`
* **Neutrals**: `#070707`, `#0e0e0e`, `#A1A1AA`, `#71717A`

---

## 4. Build & Production Deployment

To test a production build:
```bash
npm run build
```

The compiled assets will be in `/dist`. You can deploy this static build to Cloud Run, Vercel, Netlify, AWS S3 / CloudFront, or any standard web server.
