# Brand Masala — V1 content mapping

Review document only. Prepared 2026-09-30. No implementation authorized by this document.

## Evidence, scope and limitations

- Repository inspected: `C:\Users\hp\OneDrive\Desktop\Brand_deployment\Brand`, branch `launch-v1`. This is the actual workspace path; the request's escaped `Brand\_deployment` is interpreted as `Brand_deployment`.
- **Required inputs unavailable:** `LAUNCH_AUDIT.md` and `LAUNCH_CHECKLIST.md` were not found in the workspace. They could not be read. Findings below are independently checked against current source, not attributed to those missing documents. Reconcile this mapping with both documents when supplied, before implementation approval.
- Drive inspection was restricted to `H:\My Drive\Clients Content\WEBSITE_V1_APPROVED`. It was read only. No other Drive folder was inspected.
- Source inspection covers the approved file inventory, all 30 pages of the image-only portfolio PDF, the brand logo, the ambiguously named Kulture logo, and all four homepage images. Other loose featured-work media is inventoried, not certified by visual/video playback review. No production media was processed or copied. PDF inspection previews existed only in memory.
- Current rendering was traced through `src/App.tsx` and its components/data. This is a source-based content mapping, not a new browser QA or deployment certification. `Services.tsx`, `Approach.tsx` and `AnnouncementBar.tsx` are not rendered by the current App; their existence does not establish current section content.
- Source labels establish only what they explicitly say. An approved clients page is stronger evidence than an asset/folder name, but does not establish a direct national/global contract, results, dates, scope or a legal release. Client product claims embedded in artwork are not Brand Masala business outcomes.
- Replacement text below consists of source quotations/labels or instructions to omit unsupported fields. It is not newly generated marketing copy. Proposed destinations are future paths, not files created by this task.

### Source keys

All `D/...` paths resolve beneath **D = `H:\My Drive\Clients Content\WEBSITE_V1_APPROVED`**. All `R/...` paths resolve beneath **R = `C:\Users\hp\OneDrive\Desktop\Brand_deployment\Brand`**. Forward slashes below are path separators; original filename spaces, punctuation and underscores are preserved.

| Key | Exact approved source | Size (bytes) | Evidence |
|---|---|---:|---|
| P | `D/00_Brand/Copy of Brand Masala Work Portfolio .pdf` | 32,511,561 | 30-page image-only portfolio, visually inspected |
| P2 | `D/01_company_content/Copy of Copy of Brand Masala Work Portfolio .pdf` | 32,511,561 | Byte-identical to P, not independent corroboration |
| B | `D/00_Brand/Copy of Logo4.png` | 2,061,211 | Brand Masala logo and tagline |

Both PDFs have SHA-256 `70FB0115A01165F7646EBA303A7468ACE23A53428C47214B426B918D0AA33EC8`. Page references are one-based. `05_TEAM` and `06_TESTIMONIALS` contain no substantive files (only `desktop.ini`). Ignore `desktop.ini` everywhere; it is not website source material.

## A. Brand assets

| Item | Approved evidence | Mapping decision |
|---|---|---|
| Primary logo | B: horizontal `brandmasala.`; black/yellow lettering, colored dot; `A BRAND CONSULTANCY FIRM`; 1536 × 1024 PNG with alpha | REPLACE reconstructed website wordmarks with an approved-logo derivative, after whitespace/legibility review. Do not infer official hex values, fonts or alternate lockups. |
| Brand name / tagline | B; P cover | KEEP `Brand Masala` and `A Brand Consultancy Firm`. |
| Dark/stacked/monochrome variants | Current component creates variants; no separate approved masters established | NEEDS USER APPROVAL. Do not recolor or redraw the master automatically. |
| Misleading filename | `02_CLIENT_LOGOS/Copy of logo black.png` visually says **KULTURE**, not Brand Masala | Use only as a Kulture client logo. Never use as Brand Masala favicon/wordmark. |
| Homepage image 1 | `04_HOMEPAGE_MEDIA/hero1.jpg`: `YOUR BRAND DESERVES MORE`, Brand Masala logo, `@brandmasala` | Available approved promotional artwork, not proof of results. Optional hero asset; portrait composition requires layout approval. |
| Homepage image 2 | `04_HOMEPAGE_MEDIA/hero2.jpg`: SOHO brochure mockup | Map to SOHO print work, not a generic agency hero. |
| Homepage image 3 | `04_HOMEPAGE_MEDIA/hero3.jpg`: `WE DON'T GUESS. WE BUILD DATA-DRIVEN STRATEGIES THAT WORK.` and `@brandmasala` | Available self-promotional artwork; not analytics evidence. Optional, no proposed V1 copy until placement chosen. |
| Homepage image 4 | `04_HOMEPAGE_MEDIA/hero4.png`: Detailing Daddy car-care artwork | Map to Detailing Daddy, not agency identity/contact. |
| Favicon / social sharing image | No purpose-made approved files | NEEDS USER APPROVAL for a logo-derived favicon and sharing composition; no invented icon. |
| Fonts / identity manual | No supplied font/license files or brand manual | Missing. Existing font imports and comments claiming “official” specs are not source authority. |

## B. Company information

| Information | Evidence-backed content | Limits |
|---|---|---|
| Agency description | P p2: `BRAND MASALA IS A DYNAMIC MARKETING AGENCY BUILT ON THE BELIEF THAT EVERY BRAND DESERVES A UNIQUE STORY AND A POWERFUL PRESENCE.` | Approved company positioning, not independent outcome evidence. |
| About excerpt | P p2: `WE SPECIALIZE IN CREATING BOLD, STRATEGIC, AND RESULT-ORIENTED MARKETING SOLUTIONS THAT HELP BUSINESSES STAND OUT IN A COMPETITIVE MARKET.` | May replace prototype paraphrase verbatim; no new claims added. |
| Services | P p3: `DIGITAL MARKETING`; `SOCIAL MEDIA MARKETING`; `BRANDING`; `WEB DEVELOPMENT`; `PERFORMANCE MARKETING`; `UGC CONTENT CREATION`; `SEO`; `APP DEVELOPMENT` | Service names are supported. Prototype detailed promises, delivery times, staffing, native-file entitlements and commercial-rights guarantees are not established. |
| Print work | P pp20–25 labels print-media work | Supports showcasing the documented print designs. Does not prove an unlimited print-production service or physical fabrication. |
| Founder | P p30: `Kamaljeet Singh- Founder @ Brand Masala`, with portrait | Available factual identity. No new team section proposed; `05_TEAM` has no standalone headshot. |
| Dates | P cover says `2026 PORTFOLIO EDITION`; some print pages show 2026 | Do not assign 2026 to every project from edition date. Confirm individual project dates before displaying them. |
| Results / scale / awards / testimonials | No substantiation for website metrics or named testimonials located | Do not publish 150+ campaigns, 99.4% retention, 24/7 availability, 2.4M+ reach, 200+ clients, +168% engagement or agency awards. An award-shaped object in Altossa artwork is not an award won by Brand Masala. |
| Process / commercial terms | No approved operating policy, rate card, SLA, revision policy, staffing policy or contract | Hide operational simulator/calculator/comparison promises pending approval. |
| Address / founding year / legal identity / domain | Not established by inspected approved company material | Missing; do not derive from client artwork or existing prototype. |

