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
