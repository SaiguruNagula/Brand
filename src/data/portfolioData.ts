export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Social Media' | 'Print Media' | 'Website Development' | 'Branding';
  year?: string;
  summary: string;
  deliverables: string[];
  headline?: string;
  image: string;
  gallery?: string[];
  logo?: string;
  location?: string;
  aspect?: string;
  featured?: boolean;
  accentColor?: string;
}

export interface Service {
  number: string;
  title: string;
  summary: string;
  details: string[];
  deliverables: string[];
  tag: string;
}

export interface ClientItem {
  name: string;
  category: string;
  highlight?: string;
}

export const SERVICES_DATA: Service[] = [
  {
    number: "01",
    title: "DIGITAL MARKETING",
    summary: "Multi-channel digital growth engines turning visibility into high-intent revenue.",
    details: [
      "Omnichannel growth architecture combining paid, owned, and earned media",
      "Strategic campaign conceptualization tailored to market opportunities",
      "Conversion tracking, funnel instrumentation, and full-funnel attribution"
    ],
    deliverables: ["Growth Strategy", "Digital Campaigns", "Full-Funnel Attribution"],
    tag: "Growth & Scale"
  },
  {
    number: "02",
    title: "SOCIAL MEDIA MARKETING",
    summary: "Content and campaigns designed to keep brands relevant, recognizable, and dominant.",
    details: [
      "Platform-native editorial calendars and brand narrative curation",
      "Audience engagement strategies that cultivate active brand communities",
      "High-impact organic social campaigns that command the feed"
    ],
    deliverables: ["Channel Strategy", "Feed Architecture", "Community Engagement"],
    tag: "Presence & Reach"
  },
  {
    number: "03",
    title: "BRANDING",
    summary: "Distinctive brand identities and systems that establish market authority.",
    details: [
      "Comprehensive brand positioning, core identity guidelines, and visual language",
      "Logo suites, typography hierarchy, color theory, and tone of voice",
      "Packaging architecture, corporate collateral, and spatial brand integration"
    ],
    deliverables: ["Visual Identity", "Brand Guidelines", "Collateral & Packaging"],
    tag: "Identity & Authority"
  },
  {
    number: "04",
    title: "WEB DEVELOPMENT",
    summary: "Digital experiences designed around the brand, speed, and conversion.",
    details: [
      "Bespoke responsive web design engineered with Apple-grade precision",
      "Fast, fluid interactions with modern front-end architectures",
      "Conversion-focused user journeys with zero friction"
    ],
    deliverables: ["Custom Web Experiences", "Responsive Engineering", "Interactive Showcase"],
    tag: "Digital Experience"
  },
  {
    number: "05",
    title: "PERFORMANCE MARKETING",
    summary: "Data-led acquisition campaigns built around measurable ROAS and qualified leads.",
    details: [
      "Precision targeting across Meta, Google Ads, and programmatic networks",
      "Conversion rate optimization and continuous funnel A/B experimentation",
      "ROI-centered budget allocation and attribution modeling"
    ],
    deliverables: ["Paid Acquisition", "Lead Generation", "ROAS Optimization"],
    tag: "ROI & Conversions"
  },
  {
    number: "06",
    title: "UGC CONTENT CREATION",
    summary: "Authentic, relatable creator assets engineered for viral resonance and trust.",
    details: [
      "Vetted creator network producing authentic, high-converting product demonstrations",
      "Native TikTok/Instagram Reels style storytelling with thumb-stopping hooks",
      "Direct response ad creatives that outperform polished traditional commercials"
    ],
    deliverables: ["Creator Content", "Short-Form Video", "Relatable Hooks"],
    tag: "Authenticity & Virality"
  },
  {
    number: "07",
    title: "SEO",
    summary: "Search-focused strategies designed to capture high-intent commercial queries.",
    details: [
      "Technical architecture optimization for superior crawlability and speed",
      "Intent-based content modeling and high-value search visibility",
      "Sustainable organic search traffic compounding over time"
    ],
    deliverables: ["Technical Audit", "Keyword Architecture", "Authority Building"],
    tag: "Search & Visibility"
  },
  {
    number: "08",
    title: "APP DEVELOPMENT",
    summary: "Functional digital products built around real user journeys and business needs.",
    details: [
      "Intuitive native and hybrid mobile experiences for iOS and Android",
      "Robust backend integrations and frictionless user flows",
      "Scalable digital tools driving genuine operational and client value"
    ],
    deliverables: ["Mobile Architecture", "Product UI/UX", "API Integration"],
    tag: "Product & Engineering"
  }
];

