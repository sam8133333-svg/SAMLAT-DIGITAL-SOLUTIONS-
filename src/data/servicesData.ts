import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    name: 'Website Development',
    shortDesc: 'Custom, high-performance web applications and corporate websites built with modern frameworks for speed, security, and responsiveness.',
    features: ['Custom Frontend Architecture', 'Mobile-First Fluid Layouts', 'Speed & SEO Optimization', 'Clean, Scalable Codebases'],
    icon: 'Code2'
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    shortDesc: 'Eye-catching visual designs for social media marketing, advertising campaigns, banners, posters, and print media that demand attention.',
    features: ['Social Media Visual Kits', 'Marketing & Promo Banners', 'Flyers & Poster Design', 'High-Resolution Vector Graphics'],
    icon: 'Palette'
  },
  {
    id: 'branding',
    name: 'Logo Design and Branding',
    shortDesc: 'Memorable brand identity packages that communicate trust and authority, including vector logos, typography guides, and brand kits.',
    features: ['Unique Vector Logo Creation', 'Typography & Color Systems', 'Brand Style Guidelines', 'Stationery & Mockup Collateral'],
    icon: 'Sparkles'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Websites',
    shortDesc: 'Conversion-focused online storefronts with intuitive product catalogs, seamless shopping flows, and secure checkout experiences.',
    features: ['Product Catalog Management', 'Cart & Order Flow Design', 'Payment Gateway Readiness', 'Mobile-Optimized Checkout'],
    icon: 'ShoppingBag'
  },
  {
    id: 'maintenance',
    name: 'Website Maintenance',
    shortDesc: 'Reliable ongoing support, proactive security updates, performance monitoring, content updates, and routine technical health checks.',
    features: ['Regular Security Updates', 'Speed & Asset Optimization', 'Bug Fixing & Troubleshooting', 'Content Refresh Support'],
    icon: 'Wrench'
  },
  {
    id: 'fintech',
    name: 'Fintech and Digital Services',
    shortDesc: 'Specialized digital interface solutions for payment systems, financial dashboard concepts, transaction tracking, and modern portal UIs.',
    features: ['Financial Dashboard UIs', 'Transaction Flows & Ledgers', 'Secure UI Architecture', 'Data Visualization Views'],
    icon: 'TrendingUp'
  },
  {
    id: 'consultation',
    name: 'Digital Consultation',
    shortDesc: 'Strategic guidance on tech stacks, digital transformation roadmaps, online marketing direction, and technical project feasibility.',
    features: ['Architecture & Tech Advisory', 'Project Scoping & Roadmapping', 'Digital Presence Strategy', 'Requirement Engineering'],
    icon: 'Lightbulb'
  }
];