## C. Client verification

Classification is evidence classification, not a blanket permission determination. P p29 explicitly says **OUR CLIENTS**, so the following names are supported by an approved statement rather than merely folder names. Public-use scope, exact entity (brand versus local dealer/franchise) and name variants still need confirmation where noted. Remove unsupported category embellishments even when the name is supported.

| Existing website client | Classification | Approved evidence / scope constraint |
|---|---|---|
| MERCEDES-BENZ | SUPPORTED BY APPROVED SOURCE | P p29; separate SVG. Direct/global relationship not established. |
| TATA MOTORS | SUPPORTED BY APPROVED SOURCE | P pp13–14,29; separate PNG. “National” campaign/category is not supported. |
| ATHER / ATHER ENERGY | SUPPORTED BY APPROVED SOURCE | P p29 ATHER; separate logo. Confirm exact advertised entity/name. |
| TURTLE WAX | SUPPORTED BY APPROVED SOURCE | P pp17,29; separate logo. Local studio versus corporate scope not stated. |
| SOHO / SOHO RESIDENCES / SOHO JUBILEE HILLS | SUPPORTED BY APPROVED SOURCE | P pp10,12,22,28,29. Prefer the source project name; don't expand location/service scope. |
| KULTURE | SUPPORTED BY APPROVED SOURCE | P pp5–7,21,29; separate logo. |
| RAWPCHIC | SUPPORTED BY APPROVED SOURCE | P pp8–9,29; separate logo. |
| ROCH | SUPPORTED BY APPROVED SOURCE | P p29 logo says ROCH Cafe Bistro. No standalone supplied logo. |
| TRILIGHT | SUPPORTED BY APPROVED SOURCE | P p29 contains Trilight marks. Do not count variants as separate clients. |
| CLA | SUPPORTED BY APPROVED SOURCE | P p29 Clark Lloyd Architects mark. |
| JAINS RADHAKRISHNA BLISS / JAINS RADHAKRISHNA | SUPPORTED BY APPROVED SOURCE | P pp16,23–24,29. Caption variants include `JAIN RADHA KRISHNA BLISS`; approve canonical spelling. `Jain Constructions.png` is not automatically an interchangeable project logo. |
| ZENTHINK | SUPPORTED BY APPROVED SOURCE | P p29; separate logo. “Consulting & Enterprise” not established as agency scope. |
| DETAILING DADDY | SUPPORTED BY APPROVED SOURCE | P pp15,29; separate logo and artwork. |
| OPPEIN | SUPPORTED BY APPROVED SOURCE | P p29 specifically says **OPPEIN HYDERABAD**. Do not broaden to global Oppein. |
| SPACES BY MTC | SUPPORTED BY APPROVED SOURCE | P p29. |
| AGRI | SUPPORTED BY APPROVED SOURCE | P p29 **Agri by MTC**. Preserve the qualified identity. |
| M. BHAGWANLAL & CO. | SUPPORTED BY APPROVED SOURCE | P p29; separate logo. |
| ALTOSSA | SUPPORTED BY APPROVED SOURCE | P pp25,29. |
| COUNTRYSIDE FARMS | SUPPORTED BY APPROVED SOURCE | P p29. |
| VNR DAIRY | SUPPORTED BY APPROVED SOURCE | P p29. |
| CERAMIC PRO | SUPPORTED BY APPROVED SOURCE | P p29. |
| RAMESH LASIK | SUPPORTED BY APPROVED SOURCE | P p29 **Ramesh Lasik & Laser Centre**. |
| FURNESTRY | SUPPORTED BY APPROVED SOURCE | P p29; separate logo. |
| LIONS INTERNATIONAL | SUPPORTED BY APPROVED SOURCE | P p29. No global engagement scope implied. |
| SVC REALTY (additional Clients/portfolio entry) | SUPPORTED BY APPROVED SOURCE | P p27 explicitly credits website designing & development. |
| BORNTRUE (portfolio entry) | NEEDS USER CONFIRMATION | P p19 explicitly says **WORK SAMPLES - BORNTRUE**, not client name. Confirm relationship, spelling and permission; don't promote to client grid. |
| AMAZON (hero trust row) | NOT SUPPORTED | No approved client statement located. Remove. |
| GOOGLE (hero trust row) | NOT SUPPORTED | No approved client statement located. Platform/service references do not establish a client. Remove. |

Additional source-only names: Bridgegap has a logo file but no inspected client statement; RiSpace Design and JON CREATIVEs have asset folders but no inspected client statement. All require **NEEDS USER CONFIRMATION** before public relationship claims. P p29 also contains MTC; this is not permission to add a new project or expand existing MTC sub-brand relationships. No automatic client additions are proposed.

## D. V1 portfolio candidates

No quality ranking or preferred order is implied. **READY FOR V1** means sufficient approved evidence for a limited visual portfolio entry using only the explicit client/category/deliverable labels below. It does not mean a full case study, verified results, project year, live publication or proof of website ownership. Media preparation and approval of this mapping are still required. If the UI cannot omit unsupported summary/year/deliverable fields, hide those fields or hold the entry; do not fill them with invented copy.

### Existing portfolio entries and selected-work counterparts