export const APPROACH_STEPS = [
  {
    number: "01",
    title: "STRATEGY",
    subtitle: "Understand before we create.",
    description: "We start with the brand, audience and objective. Thorough market positioning and customer behavior analysis reveal the precise whitespace your brand can own."
  },
  {
    number: "02",
    title: "CREATIVE",
    subtitle: "Make people stop and look.",
    description: "Ideas become identities, campaigns and content. We craft bold aesthetic narratives that arrest attention in crowded feeds and command respect across mediums."
  },
  {
    number: "03",
    title: "EXECUTION",
    subtitle: "Make it work everywhere.",
    description: "From social and print to websites and digital experiences. Every single touchpoint is delivered with uncompromising craft and meticulous production discipline."
  }
];

export const SELECTED_PROJECTS: Project[] = [
  {
    id: "detailing-daddy-car-care",
    title: "Mirror-Finish Graphene Armor & PPF Studio",
    client: "DETAILING DADDY",
    category: "Social Media",
    year: "2026",
    summary: "High-gloss automotive branding and performance social campaign showcasing 9H ceramic coating, self-healing paint protection film (PPF), and studio prep under hexagonal ceiling illumination for luxury SUVs.",
    deliverables: ["High-Gloss Video Reels", "Brand Identity & Store Signage", "Location Campaign (Kompally)", "Performance Social Ads"],
    headline: "Shield Your Shine — Mirror-Finish Ceramic & Graphene Armor",
    image: "/images/work/detailing-daddy-social.webp",
    gallery: [
      "/images/work/detailing-daddy-social.webp"
    ],
    logo: "/images/clients/detailing-daddy.webp",
    location: "Kompally | 9989930929",
    featured: true,
    accentColor: "#FF6A00"
  },
  {
    id: "kulture-woodcraft",
    title: "Patterns with Purpose & Tactile Veneers",
    client: "KULTURE",
    category: "Social Media",
    year: "2026",
    summary: "Elevated architectural wooden veneer campaign showcasing tactile textures, sustainable beauty, and timeless craft for luxury interior spaces.",
    deliverables: ["Social Media Campaigns", "Art Direction", "Product Photography"],
    headline: "Textures that tempt. Scratches don't stand a chance.",
    image: "/images/work/kulture-social.webp",
    featured: true
  },
  {
    id: "soho-residences",
    title: "Own the Rhythm of Refined Living",
    client: "SOHO RESIDENCES",
    category: "Website Development",
    year: "2026",
    summary: "Digital experience and brand communication for prime luxury residential towers at Jubilee Hills, weaving nature, architecture, and tranquil perspectives.",
    deliverables: ["Digital Architecture", "Web Development", "Editorial Brochure"],
    headline: "Some homes give you an address. SOHO gives you a perspective.",
    image: "/images/work/soho-residences-website.webp",
    featured: true
  },
  {
    id: "turtlewax-automotive",
    title: "Next-Level Graphene Protection",
    client: "TURTLE WAX",
    category: "Social Media",
    year: "2026",
    summary: "High-voltage performance social campaign highlighting advanced surface protection, PPF durability, and showroom finish for automobile connoisseurs.",
    deliverables: ["Social Media Ads", "Visual Collateral", "Campaign Creative"],
    headline: "Invisible Protection. Visible Perfection.",
    image: "/images/work/turtlewax-social.webp",
    featured: false
  },
  {
    id: "tata-motors-campaign",
    title: "All New Altroz & Punch Mobility",
    client: "TATA MOTORS",
    category: "Social Media",
    year: "2026",
    summary: "National automotive social media campaign highlighting contemporary pride, energetic design language, and everyday family aspiration.",
    deliverables: ["Social Media Creatives", "Campaign Slogans", "Creative Production"],
    headline: "Feel Special. My pride on wheels.",
    image: "/images/work/tata-motors-social.webp",
    featured: false
  }
];

