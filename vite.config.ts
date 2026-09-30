import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
import {defineConfig} from 'vite';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), {
      name: 'approved-v1-public-assets',
      apply: 'build',
      generateBundle() {
        // Emit only files referenced by the current UI; avoid copying the entire public directory.
        const manifest = JSON.parse(fs.readFileSync(path.join(root, 'scripts/v1-assets-manifest.json'), 'utf8')) as {output: string}[];
        const referencedPublicAssets = [
          'public/fonts/GeistPixel-Circle.woff2',
          'public/assets/logo.webp',
          'public/images/social-kulture.jpg',
          'public/images/social-soho.jpg',
          'public/images/social-turtlewax.jpg',
          'public/images/social-tatamotors.jpg',
          'public/images/web-soho-residences.jpg',
        ];
        for (const file of [...manifest.map(asset => asset.output), ...referencedPublicAssets]) {
          const resolved = path.resolve(root, file);
          if (!resolved.startsWith(path.join(root, 'public') + path.sep)) throw new Error('Invalid public asset path');
          this.emitFile({type: 'asset', fileName: file.replace(/^public\//, ''), source: fs.readFileSync(resolved)});
        }
      },
    }],
    build: {copyPublicDir: false},
    resolve: {
      alias: {
        '@': root,
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
