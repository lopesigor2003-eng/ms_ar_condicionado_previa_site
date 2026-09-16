export type ServiceCategory = 'todos' | 'residencial' | 'comercial' | 'instalacao' | 'manutencao' | 'projeto';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory[];
  subtitle: string;
  description: string;
  highlight: string;
  features: string[];
  warranty: string;
  duration: string;
  badge?: string;
  popular?: boolean;
  recommendedFor: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  serviceType: string;
  location: string;
  comment: string;
  likes: number;
  googleVerified: boolean;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface AreaItem {
  id: string;
  name: string;
  zone: string;
  responseTime: string;
  featured?: boolean;
}

export interface QuoteCalculationInput {
  propertyType: 'residencial' | 'comercial' | 'escritorio' | 'clinica';
  serviceType: 'instalacao' | 'manutencao_preventiva' | 'manutencao_corretiva' | 'projeto_pmoc';
  roomSizeM2: number;
  sunExposure: 'manha' | 'tarde' | 'ambos' | 'sombra';
  peopleCount: number;
  electronicDevices: number;
  region: string;
  currentAcType?: string;
  notes?: string;
  customerName?: string;
  customerPhone?: string;
}

export interface CalculatedBtuResult {
  recommendedBtu: number;
  btuFormatted: string;
  recommendedModels: string[];
  tips: string[];
}