export const ALL_PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Kulture Natural Veneers & Surface Textures",
    client: "KULTURE",
    category: "Social Media",
    year: "2026",
    summary: "Architectural woodcraft campaign celebrating natural grains, rhythmic geometric chevrons, and scratch-resistant durability.",
    deliverables: ["Social Media Strategy", "Digital Graphics", "Editorial Stills"],
    image: "/images/work/kulture-social.webp"
  },
  {
    id: "p2",
    title: "SOHO Living & KRR Park Skyline",
    client: "SOHO",
    category: "Social Media",
    year: "2026",
    summary: "Curated social narrative uniting serenity and metropolitan luxury high-rise living with elevated panoramic views.",
    deliverables: ["Feed Curation", "Story Collateral", "Social Advertising"],
    image: "/images/work/soho-social.webp"
  },
  {
    id: "p3",
    title: "Turtle Wax Graphene & Leather Care",
    client: "TURTLE WAX",
    category: "Social Media",
    year: "2026",
    summary: "Creative social ads designed for automotive enthusiasts featuring PPF protection and interior restoration solutions.",
    deliverables: ["Campaign Creatives", "Paid Ads", "Ad Copy"],
    image: "/images/work/turtlewax-social.webp"
  },
  {
    id: "p4",
    title: "Tata Motors Altroz & Urban Lineup",
    client: "TATA MOTORS",
    category: "Social Media",
    year: "2026",
    summary: "Connected aspirations campaign articulating modern safety, bold road presence, and emotional pride.",
    deliverables: ["Social Ad Visuals", "Copy Direction", "Digital Assets"],
    image: "/images/work/tata-motors-social.webp"
  },
  {
    id: "p5",
    title: "Rawpchic Esthetique Furniture Line",
    client: "RAWPCHIC",
    category: "Social Media",
    year: "2026",
    summary: "Timeless craftsmanship and intentional organic silhouettes captured in warm editorial light for bespoke furniture collectors.",
    deliverables: ["Product Stills", "Social Lookbooks", "Creative Direction"],
    image: "/images/work/rawpchic-social.webp"
  },
  {
    id: "p6",
    title: "Detailing Daddy Precision Car Care & PPF Studio",
    client: "DETAILING DADDY",
    category: "Social Media",
    year: "2026",
    summary: "High-gloss automotive branding and performance social campaign showcasing 9H ceramic coating, self-healing paint protection film (PPF), and studio prep under hexagonal ceiling illumination for luxury SUVs.",
    deliverables: ["High-Gloss Video Reels", "Brand Identity & Store Signage", "Location Campaign (Kompally)", "Performance Social Ads"],
    headline: "Shield Your Shine — Mirror-Finish Ceramic & Graphene Armor",
    image: "/images/work/detailing-daddy-social.webp",
    gallery: [
      "/images/work/detailing-daddy-social.webp"
    ],
    logo: "/images/clients/detailing-daddy.webp",
    location: "Kompally | 9989930929",
    accentColor: "#FF6A00"
  },
  {
    id: "p7",
    title: "Kulture Identity & Magazine Editorial",
    client: "KULTURE",
    category: "Print Media",
    year: "2026",
    summary: "High-touch business cards in deep lapis blue foil with tactile veneer magazine cover features and dealer lookbooks.",
    deliverables: ["Business Card System", "Magazine Editorial", "Print Production"],
    image: "/images/work/kulture-print.webp"
  },
  {
    id: "p8",
    title: "SOHO Residences Luxury Monograph & Brochure",
    client: "SOHO",
    category: "Print Media",
    year: "2026",
    summary: "Bound architectural hardbound brochure featuring gold-embossed S monogram, aerial landscaping plates, and 53,000 sq ft clubhouse blueprints.",
    deliverables: ["Editorial Brochure", "Embossed Foil Covers", "Architectural Layouts"],
    image: "/images/work/soho-brochure.webp"
  },
  {
    id: "p9",
    title: "Jains Radhakrishna Bliss Newspaper Spread",
    client: "JAINS RADHAKRISHNA BLISS",
    category: "Print Media",
    year: "2026",
    summary: "Full-page broadsheet newspaper advertisement for 40-floor landmark tower at L.B. Nagar with zero pre-EMI callouts.",
    deliverables: ["Hindustan Times Front Page Ad", "Broadsheet Layout", "Offer Hierarchy"],
    image: "/images/work/jains-newspaper-ad.webp"
  },
  {
    id: "p10",
    title: "Altossa Corporate Collateral & Signage",
    client: "ALTOSSA",
    category: "Print Media",
    year: "2026",
    summary: "Comprehensive corporate apparel, architectural facade signage, and brushed metal awards for luxury commercial spaces.",
    deliverables: ["Storefront Signage", "Apparel Branding", "Corporate Awards"],
    image: "/images/social-kulture.jpg"
  },
  {
    id: "p11",
    title: "SVC Realty Architectural Digital Platform",
    client: "SVC REALTY",
    category: "Website Development",
    year: "2026",
    summary: "High-performance digital web experience conveying 25+ years of construction legacy, architectural drafting, and project portfolios.",
    deliverables: ["Bespoke Web Design", "Interactive Portfolio", "Architectural UI"],
    image: "/images/work/svc-realty-website.webp"
  },
  {
    id: "p12",
    title: "SOHO Residences Digital Showcase",
    client: "SOHO RESIDENCES",
    category: "Website Development",
    year: "2026",
    summary: "Minimalist web destination built for discerning buyers exploring 4,500 to 6,415 sq ft luxury apartments with smooth spatial walkthroughs.",
    deliverables: ["Interactive Floorplans", "Responsive Web App", "Inquiry Conversion"],
    image: "/images/work/soho-residences-website.webp"
  },
  {
    id: "p13",
    title: "Altossa Visual Identity & Spatial Presence",
    client: "ALTOSSA",
    category: "Branding",
    year: "2026",
    summary: "Brand mark, typography standard, and brand presence engineered for 'Unparalleled, Unrivalled' presence across architectural retail.",
    deliverables: ["Visual Identity System", "Brand Typography", "Environmental Design"],
    image: "/images/work/altossa-branding.webp"
  },
  {
    id: "p14",
    title: "Borntrue Modern Furniture Systems",
    client: "BORNTRUE",
    category: "Social Media",
    year: "2026",
    summary: "Elegantly composed social stories celebrating calm, ergonomic craftsmanship and Scandinavian-inspired lounge pieces.",
    deliverables: ["Art Direction", "Social Campaign", "Motion Graphics"],
    image: "/images/social-soho.jpg"
  }
];

