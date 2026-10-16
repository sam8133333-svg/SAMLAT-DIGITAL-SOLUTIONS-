export type ServiceId = 
  | 'web-dev'
  | 'graphic-design'
  | 'branding'
  | 'ecommerce'
  | 'maintenance'
  | 'fintech'
  | 'consultation';

export interface ServiceItem {
  id: ServiceId;
  name: string;
  shortDesc: string;
  features: string[];
  icon: string;
}

export type PortfolioCategory = 
  | 'all'
  | 'web'
  | 'graphic'
  | 'branding'
  | 'concepts';

export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  isConcept: boolean;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tools: string[];
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  projectDescription: string;
}
