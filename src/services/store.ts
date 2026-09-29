import { ContactMessage, QuoteRequest, AuthUser } from '../types';

const CONTACTS_KEY = 'maindsteel_contact_messages';
const QUOTES_KEY = 'maindsteel_quotes';
const AUTH_KEY = 'maindsteel_current_user';

// Listeners for reactive updates
type StoreListener = () => void;
const listeners: StoreListener[] = [];

export function subscribeToStore(listener: StoreListener) {
  listeners.push(listener);
  return () => {
    const index = listeners.indexOf(listener);
    if (index !== -1) listeners.splice(index, 1);
  };
}

function notifyListeners() {
  listeners.forEach((l) => l());
}

// Initial seed data if first time
function getInitialQuotes(): QuoteRequest[] {
  return [
    {
      id: 'COT-8941',
      nombre: 'Ing. Alejandro Vega',
      empresa: 'Nissan Mexicana A1',
      email: 'a.vega@nissan.example.com',
      telefono: '449 910 2200',
      servicioProducto: 'Estampado y Doblado de Tubo',
      volumen: 'Serie automotriz > 10,000 pzs/mes',
      mensaje: 'Requerimos cotización para lote inicial de soportes estructurales bajo norma IATF 16949 con plano CAD anexo.',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      status: 'En revisión'
    },
    {
      id: 'COT-8942',
      nombre: 'Mariana Fuentes',
      empresa: 'Marelli Aguascalientes',
      email: 'm.fuentes@marelli.example.com',
      telefono: '449 973 1400',
      servicioProducto: 'Corte Láser de Precisión',
      volumen: 'Serie media 1,000 - 5,000 pzs',
      mensaje: 'Corte en placa de acero al carbón de 1/2 pulgada con tolerancia +/- 0.05 mm para componentes de iluminación.',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      status: 'Pendiente'
    }
  ];
}

function getInitialContacts(): ContactMessage[] {
  return [
    {
      id: 'MSG-301',
      nombre: 'Lic. Roberto Mendoza',
      email: 'roberto.mendoza@tachi-s.example.com',
      telefono: '449 910 5580',
      asunto: 'Auditoría de Proveedor Tier 2',
      mensaje: 'Estimado equipo de Maindsteel, deseamos programar visita técnica a su nave de 14,000 m2 en PIVA para certificación.',
      createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
      read: true
    }
  ];
}

// Local storage helpers
export const dbService = {
  // Collection: contact_messages
  getContactMessages(): ContactMessage[] {
    try {
      const data = localStorage.getItem(CONTACTS_KEY);
      if (!data) {
        const initial = getInitialContacts();
        localStorage.setItem(CONTACTS_KEY, JSON.stringify(initial));
        return initial;
      }
      return JSON.parse(data);
    } catch {
      return getInitialContacts();
    }
  },

  async addContactMessage(message: Omit<ContactMessage, 'id' | 'createdAt'>): Promise<ContactMessage> {
    // Mimic async network roundtrip
    await new Promise((resolve) => setTimeout(resolve, 500));
    const current = this.getContactMessages();
    const newMsg: ContactMessage = {
      ...message,
      id: `MSG-${Math.floor(100 + Math.random() * 900)}`,
      createdAt: new Date().toISOString(),
      read: false
    };
    const updated = [newMsg, ...current];
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(updated));
    notifyListeners();
    return newMsg;
  },

  // Collection: quotes
  getQuotes(): QuoteRequest[] {
    try {
      const data = localStorage.getItem(QUOTES_KEY);
      if (!data) {
        const initial = getInitialQuotes();
        localStorage.setItem(QUOTES_KEY, JSON.stringify(initial));
        return initial;
      }
      return JSON.parse(data);
    } catch {
      return getInitialQuotes();
    }
  },

  async addQuote(quote: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>): Promise<QuoteRequest> {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const current = this.getQuotes();
    const newQuote: QuoteRequest = {
      ...quote,
      id: `COT-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      status: 'Pendiente'
    };
    const updated = [newQuote, ...current];
    localStorage.setItem(QUOTES_KEY, JSON.stringify(updated));
    notifyListeners();
    return newQuote;
  },

  deleteQuote(id: string) {
    const current = this.getQuotes();
    const updated = current.filter((q) => q.id !== id);
    localStorage.setItem(QUOTES_KEY, JSON.stringify(updated));
    notifyListeners();
  },

  deleteContactMessage(id: string) {
    const current = this.getContactMessages();
    const updated = current.filter((c) => c.id !== id);
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(updated));
    notifyListeners();
  }
};

// Auth Service
export const authService = {
  getCurrentUser(): AuthUser | null {
    try {
      const data = localStorage.getItem(AUTH_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  async login(email: string, _password: string): Promise<AuthUser> {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const user: AuthUser = {
      uid: 'usr_' + Math.random().toString(36).substring(2, 9),
      email: email.trim().toLowerCase(),
      displayName: email.split('@')[0].toUpperCase(),
      role: email.includes('admin') ? 'ingenieria' : 'cliente'
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    notifyListeners();
    return user;
  },

  async register(name: string, email: string, _password: string): Promise<AuthUser> {
    await new Promise((resolve) => setTimeout(resolve, 700));
    const user: AuthUser = {
      uid: 'usr_' + Math.random().toString(36).substring(2, 9),
      email: email.trim().toLowerCase(),
      displayName: name.trim(),
      role: 'cliente'
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    notifyListeners();
    return user;
  },

  logout() {
    localStorage.removeItem(AUTH_KEY);
    notifyListeners();
  }
};