| Existing entry / client | Status | Available approved assets | Available factual description / deliverables | Missing information | Recommended website assets |
|---|---|---|---|---|---|
| p1 / selected KULTURE social | READY FOR V1 | P pp5–7; 3 JPGs + MP4 in `03_FEATURED_WORK/Kulture_`; logo | Exact label `SOCIAL MEDIA`, `CLIENT NAME - KULTURE` | Dates, scope beyond pictured work, strategy/photography attribution, results | P p5 artwork derivative M02; loose media held for matching review |
| p2 SOHO social | READY FOR V1 | P pp10,12; 3 JPGs in SOHO folder; logo | `SOCIAL MEDIA`, `CLIENT NAME - SOHO` | Dates, advertising/management scope, results | P p12 artwork derivative M03 |
| p3 / selected-data TURTLE WAX | READY FOR V1 | P p17; 2 videos; logo | `SOCIAL MEDIA`, `CLIENT NAME - TURTLE WAX` | Paid placement, campaign scope, dates, video role/rights; current validity of depicted offers | P p17 derivative M04; no video yet |
| p4 / selected TATA MOTORS | READY FOR V1 | P pp13–14; logo | `SOCIAL MEDIA`, `CLIENT NAME - TATA MOTORS` | Direct/dealer scope, dates, production role, results; no national-campaign evidence | P p13 derivative M05 |
| p5 RAWPCHIC | READY FOR V1 | P pp8–9; 3 JPGs in Rawpchic_; logo | `SOCIAL MEDIA`, `CLIENT NAME - RAWPCHIC` | Photography/creative-direction scope, dates, results | P p8 derivative M06, not reused Kulture placeholder |
| p6 / selected DETAILING DADDY | READY FOR V1 | P p15; hero4; 3 JPGs; logo | `SOCIAL MEDIA ADS`, `CLIENT NAME - DETAILING DADDY` | Whether reels, identity, signage or performance management were delivered; dates/results | hero4 derivative M07; actual approved logo L02 |
| p7 KULTURE print | READY FOR V1 | P p21 | `BUSINESS CARDS`, `MAGZINE COVER` [source spelling], KULTURE | Print production, foil/material claims, dealer lookbooks, date | P p21 derivative M08; use source labels, not material/production story |
| p8 SOHO print | READY FOR V1 | P p22; hero2 | `SOHO BROCHURE` | Fabrication/embossing/physical specs and attribution beyond brochure work | hero2 derivative M09 |
| p9 JAINS RADHAKRISHNA BLISS print | READY FOR V1 | P pp23–24 | `NEWSPAPER AD` in print-media section | Canonical client spelling, actual publication/placement, dates and offer validity | P p23 derivative M10; identify as design, not a published Hindustan Times placement |
| p10 ALTOSSA print | NEEDS USER APPROVAL | Same P p25 montage as p13 | `ALTOSSA BRANDING`, under print-media heading | Whether separate engagement; physical production, apparel/signage/award fabrication not proven | No separate asset proposed; consolidate with p13 if approved |
| p11 SVC REALTY | READY FOR V1 | P p27 website screenshots/mockups | `SVC REALTY WEBSITE`; `DESIGNING & DEVELOPMENT` | Live URL, dates, exact technical role/features, results | P p27 derivative M12; not generic agency placeholder |
| p12 / selected SOHO RESIDENCES web | READY FOR V1 | P p28 website screenshots/mockups | `SOHO RESIDENCES WEBSITE`; `DESIGNING & DEVELOPMENT` | Live URL, dates, floorplan/walkthrough/inquiry feature claims and results | P p28 derivative M13, distinct from social/print images |
| p13 ALTOSSA branding | READY FOR V1 | P p25 | `ALTOSSA BRANDING` | Specific identity-system scope, fonts, fabricated items and outcomes | P p25 derivative M11; avoid duplicating p10 as separate proof |
| p14 BORNTRUE | NEEDS USER APPROVAL | P p19 work samples | `WORK SAMPLES - BORNTRUE`; social-media section | Client versus speculative/sample work, canonical spelling, role/rights, motion-graphics delivery | None until sample/relationship labelling approved |

### Additional approved-folder candidates (not automatically new website projects)

| Client/folder label | Status | Available approved assets | Available factual description / deliverables | Missing information | Recommended website assets |
|---|---|---|---|---|---|
| Furnestry | MISSING INFORMATION | Logo; 1 MOV + 2 HIF in `Furnestry_`; P p29 clients entry | Client-list name only; no project scope/deliverables established | Project brief, agency role, dates if wanted, HIF/video review and public-use scope | None yet; HIF conversion and video preparation would be required |
| M. Bhagwanlal & Co. | MISSING INFORMATION | Logo; 2 JPGs; P p29 | Client-list name only | Agency role and deliverables; image/publication permission | None yet |
| OPPEIN Hyderabad | MISSING INFORMATION | Logo; MP4 + MOV; P p29 | Qualified client-list name only | Project scope, filming/editing role, permission and exact entity | None yet |
| Ather | MISSING INFORMATION | Logo; 5 MOVs; P p29 | Client-list name only | Project role/deliverables, local/corporate scope, playback and rights review | None yet |
| JON CREATIVEs | NEEDS USER APPROVAL | `12.png`, `9.png` | Folder label only | What this label identifies; client/agency relationship, role, public permission | None |
| RiSpace Design | NEEDS USER APPROVAL | Logo; `1.jpg`, `5 (1).jpg`, `3A.jpg` | Folder/file labels only | Relationship statement and project role/deliverables/permission | None |
| Bridgegap | MISSING INFORMATION | Logo only | No inspected project statement | Relationship, project facts and portfolio media | None; also missing project media |

**MISSING MEDIA** applies to a proposed detailed case study for a logo-only name if later approved: logos alone are not case-study media. No such project is invented here. **DO NOT PUBLISH** applies to current fabricated metrics, generic stand-in project imagery, the Borntrue entry presented as a confirmed client campaign, and duplicate/unsupported Altossa production claims. It is not a quality judgment about the supplied work.

## E. Section-by-section website mapping

The ACTION line is the proposed section-level disposition. All changes remain proposals. Unsupported sub-elements called out below must not survive merely because the parent section remains.

### 1. Navbar

- **CURRENT SECTION:** `Navbar.tsx`; Hero also contains desktop/mobile navigation.
- **CURRENT CONTENT:** Section anchors, services/work/about/clients navigation and consultation CTAs; floating navbar adds workflow/comparison/scope destinations.
- **CURRENT ASSETS:** Reconstructed typography/wordmark in navigation/Hero; icons, not approved master assets.
- **AUDIT PROBLEM:** Brand variants are not source-verified; anchors/CTAs would point at sections proposed for hiding or a non-delivering form.
- **APPROVED DRIVE SOURCE:** B; P pp2–3 and work sections.
- **APPROVED REPLACEMENT CONTENT:** Keep neutral navigation labels for retained sections only. No new marketing wording. Disable/remove unsupported-section links and contact trigger until a real route is approved.
- **APPROVED REPLACEMENT ASSET:** M01 primary-logo derivative, with background/legibility approval.
- **ACTION:** REPLACE

### 2. Hero

- **CURRENT SECTION:** `Hero.tsx`.
- **CURRENT CONTENT:** Brand headline/intro, consultation/explore-work/showreel CTAs; 150+ Campaigns Delivered, 99.4% Client Retention, 24/7 Creative Velocity, 2.4M+ Audience Reach; “Trusted by 200+ Leading Brands & Enterprises”; Mercedes, Amazon and Google trust marks.
- **CURRENT ASSETS:** External CloudFront MP4 at `d8j0ntlcm91z4.cloudfront.net/.../hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4`; typography/icons.
- **AUDIT PROBLEM:** Video absent from approved source; unsupported metrics/counts; Amazon/Google unsupported; showreel/contact journeys not production-ready.
- **APPROVED DRIVE SOURCE:** B; P p2; optional hero1; Mercedes name only P p29.
- **APPROVED REPLACEMENT CONTENT:** B tagline and/or exact P p2 excerpt from B above, subject to placement approval. Remove all four metrics, 200+ statement and unsupported trust marks. Keep Explore Work navigation; hold showreel/contact triggers.
- **APPROVED REPLACEMENT ASSET:** M01; optional M14 hero1. No approved generic hero video found. Hero1 is portrait promotional artwork, not a drop-in wide video background; otherwise use no media until approved.
- **ACTION:** REPLACE

