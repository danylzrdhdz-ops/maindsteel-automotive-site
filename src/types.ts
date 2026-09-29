export type RoutePath = 
  | 'inicio' 
  | 'procesos' 
  | 'productos' 
  | 'contacto'
  | 'chatbot' // added
  | `proceso/${string}`;

export interface ProcessAdvantage {
  title: string;
  description: string;
  image: string;
}

export interface ProcessDetails {
  id: string;
  slug: string;
  title: string;
  bannerImage: string;
  machineryImage: string;
  machineryTitle: string;
  machineryText: string;
  advantagesTitle: string;
  advantagesText: string;
  advantagesImage: string;
  cardImage?: string;
  coverImage?: string;
  coverImageFit?: 'contain' | 'cover';
  machineryCardSpecs: string;
  machineryImageFit?: 'contain' | 'cover';
  additionalSpecs?: {
    label: string;
    value: string;
  }[];
}

export interface ProductItem {
  id: string;
  title: string;
  category: 'tubo-alambre' | 'racks' | 'carros' | 'estaciones' | 'componentes' | 'soldadura';
  categoryLabel: string;
  image: string;
  images?: string[];
  description: string;
  features: string[];
  materials: string[];
  tolerance: string;
}

export interface ContactMessage {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
  createdAt: string;
  read?: boolean;
}

export interface QuoteRequest {
  id: string;
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  servicioProducto: string;
  volumen: string;
  mensaje: string;
  createdAt: string;
  status: 'Pendiente' | 'En revisión' | 'Cotizado';
}

export interface AuthUser {
  uid: string;
  email: string;
  displayName: string;
  role: 'cliente' | 'proveedor' | 'ingenieria';
}

// ==== CHATBOT TYPES ====
export type CatalogCategory = 'proceso' | 'producto';

export interface CatalogItem {
  id: number;
  code: string;
  name: string;
  shortName: string;
  category: CatalogCategory;
  description: string;
  machinery: string;
  specs: string;
  automotiveStandard: string;
}

export type StepNumber = 1 | 2 | 3 | 4 | 5;

export interface MessageSender {
  role: 'bot' | 'user';
  step: StepNumber;
}

export interface ChatMessage {
  id: string;
  role: 'bot' | 'user';
  step: StepNumber;
  timestamp: string;
  content: string; // for user
  // For bot message structured display:
  botTitle?: string;
  botLines?: string[];
  rawText?: string;
  showQuickResponses?: boolean;
}

export interface RFQData {
  id: string;
  timestamp: string;
  itemCode?: string;
  itemNumber?: number;
  itemName: string;
  itemCategory: CatalogCategory;
  clientName: string;
  clientCompany: string;
  clientProject: string;
  clientEmail: string;
  shippingCountry: string;
  status: 'Turnado a Ingeniería Tier 2' | 'En Revisión' | 'Cotizado';
}
