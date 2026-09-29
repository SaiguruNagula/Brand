// Public V1 facts: approved portfolio pages listed in CONTENT_MAPPING.md.
// Missing case-study fields are optional, never populated with prototype claims.
export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Social Media' | 'Print Media' | 'Website Development' | 'Branding';
  year?: string;
  summary?: string;
  deliverables?: string[];
  image: string;
  gallery?: string[];
}
export interface ClientItem { name: string; logo?: string; }
export const ALL_PORTFOLIO_PROJECTS: Project[] = [
  { id: 'p1', client: 'KULTURE', title: 'Social Media', category: 'Social Media', image: '/images/work/kulture-social.webp' },
  { id: 'p2', client: 'SOHO', title: 'Social Media', category: 'Social Media', image: '/images/work/soho-social.webp' },
  { id: 'p3', client: 'TURTLE WAX', title: 'Social Media', category: 'Social Media', image: '/images/work/turtlewax-social.webp' },
  { id: 'p4', client: 'TATA MOTORS', title: 'Social Media', category: 'Social Media', image: '/images/work/tata-motors-social.webp' },
  { id: 'p5', client: 'RAWPCHIC', title: 'Social Media', category: 'Social Media', image: '/images/work/rawpchic-social.webp' },
  { id: 'p6', client: 'DETAILING DADDY', title: 'Social Media Ads', category: 'Social Media', image: '/images/work/detailing-daddy-social.webp' },
  { id: 'p7', client: 'KULTURE', title: 'Business Cards & Magazine Cover', category: 'Print Media', image: '/images/work/kulture-print.webp' },
  { id: 'p8', client: 'SOHO', title: 'Brochure', category: 'Print Media', image: '/images/work/soho-brochure.webp' },
  { id: 'p9', client: 'JAINS RADHAKRISHNA BLISS', title: 'Newspaper Ad Design', category: 'Print Media', image: '/images/work/jains-newspaper-ad.webp' },
  { id: 'p11', client: 'SVC REALTY', title: 'Website — Designing & Development', category: 'Website Development', image: '/images/work/svc-realty-website.webp' },
  { id: 'p12', client: 'SOHO RESIDENCES', title: 'Website — Designing & Development', category: 'Website Development', image: '/images/work/soho-residences-website.webp' },
  { id: 'p13', client: 'ALTOSSA', title: 'Branding', category: 'Branding', image: '/images/work/altossa-branding.webp' },
];
export const SELECTED_PROJECTS = ['p6', 'p1', 'p12', 'p4'].map(id => ALL_PORTFOLIO_PROJECTS.find(project => project.id === id)!);
export const CLIENTS_LIST: ClientItem[] = [
  { name: 'MERCEDES-BENZ', logo: 'mercedes-benz.svg' },
  { name: 'TATA MOTORS', logo: 'tata-motors.webp' },
  { name: 'ATHER', logo: 'ather.webp' },
  { name: 'TURTLE WAX', logo: 'turtlewax.webp' },
  { name: 'SOHO', logo: 'soho.webp' },
  { name: 'KULTURE', logo: 'kulture.webp' },
  { name: 'RAWPCHIC', logo: 'rawpchic.webp' },
  { name: 'ROCH Cafe Bistro' }, { name: 'TRILIGHT' }, { name: 'Clark Lloyd Architects' },
  { name: 'JAINS RADHAKRISHNA BLISS' }, { name: 'ZENTHINK', logo: 'zenthink.webp' },
  { name: 'DETAILING DADDY', logo: 'detailing-daddy.webp' },
  { name: 'OPPEIN HYDERABAD', logo: 'oppein.webp' },
  { name: 'SPACES BY MTC' }, { name: 'Agri by MTC' },
  { name: 'M. BHAGWANLAL & CO.', logo: 'm-bhagwanlal.webp' },
  { name: 'ALTOSSA' }, { name: 'COUNTRYSIDE FARMS' }, { name: 'VNR DAIRY' },
  { name: 'CERAMIC PRO' }, { name: 'Ramesh Lasik & Laser Centre' },
  { name: 'FURNESTRY', logo: 'furnestry.webp' }, { name: 'LIONS INTERNATIONAL' },
  { name: 'SVC REALTY' },
];