### 3. Client marquee

- **CURRENT SECTION:** `LogoMarquee.tsx`, `CLIENTS_LIST`.
- **CURRENT CONTENT:** 24 client names/categories; “TRUSTED BY 200+ INDUSTRY LEADERS”.
- **CURRENT ASSETS:** Text/icon lockups and constructed Detailing Daddy logo via `ClientBrandLockup`.
- **AUDIT PROBLEM:** Count unsupported; category labels/relationship breadth embellished; synthetic logo.
- **APPROVED DRIVE SOURCE:** P p29 and C verification; approved logo files L02–L12 as applicable.
- **APPROVED REPLACEMENT CONTENT:** Verified source names only; preserve OPPEIN HYDERABAD and Agri by MTC qualifiers. Omit invented sector descriptors/counts. Confirm public-use scope before national/global positioning.
- **APPROVED REPLACEMENT ASSET:** Approved logo derivatives where available; plain source names elsewhere rather than invented logo art. Do not add logo-only unsupported names.
- **ACTION:** REPLACE

### 4. Services

- **CURRENT SECTION:** `ServiceExplorer.tsx` (not the unused eight-service `Services.tsx`).
- **CURRENT CONTENT:** Five capability tabs: social, branding, web, performance, print; detailed deliverables; 24–48h, 3–5d, 3–7d, 48–72h estimates; “100% Commercial Rights · Native Figma & Adobe Files”.
- **CURRENT ASSETS:** UI icons/decorative panels; no approved service-specific hero media.
- **AUDIT PROBLEM:** Eight approved service names differ from current five-tab selection; detailed promises/rights/turnaround not verified.
- **APPROVED DRIVE SOURCE:** P p3; P pp20–25 supports a print-work category, not a commercial SLA.
- **APPROVED REPLACEMENT CONTENT:** Exact eight service labels in B. Hide unsupported turnaround/rights/native-file/delivery assertions. Detailed service descriptions need source or approval; do not import prototype `SERVICES_DATA` prose as approved copy.
- **APPROVED REPLACEMENT ASSET:** None required; no invented service imagery.
- **ACTION:** REPLACE

### 5. How It Works

- **CURRENT SECTION:** Process portion of `HowItWorks.tsx`.
- **CURRENT CONTENT:** Portal/Slack/email intake, dedicated team/pods, unlimited queue/revisions, 24–48h delivery.
- **CURRENT ASSETS:** Step icons and product-like interface decorations.
- **AUDIT PROBLEM:** No approved process/SLA evidence; implies an operating product/service contract.
- **APPROVED DRIVE SOURCE:** None for this workflow. P p2 general strategy language does not substantiate these specifics.
- **APPROVED REPLACEMENT CONTENT:** None. Require an approved process description before restoring.
- **APPROVED REPLACEMENT ASSET:** None.
- **ACTION:** HIDE

### 6. Workflow simulator

- **CURRENT SECTION:** Interactive brief sandbox inside `HowItWorks.tsx`.
- **CURRENT CONTENT:** Request types, 24h/48h/same-day urgency, submit/confirmation simulation.
- **CURRENT ASSETS:** Interactive UI only.
- **AUDIT PROBLEM:** Local-state simulation could be mistaken for real request intake or a delivery guarantee.
- **APPROVED DRIVE SOURCE:** None.
- **APPROVED REPLACEMENT CONTENT:** None; do not relabel as real intake.
- **APPROVED REPLACEMENT ASSET:** None.
- **ACTION:** HIDE

### 7. Scope calculator

- **CURRENT SECTION:** `CreativeCalculator.tsx`, `#pricing`.
- **CURRENT CONTENT:** Sliders; social + web × 5 + branding increment estimate; staffing/tier recommendations, turnaround and unlimited-active promises.
- **CURRENT ASSETS:** Calculator UI only.
- **AUDIT PROBLEM:** Formula, capacities and commercial interpretation have no approved basis.
- **APPROVED DRIVE SOURCE:** None; no rate card or capacity model.
- **APPROVED REPLACEMENT CONTENT:** None until formula/terms are owner-approved. Do not create replacement prices.
- **APPROVED REPLACEMENT ASSET:** None.
- **ACTION:** HIDE

### 8. Comparison section

- **CURRENT SECTION:** `ComparisonTable.tsx`, `#comparison`.
- **CURRENT CONTENT:** Agency/freelancer/in-house comparisons; cost examples including $120k, 24–48 hours, unlimited revisions, commercial rights and staffing claims.
- **CURRENT ASSETS:** Comparison matrix/icons.
- **AUDIT PROBLEM:** Competitor and business-operating assertions unsupported.
- **APPROVED DRIVE SOURCE:** None.
- **APPROVED REPLACEMENT CONTENT:** None; no new comparisons proposed.
- **APPROVED REPLACEMENT ASSET:** None.
- **ACTION:** HIDE

### 9. Selected Work

- **CURRENT SECTION:** `SelectedWork.tsx`, `SELECTED_PROJECTS`.
- **CURRENT CONTENT:** Currently renders Detailing Daddy, Kulture, SOHO and Tata work; selected-project data additionally contains Turtle Wax. Long campaign descriptions, deliverables and blanket 2026 dates.
- **CURRENT ASSETS:** DD constructed cover/logo/showcase; `/images/social-kulture.jpg`, `/images/social-soho.jpg`, `/images/social-tatamotors.jpg`; client browser-local uploads can affect DD presentation.
- **AUDIT PROBLEM:** Placeholder media; unsupported national campaign, production and performance scope; dates; browser-local uploaded assets are not deployed approved source.
- **APPROVED DRIVE SOURCE:** P pp5–7,13–15,28; hero4; section D.
- **APPROVED REPLACEMENT CONTENT:** Corresponding source client and category labels only. Keep SOHO web evidence separate from brochure/social evidence; omit unknown summaries, dates and deliverables. This does not rank projects.
- **APPROVED REPLACEMENT ASSET:** DD M07/L02; Kulture M02; SOHO website M13; Tata M05. Remove upload controls from public V1 in a later implementation.
- **ACTION:** REPLACE

### 10. Portfolio

- **CURRENT SECTION:** `PortfolioSection.tsx`, `ALL_PORTFOLIO_PROJECTS`.
- **CURRENT CONTENT:** 14 entries, category filters, titles/summaries/year/deliverables detailed in D.
- **CURRENT ASSETS:** Repeated generic images: social-kulture, social-soho, social-turtlewax, social-tatamotors, web-svc-realty, web-soho-residences and constructed DD SVGs.
- **AUDIT PROBLEM:** Images not truthful project evidence; unsupported elaborations; Altossa duplicate scope; Borntrue samples presented as client campaign.
- **APPROVED DRIVE SOURCE:** P pp5–28 and approved homepage images as mapped in D.
- **APPROVED REPLACEMENT CONTENT:** D's evidence-limited labels; hide p10 duplication pending decision and p14 pending sample/client permission. Do not manufacture case-study narrative to satisfy existing data fields.
- **APPROVED REPLACEMENT ASSET:** M02–M13. Each entry gets its own source-linked asset; no unrelated substitutions.
- **ACTION:** REPLACE

