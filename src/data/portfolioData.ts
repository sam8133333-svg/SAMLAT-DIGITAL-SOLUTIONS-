import { PortfolioProject } from '../types';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'apex-avant-store',
    title: 'Avant Urban Wear E-Commerce',
    category: 'web',
    categoryLabel: 'Web Design',
    isConcept: true,
    shortDesc: 'Modern responsive apparel storefront featuring dark aesthetics, fluid product browsing, and seamless cart mechanics.',
    fullDesc: 'A concept e-commerce experience designed for a premium modern apparel brand. Emphasizes dark minimalism, subtle electric blue product highlights, micro-interactions for catalog filtration, and responsive mobile-first checkout screens.',
    image: '/src/assets/images/portfolio_web_ecommerce_1792181162908.jpg',
    tools: ['React', 'Tailwind CSS', 'TypeScript', 'Responsive UI'],
    features: [
      'Dual-screen responsive layout (Desktop & Mobile viewport synergy)',
      'Subtle midnight UI palette with high-contrast product cards',
      'Dynamic shopping bag flow and sizing selector mockups',
      'Instant search and tag-based catalog filtering'
    ]
  },
  {
    id: 'apex-finance-portal',
    title: 'Apex Finance Analytics Dashboard',
    category: 'concepts',
    categoryLabel: 'Digital Concepts',
    isConcept: true,
    shortDesc: 'Fintech digital banking interface with cyan trend indicators, real-time balance metrics, and transaction ledgers.',
    fullDesc: 'Conceptual enterprise-grade financial management platform for digital-first banking and multi-currency transactions. Features clean tabular data, interactive balance trajectory charts, and quick-action transfer panels.',
    image: '/src/assets/images/portfolio_fintech_portal_1792181164094.jpg',
    tools: ['React', 'Tailwind CSS', 'Chart.js', 'Fintech Architecture'],
    features: [
      'Comprehensive balance overview with cyan glowing trend curves',
      'Categorized expense breakdown and rapid payout controls',
      'Interactive transaction feed with status verification',
      'Dark high-focus layout reducing cognitive load for analysts'
    ]
  },
  {
    id: 'nexus-brand-identity',
    title: 'Nexus Corporate Brand Identity',
    category: 'branding',
    categoryLabel: 'Branding',
    isConcept: true,
    shortDesc: 'Complete corporate identity package with geometric vector emblem, foil-stamped stationery, and typography manual.',
    fullDesc: 'A brand identity concept tailored for a modern tech consultancy firm. Encompasses precision geometric logomark construction, deep navy tactile business cards with silver foil embossing, executive notebook covers, and consistent collateral.',
    image: '/src/assets/images/portfolio_brand_identity_1792181164965.jpg',
    tools: ['Adobe Illustrator', 'Figma', 'Vector Geometry', 'Print Specs'],
    features: [
      'Scalable geometric emblem designed for both micro-icons and architectural signage',
      'Silver foil on midnight navy stationery specification',
      'Defined typography hierarchy for digital and editorial print',
      'Comprehensive brand asset guidelines'
    ]
  },
  {
    id: 'cyberpulse-campaign',
    title: 'CyberPulse Digital Marketing Suite',
    category: 'graphic',
    categoryLabel: 'Graphic Design',
    isConcept: true,
    shortDesc: 'High-impact digital marketing graphics, promotional social media flyers, and event banner campaign package.',
    fullDesc: 'A cohesive digital campaign graphics suite conceptualized for a tech startup launch. Features electric blue and cyan illuminated 3D geometry, high-converting promotional banners, social media multi-format carousels, and masterclass announcement flyers.',
    image: '/src/assets/images/portfolio_creative_graphics_1792181163216.jpg',
    tools: ['Photoshop', 'Illustrator', '3D Composition', 'Typography'],
    features: [
      'Multi-aspect ratio outputs for Instagram, LinkedIn, and display advertising',
      '3D geometric abstract lighting elements with neon cyan accents',
      'Clean typography hierarchy engineered for immediate scroll-stopping clarity',
      'Ready-to-deploy digital asset system'
    ]
  },
  {
    id: 'cloudcore-saas-web',
    title: 'CloudCore Infrastructure Web App',
    category: 'web',
    categoryLabel: 'Web Design',
    isConcept: true,
    shortDesc: 'High-performance cloud management portal with intuitive node monitors and developer-centric workflows.',
    fullDesc: 'A concept web application designed for cloud engineers and DevOps teams. Combines lightning-fast React state architecture with dark theme visual clarity, server status monitors, and one-click deployment controls.',
    image: '/src/assets/images/service_web_responsive_1792184156347.jpg',
    tools: ['TypeScript', 'Vite', 'Tailwind CSS', 'Web Performance'],
    features: [
      'Clean tabular server telemetry with zero visual clutter',
      'Intuitive resource allocation toggles and deployment previews',
      'Full keyboard accessibility and dark-mode optical contrast',
      'Sub-second route transitions'
    ]
  },
  {
    id: 'lumina-studios-brand',
    title: 'Lumina Creative Studio Identity',
    category: 'branding',
    categoryLabel: 'Branding',
    isConcept: true,
    shortDesc: 'Minimalist brand system with custom typography, lettermark monogram, and sleek digital presence guidelines.',
    fullDesc: 'Visual identity concept for a boutique digital production studio. Highlights minimal monoline lettering, versatile brand lockups across print and web, and digital design tokens for web implementation.',
    image: '/src/assets/images/service_branding_craft_1792184156656.jpg',
    tools: ['Figma', 'Vector Design', 'Brand Strategy', 'Design Tokens'],
    features: [
      'Harmonious typographic balance with optical kerning',
      'Versatile brand marks adaptable to dark and light backgrounds',
      'Social avatar and favicon export specifications',
      'Cohesive digital asset guide'
    ]
  }
];