export const CLIENTS_LIST: ClientItem[] = [
  { name: "MERCEDES-BENZ", category: "Automotive Luxury" },
  { name: "TATA MOTORS", category: "Automotive National" },
  { name: "ATHER", category: "Electric Mobility" },
  { name: "TURTLE WAX", category: "Automotive Detailing" },
  { name: "SOHO", category: "Luxury Real Estate" },
  { name: "KULTURE", category: "Architectural Veneers" },
  { name: "RAWPCHIC", category: "Luxury Furniture" },
  { name: "ROCH", category: "Hospitality & Cafe" },
  { name: "TRILIGHT", category: "Commercial & Living" },
  { name: "CLA", category: "Clark Lloyd Architects" },
  { name: "JAINS RADHAKRISHNA BLISS", category: "Residential Towers" },
  { name: "ZENTHINK", category: "Consulting & Enterprise" },
  { name: "DETAILING DADDY", category: "Car Protection Studio" },
  { name: "OPPEIN", category: "Modular Living" },
  { name: "SPACES BY MTC", category: "Commercial Spaces" },
  { name: "AGRI", category: "Sustainable Enterprise" },
  { name: "M. BHAGWANLAL & CO.", category: "Legacy Trade" },
  { name: "ALTOSSA", category: "Commercial Real Estate" },
  { name: "COUNTRYSIDE FARMS", category: "Organic Agro Living" },
  { name: "VNR DAIRY", category: "FMCG Pure Foods" },
  { name: "CERAMIC PRO", category: "Nanotech Surface Coating" },
  { name: "RAMESH LASIK", category: "Healthcare & Laser" },
  { name: "FURNESTRY", category: "Custom Woodcraft" },
  { name: "LIONS INTERNATIONAL", category: "Global Leadership" }
];