### 11. About

- **CURRENT SECTION:** `About.tsx`.
- **CURRENT CONTENT:** “We create bold, strategic and result-oriented...” and “under one roof” paraphrases; collaboration CTA. No founder portrait currently rendered.
- **CURRENT ASSETS:** Reconstructed `BrandMasalaLogo`.
- **AUDIT PROBLEM:** Partial thematic support, but existing paraphrases/under-one-roof assertion are not the approved text.
- **APPROVED DRIVE SOURCE:** P p2; B; founder identity available P p30 if separately requested.
- **APPROVED REPLACEMENT CONTENT:** Exact P p2 excerpt in B. No new biography/team claims; hold CTA until a verified contact route exists.
- **APPROVED REPLACEMENT ASSET:** M01. No founder portrait extraction proposed for current section.
- **ACTION:** REPLACE

### 12. Clients

- **CURRENT SECTION:** `Clients.tsx`.
- **CURRENT CONTENT:** 12 featured names under “BRANDS WE'VE WORKED WITH”: DD, Tata, Turtle Wax, SOHO Jubilee Hills, Kulture, Mercedes, Ather Energy, SVC Realty, Rawpchic, Roch, Trilight, Jains Radhakrishna; sector subtitles.
- **CURRENT ASSETS:** Text lockups; custom DD logo.
- **AUDIT PROBLEM:** Name variants and public relationship scope need care; custom logo and embellished categories are not approved evidence.
- **APPROVED DRIVE SOURCE:** P p29; P p27 for SVC; section C.
- **APPROVED REPLACEMENT CONTENT:** Source-backed names; remove unsupported category assertions; retain no numeric client count. Hold any public scope that owner cannot confirm.
- **APPROVED REPLACEMENT ASSET:** Matching approved logos L02–L12 where relevant; source names for missing standalone logos. Do not use Jain Constructions logo as Jains project logo without confirmation.
- **ACTION:** REPLACE

### 13. Contact

- **CURRENT SECTION:** `FinalCTA.tsx`, `#contact`.
- **CURRENT CONTENT:** “LET'S MAKE SOMETHING MEMORABLE”; “Tell us what you're building, launching or trying to change”; Start a Conversation opens modal.
- **CURRENT ASSETS:** Text/button; no verified contact asset.
- **AUDIT PROBLEM:** No real delivery channel; no verified agency contact details; CTA copy not sourced from approved company document.
- **APPROVED DRIVE SOURCE:** None for contact route; see F.
- **APPROVED REPLACEMENT CONTENT:** Missing. Request verified agency channel and approval of retained CTA wording; do not invent a mailto/phone/social URL.
- **APPROVED REPLACEMENT ASSET:** None.
- **ACTION:** NEEDS USER APPROVAL

### 14. Footer

- **CURRENT SECTION:** `Footer.tsx`.
- **CURRENT CONTENT:** Brand/copyright/navigation; Instagram and LinkedIn links to generic platform homepages.
- **CURRENT ASSETS:** Reconstructed wordmark and social icons.
- **AUDIT PROBLEM:** Generic platform links are not agency profiles; no approved alternative URLs. Logo not approved master.
- **APPROVED DRIVE SOURCE:** B; P cover. Homepage artworks contain @brandmasala but no platform-specific URL.
- **APPROVED REPLACEMENT CONTENT:** Preserve brand name and neutral navigation; remove/hide generic social links pending verified URLs. Copyright/legal holder wording needs owner confirmation; no new legal entity/address.
- **APPROVED REPLACEMENT ASSET:** M01 if suitable for footer background.
- **ACTION:** REPLACE

### 15. Project modal

- **CURRENT SECTION:** `ProjectModal.tsx`, selected/portfolio project records.
- **CURRENT CONTENT:** Client, title, category, year, summary, deliverables/gallery/location; inquiry CTA. DD record includes Kompally and 9989930929.
- **CURRENT ASSETS:** Same prototype covers/galleries as cards.
- **AUDIT PROBLEM:** Modal magnifies unsupported detail; client phone can be confused with agency contact; inquiry does not deliver.
- **APPROVED DRIVE SOURCE:** Exact per-project pages in D; no general case-study facts implied.
- **APPROVED REPLACEMENT CONTENT:** Client and explicit source category/deliverable labels only. Omit unsupported year/summary/location/result fields, not fabricated fillers. DD phone must never be agency contact; hold inquiry until real route exists.
- **APPROVED REPLACEMENT ASSET:** Same source-matched M02–M13 as cards; no invented galleries. PDF-derived pages require legibility review.
- **ACTION:** REPLACE

### 16. Contact modal

- **CURRENT SECTION:** `ContactModal.tsx`.
- **CURRENT CONTENT:** Name/email/phone/company/capabilities/timeline/message; success display after validation.
- **CURRENT ASSETS:** Form/icons; no approved media needed.
- **AUDIT PROBLEM:** `handleSubmit` only sets `submitted=true`; no delivery request/storage service. Success is not proof an inquiry was sent. No approved recipient or privacy/retention policy.
- **APPROVED DRIVE SOURCE:** P p3 supports capability names only; no intake backend/recipient policy.
- **APPROVED REPLACEMENT CONTENT:** None for submission/confirmation. Restore only after owner provides recipient, delivery approach and privacy wording, followed by verified delivery testing.
- **APPROVED REPLACEMENT ASSET:** None.
- **ACTION:** HIDE

### 17. Showreel

- **CURRENT SECTION:** `ShowreelModal.tsx` and Hero trigger.
- **CURRENT CONTENT:** Slide-based simulated reel/timeline, 1:45 presentation, Kulture +168% engagement, SOHO 40-floor claim.
- **CURRENT ASSETS:** Static prototype images, not an approved combined video.
- **AUDIT PROBLEM:** Unsupported performance metric and reel presentation. Loose videos do not prove an edited showreel or music/publication rights.
- **APPROVED DRIVE SOURCE:** Loose client videos exist in Ather, Furnestry, Kulture, Oppein and Turtlewax folders; no approved assembled showreel identified.
- **APPROVED REPLACEMENT CONTENT:** None; remove unsupported metric regardless of later reel approval.
- **APPROVED REPLACEMENT ASSET:** None for V1. Inventory is not a recommendation to concatenate videos.
- **ACTION:** HIDE

### 18. SEO / favicon / brand assets

