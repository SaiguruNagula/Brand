// Offline, explicit allowlist only. Never writes to the approved source directory.
// Usage: node scripts/prepare-v1-assets.mjs <approved-root> <pdf-tools-node_modules>
// PDF tooling is deliberately external to application dependencies.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const [sourceArg, toolsArg] = process.argv.slice(2);
if (!sourceArg || !toolsArg) throw new Error('Provide approved source root and temporary PDF tooling directory.');
const sourceRoot = path.resolve(sourceArg);
const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = path.join(repo, 'public', 'images');
if (outputRoot.startsWith(sourceRoot + path.sep)) throw new Error('Output must not be inside source material.');
const canvas = await import(pathToFileURL(path.join(toolsArg, '@napi-rs/canvas/index.js')).href);
const pdfjs = await import(pathToFileURL(path.join(toolsArg, 'pdfjs-dist/legacy/build/pdf.mjs')).href);
const records = [];
for (const folder of ['brand', 'work', 'clients']) await fs.mkdir(path.join(outputRoot, folder), { recursive: true });
async function save(input, destination, source, { logo = false, brand = false, page } = {}) {
  let pipeline = sharp(input).rotate();
  if (logo) pipeline = pipeline.trim({ threshold: 8 });
  pipeline = pipeline.resize({ width: brand ? 1000 : logo ? 600 : 2000, withoutEnlargement: true });
  const info = await pipeline.webp(logo ? { lossless: true, effort: 6 } : { quality: 90, effort: 6 }).toFile(path.join(outputRoot, destination));
  records.push({ source, ...(page ? { page } : {}), output: `public/images/${destination}`, width: info.width, height: info.height, bytes: info.size });
  console.log(`${destination}: ${info.width}x${info.height}, ${info.size} bytes`);
}
const pdfSource = '00_Brand/Copy of Brand Masala Work Portfolio .pdf';
const doc = await pdfjs.getDocument({ data: new Uint8Array(await fs.readFile(path.join(sourceRoot, pdfSource))), useSystemFonts: true }).promise;
const pages = [[5,'kulture-social'],[12,'soho-social'],[17,'turtlewax-social'],[13,'tata-motors-social'],[8,'rawpchic-social'],[21,'kulture-print'],[23,'jains-newspaper-ad'],[25,'altossa-branding'],[27,'svc-realty-website'],[28,'soho-residences-website']];
for (const [number, name] of pages) {
  const page = await doc.getPage(number);
  const natural = page.getViewport({ scale: 1 });
  const viewport = page.getViewport({ scale: 2000 / natural.width });
  const surface = canvas.createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
  await page.render({ canvasContext: surface.getContext('2d'), viewport }).promise;
  await save(surface.toBuffer('image/png'), `work/${name}.webp`, pdfSource, { page: number });
  page.cleanup();
}
await doc.cleanup();
for (const [source, destination, options] of [
  ['00_Brand/Copy of Logo4.png','brand/brand-masala-logo.webp',{logo:true,brand:true}],
  ['04_HOMEPAGE_MEDIA/hero4.png','work/detailing-daddy-social.webp',{}],
  ['04_HOMEPAGE_MEDIA/hero2.jpg','work/soho-brochure.webp',{}],
]) await save(await fs.readFile(path.join(sourceRoot, source)), destination, source, options);

const logos = [
  ['Detailing daddy logo.png','detailing-daddy'], ['Furnestry logo.png','furnestry'],
  ['Copy of logo black.png','kulture'], ['M.Bhagwanlal and Co. logo.png','m-bhagwanlal'],
  ['oppeinhome-com-logo.png','oppein'], ['atherenergy-com-logo.png','ather'],
  ['Copy of Rawpchic logo.jpg','rawpchic'], ['SOHO residence logo.png','soho'],
  ['turtlewax-logo.png','turtlewax'], ['Zenthink logo.png','zenthink'],
  ['tatamotors-co-id-logo.png','tata-motors'],
];
for (const [file, name] of logos) {
  const source = `02_CLIENT_LOGOS/${file}`;
  await save(await fs.readFile(path.join(sourceRoot, source)), `clients/${name}.webp`, source, { logo: true });
}
const svgSource = '02_CLIENT_LOGOS/mercedes-benz-com-logo.svg';
const svg = await fs.readFile(path.join(sourceRoot, svgSource), 'utf8');
// Fail closed on active content, external references and entity declarations.
if (/<(?:script|foreignObject|iframe|image|use)\b|\bon\w+\s*=|<!ENTITY|<!DOCTYPE|(?:href|src)\s*=|url\(\s*['"]?(?!#)/i.test(svg)) throw new Error('SVG needs manual safety review; not copied.');
await fs.writeFile(path.join(outputRoot, 'clients/mercedes-benz.svg'), svg);
records.push({source:svgSource,output:'public/images/clients/mercedes-benz.svg',bytes:Buffer.byteLength(svg)});
await fs.writeFile(path.join(repo, 'scripts/v1-assets-manifest.json'), JSON.stringify(records, null, 2) + '\n');
console.log(`Prepared ${records.length} allowlisted assets. Drive sources unchanged.`);
