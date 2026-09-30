# Brand Masala — V1 asset and local review guide

## Current implementation

V1 uses the approved sources in CONTENT_MAPPING.md. That document records the original evidence review; the subsequent implementation authorization approves the smaller public V1 described here.

- 12 source-backed portfolio entries; one Altossa entry; Borntrue omitted.
- 12 client-logo assets and one unchanged-artwork Brand Masala logo derivative.
- Public sections: hero/navigation, client marquee, eight services, selected work, portfolio, About, clients, honest contact placeholder and footer.
- Project modals show real artwork and source-backed labels; unsupported dates/results/deliverables are absent.
- Workflow, simulator, calculator, comparison, showreel, fake intake and upload/customization components remain in source but are not imported by the public V1.
- Brand artwork is never reconstructed or recolored. Light logo surfaces preserve legibility on dark backgrounds.

## Asset provenance and regeneration

Exact source files, PDF page numbers, output dimensions and byte sizes:
`scripts/v1-assets-manifest.json`.

The generator has a fixed allowlist:
`scripts/prepare-v1-assets.mjs`.

It reads only the explicitly supplied approved root, exports ten specified PDF pages, converts the two specified homepage artworks, and prepares the approved logos. It writes only to local repository outputs. It does not copy the PDF, MOV, HIF, testimonials, unused images or other Drive folders.

The website's own Sharp dependency is used for WebP processing. PDF tooling is offline build-time tooling, not an application dependency. This run used pdfjs-dist 6.3.289 and @napi-rs/canvas 1.0.9 in a temporary directory. To regenerate, install those exact versions into a separate tools directory and pass its node_modules location:

```powershell
node scripts/prepare-v1-assets.mjs "<WEBSITE_V1_APPROVED path>" "<temporary tools path>/node_modules"
```

Review the output visually after regeneration. Full PDF pages preserve attribution and composition; cards use object-contain, and the modal provides a full-size artwork link. Client contacts embedded in artwork belong to the client, not Brand Masala.

Never add unsourced facts merely to populate optional project fields. Update `src/data/portfolioData.ts` only from approved material. New media also requires a manifest entry: the production build intentionally ships only the allowlisted media and local display font. Legacy prototype assets remain in the repository but are excluded from dist.

## Local review

```powershell
npm run dev
```

Open the URL printed by Vite (normally http://localhost:3000).

```powershell
npm run build
npm run lint
npm run preview
```

The configured lint script is TypeScript's `tsc --noEmit`, not ESLint. No project dependencies were added or upgraded for this implementation.

Optional repeatable browser checks use a temporary Playwright installation (this run: 1.63.0) and locally installed Microsoft Edge:

```powershell
node scripts/check-v1.mjs "<temporary browser tools path>/node_modules" "<temporary screenshot output path>" "http://127.0.0.1:4173"
```

Start the production preview first. The checks cover 1440, 1280, 1024, 768, 430 and 390 pixel widths, anchors, mobile navigation, portfolio filters, all service buttons, modal Escape/focus restoration, reduced motion, public claim/form checks, asset responses and browser errors. Screenshots are generated outside the repository.

## Deployment boundary

The website is a static Vite build: the contents of `dist` are the deployment artifact. Do not upload source, node_modules, environment files or the Drive PDF. The current absolute asset paths assume deployment at the domain root; a subdirectory deployment needs a separate base-path review.

No deployment or merge to main has been performed. Review the local site before publishing.

## Outstanding launch items

- Verified agency email/phone/WhatsApp/social profile URLs are still missing. The contact section honestly says online enquiries are unavailable; there is no form or submission-success state.
- The production domain is not supplied. No canonical URL, contact schema, ratings, address or legal entity was invented.
- Favicon uses the same approved logo WebP, without a new/reconstructed mark. A dedicated approved square icon and social share image can be supplied later.
- Existing Google Fonts remain external, with system fallbacks. The distinctive pixel display font is local; unused OnlineWebFonts and Font Awesome CDN requests were removed.
- LAUNCH_AUDIT.md and LAUNCH_CHECKLIST.md were not available in this workspace. Their separate requirements have not been certified by this implementation.