- **CURRENT SECTION:** `index.html`, `BrandMasalaLogo.tsx`, public identity assets.
- **CURRENT CONTENT:** Brand title/tagline; description includes “high-performance web platforms”; OG text/type; Twitter large-image card; no configured favicon, canonical or share image.
- **CURRENT ASSETS:** Generated wordmark variants, remote Google/OnlineWebFonts/Font Awesome and local fonts; no approved favicon master.
- **AUDIT PROBLEM:** Performance wording unsupported; sharing image/canonical absent; domain and brand variant approval missing. Third-party font/license review separate from content verification.
- **APPROVED DRIVE SOURCE:** B; P p2; no approved domain or favicon file.
- **APPROVED REPLACEMENT CONTENT:** KEEP Brand Masala + source tagline; use only source-approved description excerpt after selection. Do not guess canonical/contact/schema fields or create ratings/results schema.
- **APPROVED REPLACEMENT ASSET:** M01 for identity; proposed favicon/share-image derivatives remain NEEDS USER APPROVAL, no copy path authorized yet.
- **ACTION:** NEEDS USER APPROVAL

## F. Contact information

| Channel | Verified Brand Masala value | Evidence / required follow-up |
|---|---|---|
| Email | **MISSING** | No verified agency email found in inspected approved company/homepage material. Supply exact address. |
| Phone | **MISSING** | `9989930929` appears on **Detailing Daddy** artwork; not an agency contact. Other client artwork contacts must also not be repurposed. |
| WhatsApp | **MISSING** | No verified Brand Masala WhatsApp number/link. Phone presence would not itself prove WhatsApp availability. |
| Instagram | **MISSING verified profile URL** | `@brandmasala` visible on hero1/hero3 is a source-backed handle only; platform/account ownership not established. Do not infer instagram.com/brandmasala. P pp11,18 Instagram UI has placeholder Username/likes and is not account verification. |
| LinkedIn | **MISSING** | No verified profile/company URL. Current generic linkedin.com is not valid agency contact. |

These are unresolved contacts, not permission to search other Drive folders or the public web. Embedded client artwork, tiny contact text or unreviewed video frames are not verified agency contact records.

## G. Media replacement plan

Sizes below are original file sizes in bytes, not estimated optimized output sizes. All processing is **future work only**. No resizing, exports, conversion, optimization, thumbnail generation or copying has been performed for deployment. PDF page previews were solely for inspection.

### Proposed V1 project/brand assets

For each PDF derivative, the exact SOURCE PATH is P as defined above (32,511,561 bytes, PDF); the page number uniquely identifies the input. Do not ship the full 32.5 MB PDF as a page background or publicly copy the company portfolio automatically. PDF-derived artwork is already rasterized; inspect its available resolution at final display size, never claim an upscaled export restores detail. If inadequate, classify that entry MISSING MEDIA and request an original.

| ID | SOURCE PATH / page | FILE TYPE | FILE SIZE | INTENDED USE | DESTINATION PATH | Required preparation, not performed |
|---|---|---|---:|---|---|---|
| M01 | B | PNG | 2,061,211 | Navbar/About/footer identity | `R/public/images/brand/brand-masala-logo.webp` | Trim transparent margins without changing artwork; lossless/near-lossless WebP; test small text/contrast; retain alpha |
| M02 | P p5 | PDF | 32,511,561 | Kulture social card/modal | `R/public/images/work/kulture-social.webp` | Export artwork region; WebP compression; thumbnail crop only after legibility review |
| M03 | P p12 | PDF | 32,511,561 | SOHO social | `R/public/images/work/soho-social.webp` | Export artwork region; WebP; avoid distorting embedded typography |
| M04 | P p17 | PDF | 32,511,561 | Turtle Wax social | `R/public/images/work/turtlewax-social.webp` | Export/WebP; review dated offers/client contact context; no performance caption |
| M05 | P p13 | PDF | 32,511,561 | Tata social | `R/public/images/work/tata-motors-social.webp` | Export/WebP; no national-scope inference |
| M06 | P p8 | PDF | 32,511,561 | Rawpchic social | `R/public/images/work/rawpchic-social.webp` | Export/WebP; preserve composition/text |
| M07 | `D/04_HOMEPAGE_MEDIA/hero4.png` | PNG | 1,854,963 | DD card/modal artwork | `R/public/images/work/detailing-daddy-social.webp` | WebP conversion/compression; preserve full creative in modal; thumbnail crop review; client contact must remain clearly client-owned |
| M08 | P p21 | PDF | 32,511,561 | Kulture print | `R/public/images/work/kulture-print.webp` | Export cards/cover artwork; WebP; don't invent physical materials |
| M09 | `D/04_HOMEPAGE_MEDIA/hero2.jpg` | JPEG | 797,460 | SOHO brochure card/modal | `R/public/images/work/soho-brochure.webp` | WebP conversion/compression; portrait-safe thumbnail |
| M10 | P p23 | PDF | 32,511,561 | Jains newspaper-ad design | `R/public/images/work/jains-newspaper-ad.webp` | Export/WebP; design mockup context, not proof of publication; review offer text |
| M11 | P p25 | PDF | 32,511,561 | Single Altossa branding entry | `R/public/images/work/altossa-branding.webp` | Export montage/WebP; no fabrication/award claim |
| M12 | P p27 | PDF | 32,511,561 | SVC web-design/development entry | `R/public/images/work/svc-realty-website.webp` | Export/WebP; screenshot text legibility; no live-site/performance assertion |
| M13 | P p28 | PDF | 32,511,561 | SOHO web-design/development entry | `R/public/images/work/soho-residences-website.webp` | Export/WebP; distinguish from social/print card |
| M14 | `D/04_HOMEPAGE_MEDIA/hero1.jpg` | JPEG | 288,170 | Optional approved promotional hero artwork | `R/public/images/brand/brand-masala-promo.webp` | Conditional placement approval; WebP; portrait not automatically wide-cropped |

M14 is optional, not a mandate to redesign the hero. No new photograph, background, headline, favicon graphic or assembled showreel is proposed as if it already existed.

### Approved logo inventory and conditional replacements

All SOURCE PATH entries below are relative to `D/02_CLIENT_LOGOS/`; this prefix is part of every exact path. Proposed destinations are relative to R. These files require public-use scope/name matching before implementation. PNG/JPEG derivatives need compression, tight but non-destructive whitespace review and small-size readability testing. Preserve colors/aspect ratio; no automatic monochrome redraw. SVG requires safety/content inspection before public use; file presence alone is not inspection of embedded links/scripts.

| ID | SOURCE PATH suffix | FILE TYPE | FILE SIZE | INTENDED USE | DESTINATION PATH / disposition |
|---|---|---|---:|---|---|
| L01 | `bridgegapconsultants-com-logo.png` | PNG | 14,715 | No current verified client use | None; relationship approval required |
| L02 | `Detailing daddy logo.png` | PNG | 88,974 | Replace fabricated DD logo | `public/images/clients/detailing-daddy.webp` |
| L03 | `Furnestry logo.png` | PNG | 45,137 | Verified-client marquee | `public/images/clients/furnestry.webp` |
| L04 | `Jain Constructions.png` | PNG | 59,531 | Potential client mark | None until project/entity mapping confirmed |
| L05 | `Copy of logo black.png` | PNG | 22,941 | **Kulture** client mark | `public/images/clients/kulture.webp` |
| L06 | `M.Bhagwanlal and Co. logo.png` | PNG | 21,848 | Verified-client marquee | `public/images/clients/m-bhagwanlal.webp` |
| L07 | `oppeinhome-com-logo.png` | PNG | 13,774 | OPPEIN Hyderabad-qualified entry | `public/images/clients/oppein.webp`; retain qualified source name alongside mark |
| L08 | `atherenergy-com-logo.png` | PNG | 12,987 | Ather client entry | `public/images/clients/ather.webp` |
| L09 | `Copy of Rawpchic logo.jpg` | JPEG | 24,870 | Rawpchic client entry | `public/images/clients/rawpchic.webp` |
| L10 | `rispace logo.png` | PNG | 8,362 | No current verified client use | None; relationship approval required |
| L11 | `SOHO residence logo.png` | PNG | 9,939 | SOHO client entry | `public/images/clients/soho.webp` |
| L12 | `turtlewax-logo.png` | PNG | 66,154 | Turtle Wax client entry | `public/images/clients/turtlewax.webp` |
| L13 | `Zenthink logo.png` | PNG | 11,723 | Verified-client marquee | `public/images/clients/zenthink.webp` |
| L14 | `tatamotors-co-id-logo.png` | PNG | 51,574 | Tata client entry | `public/images/clients/tata-motors.webp`; entity/territory suitability needs review, filename is not proof |
| L15 | `mercedes-benz-com-logo.svg` | SVG | 314,724 | Mercedes client entry | `public/images/clients/mercedes-benz.svg`; inspect/sanitize before copying, no forced WebP conversion |

### Remaining media inventory — held, not proposed for copying

All paths below resolve beneath D. `—` destination means deliberately not proposed for repository copying at this stage. Content, client scope and/or placement must be approved before an exact derivative destination is assigned. No video duration, codec, music rights or quality is claimed without playback/technical review.

| SOURCE PATH | FILE TYPE | FILE SIZE (bytes) | Potential use / outstanding preparation | DESTINATION PATH |
|---|---|---:|---|---|
| `03_FEATURED_WORK/Detailing Daddy/IMG_9457.JPG` | JPEG | 1,437,109 | DD gallery candidate; visual matching, WebP, thumbnail/crop review | — |
| `03_FEATURED_WORK/Detailing Daddy/17cba18e-d4d1-4cd2-a9a8-47d377e63430.jpg` | JPEG | 170,538 | Same; don't infer services from imagery | — |
| `03_FEATURED_WORK/Detailing Daddy/IMG_9843.JPG` | JPEG | 1,510,960 | Same | — |
| `03_FEATURED_WORK/Furnestry_/IMG_9851.MOV` | MOV | 8,544,761 | Scope missing; playback, codec/rights review, video compression + poster thumbnail | — |
| `03_FEATURED_WORK/Furnestry_/DSC08193.HIF` | HIF | 8,966,144 | Scope missing; decode/visual review, browser-compatible WebP conversion, thumbnail | — |
| `03_FEATURED_WORK/Furnestry_/DSC08228.HIF` | HIF | 8,241,152 | Same; HIF not direct browser deployment asset | — |
| `03_FEATURED_WORK/JON CREATIVEs_/12.png` | PNG | 8,100,534 | Relationship/scope missing; WebP/compression if approved | — |
| `03_FEATURED_WORK/JON CREATIVEs_/9.png` | PNG | 4,849,360 | Same | — |
| `03_FEATURED_WORK/Kulture_/1cad05c8-20fb-4ebc-ae09-b8c04c2bf038.JPG` | JPEG | 185,568 | Potential gallery; match to source project, WebP, crop review | — |
| `03_FEATURED_WORK/Kulture_/58dc88ac-fe49-4dec-b679-64a5ee7a0fc7.JPG` | JPEG | 105,481 | Same | — |
| `03_FEATURED_WORK/Kulture_/0dc3b520-52a5-4506-9480-e5c3924adca0.JPG` | JPEG | 85,236 | Same | — |
| `03_FEATURED_WORK/Kulture_/929fb11b-81ea-4bb7-9053-c7c9239712b8.MP4` | MP4 | 524,427 | Playback/role/rights review, codec/bitrate assessment, poster generation; compression only if beneficial | — |
| `03_FEATURED_WORK/M. Bhagwanlal & Co._/GK_00421.JPG` | JPEG | 6,324,224 | Scope missing; WebP/compression and thumbnail after review | — |
| `03_FEATURED_WORK/M. Bhagwanlal & Co._/GK_00456.JPG` | JPEG | 7,733,248 | Same | — |
| `03_FEATURED_WORK/oppein_/F524CC3E-1872-4ECC-9F0C-CC4D1D0C266E.mp4` | MP4 | 10,299,177 | Scope missing; playback/rights, video compression, poster | — |
| `03_FEATURED_WORK/oppein_/IMG_8070.MOV` | MOV | 22,182,672 | Same; browser-compatible video conversion likely needed, codec unknown | — |
| `03_FEATURED_WORK/Ather/IMG_2994.MOV` | MOV | 24,008,257 | Scope missing; playback/rights, browser-compatible compressed video, poster | — |
| `03_FEATURED_WORK/Ather/IMG_2996.MOV` | MOV | 24,841,559 | Same | — |
| `03_FEATURED_WORK/Ather/IMG_2997.MOV` | MOV | 27,928,134 | Same | — |
| `03_FEATURED_WORK/Ather/IMG_5911.MOV` | MOV | 31,702,199 | Same | — |
| `03_FEATURED_WORK/Ather/IMG_5952.MOV` | MOV | 29,138,712 | Same | — |
| `03_FEATURED_WORK/Rawpchic_/1.jpg` | JPEG | 871,557 | Potential social gallery; match source, WebP, thumbnail review | — |
| `03_FEATURED_WORK/Rawpchic_/5 (1).jpg` | JPEG | 988,056 | Same | — |
| `03_FEATURED_WORK/Rawpchic_/Artboard 2.jpg` | JPEG | 662,439 | Same | — |
| `03_FEATURED_WORK/RiSpace Design_/1.jpg` | JPEG | 1,043,532 | Relationship/scope missing; WebP/crop review if approved | — |
| `03_FEATURED_WORK/RiSpace Design_/5 (1).jpg` | JPEG | 895,448 | Same | — |
| `03_FEATURED_WORK/RiSpace Design_/3A.jpg` | JPEG | 1,998,807 | Same | — |
| `03_FEATURED_WORK/SOHO/happy ugadi telugu.jpg` | JPEG | 1,531,363 | Potential social gallery; review seasonal context, WebP | — |
| `03_FEATURED_WORK/SOHO/Artboard 6.jpg` | JPEG | 355,982 | Potential social gallery; source matching, WebP, thumbnail | — |
| `03_FEATURED_WORK/SOHO/Artboard 11.jpg` | JPEG | 558,076 | Same | — |
| `03_FEATURED_WORK/Turtlewax/ADE8A13E-A398-483A-9FFA-849E2053BF16.mp4` | MP4 | 5,079,614 | Playback/agency role/rights review; video compression, poster | — |
| `03_FEATURED_WORK/Turtlewax/IMG_9518.MOV` | MOV | 3,250,886 | Same; confirm codec/browser format | — |
| `04_HOMEPAGE_MEDIA/hero3.jpg` | JPEG | 361,352 | Optional approved self-promo; placement approval, WebP/portrait crop review | — |

No media quality ranking was performed. Loose original files may ultimately be preferable to PDF exports after matching/visual review, but that substitution must preserve traceable provenance and update this manifest. Do not use PDFs pp11/18 whole Instagram mockups with placeholder usernames, verification icons or likes as live campaign evidence.

## H. Content still requiring user approval

1. Supply the missing launch audit/checklist and reconcile outstanding launch requirements.
2. Approve the evidence-limited V1 portfolio format: client + source category + real artwork, with unknown dates/results/summaries omitted. Approve consolidating Altossa p10/p13; decide whether Borntrue may appear explicitly as work samples rather than a client campaign.
3. Confirm public-display permissions and exact contracting/advertised entity for national/global marks, especially Mercedes-Benz, Tata Motors, Ather, Turtle Wax and OPPEIN Hyderabad. An approved clients page supports the listed name, not an expanded relationship claim.
4. Confirm canonical Jains project spelling/logo, SOHO variants, Agri by MTC and Ramesh Lasik & Laser Centre names. Do not substitute Jain Constructions automatically.
5. Provide authentic project briefs/agency roles for Furnestry, M. Bhagwanlal, Ather, Oppein; relationship and role approval for JON CREATIVEs, RiSpace and Bridgegap. No dates/results required if intentionally omitted from V1.
6. Provide verified agency email, phone, WhatsApp and exact Instagram/LinkedIn URLs. Confirm whether @brandmasala refers to an Instagram account and whether it is agency-owned.
7. Choose a genuine contact delivery path and recipient; approve privacy/retention wording. Current fake-success form is not deployable intake. Implementation and delivery testing are a later task.
8. Approve logo usage on dark backgrounds, hero placement (optional portrait hero1 versus no approved video), favicon and social-sharing image. Supply official variants/master files if needed; do not redraw automatically.
9. Supply canonical production domain and legal/footer identity wording. Do not infer domain from hosting provider or client art.
10. Confirm that dated offers, embedded client contacts, newspaper mockups and website screenshots may be publicly displayed as portfolio artwork, without implying current offers, actual ad placement or live site status.
11. Approve media export/crop/compression plan before execution. For videos, confirm agency role, usage/music/talent rights and playback/codec suitability first. No ready showreel exists in reviewed sources.
12. Supply process/SLA/rights/revision/commercial evidence only if workflow, simulator, calculator or comparison sections must return. Otherwise keep them hidden for V1.

## I. Sections to hide for V1

Proposed, **not implemented**:

- How It Works, workflow simulator, scope calculator and comparison section: no approved operational/commercial basis.
- Showreel modal and its trigger: no approved assembled reel; unsupported metrics.
- Contact modal and all triggers that falsely imply successful intake: until a real verified delivery path is implemented/tested. Contact section itself is pending user decision; hide its conversion CTA if unresolved at release.
- All hero numerical metrics, 200+ statements, Amazon/Google trust marks and unsupported national/global scope descriptors.
- Borntrue as a confirmed client campaign; separate Altossa p10 duplicate until scope/consolidation approval.
- Unsupported project dates, results, long descriptions and deliverables; no fabricated replacements to fill UI space.
- Public upload controls/browser-local DD showcase customization; not a deployable shared approved gallery.
- Generic Instagram/LinkedIn footer links until exact agency URLs are verified.

No team/testimonial section is currently rendered; do not add one from empty folders. Hiding means a later rendering change, not deleting the source during this task.

## J. Exact files proposed for copying into the repository

**No copies were made.** This is a conditional implementation manifest. Do not copy the entire Drive tree. Do not copy raw PDFs, videos, HIF files, desktop.ini, unused images or unverified logos into public assets. Approved transformations must happen later, without modifying Drive originals.

### Source inputs for proposed derivatives

- B → M01.
- P pages **5, 12, 17, 13, 8, 21, 23, 25, 27, 28**, respectively → M02, M03, M04, M05, M06, M08, M10, M11, M12, M13. P2 is identical and need not be copied or processed separately.
- `D/04_HOMEPAGE_MEDIA/hero4.png` → M07.
- `D/04_HOMEPAGE_MEDIA/hero2.jpg` → M09.
- `D/04_HOMEPAGE_MEDIA/hero1.jpg` → optional M14, only if placement approved.
- Exact logo files L02, L03, L05, L06, L07, L08, L09, L11, L12, L13, L14 → matching WebP destinations in G, after name/public-use review.
- L15 → SVG destination only after inspection/sanitization and scope approval. If modified for safety it is a derivative, not a byte-for-byte copy.

### Exact proposed repository output paths

All paths relative to R; corresponding exact source/type/size/use is in G.

```text
public/images/brand/brand-masala-logo.webp
public/images/work/kulture-social.webp
public/images/work/soho-social.webp
public/images/work/turtlewax-social.webp
public/images/work/tata-motors-social.webp
public/images/work/rawpchic-social.webp
public/images/work/detailing-daddy-social.webp
public/images/work/kulture-print.webp
public/images/work/soho-brochure.webp
public/images/work/jains-newspaper-ad.webp
public/images/work/altossa-branding.webp
public/images/work/svc-realty-website.webp
public/images/work/soho-residences-website.webp
public/images/clients/detailing-daddy.webp
public/images/clients/furnestry.webp
public/images/clients/kulture.webp
public/images/clients/m-bhagwanlal.webp
public/images/clients/oppein.webp
public/images/clients/ather.webp
public/images/clients/rawpchic.webp
public/images/clients/soho.webp
public/images/clients/turtlewax.webp
public/images/clients/zenthink.webp
public/images/clients/tata-motors.webp
public/images/clients/mercedes-benz.svg
```

Optional, separately approved: `public/images/brand/brand-masala-promo.webp` (M14). No favicon/share-image destination is proposed as ready because the composition/master choice is unresolved. No extra thumbnails are silently included: the listed derivatives can serve card/modal use if legible; separate crops need a manifest update.

### Review gate / task completion

Only this document is the repository deliverable. React, CSS, dependencies, existing assets and prototype content remain unchanged. No install/build was needed for this documentation-only task; no build/deployment result is claimed. User review of this mapping is required before implementation. The missing launch documents, contact route and outstanding approvals remain explicit blockers to claiming production content readiness.
