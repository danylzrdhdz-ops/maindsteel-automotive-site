import React, { useState, useRef, useEffect } from 'react';
import { BotBubble } from '../components/chatbot/BotBubble';
import { UserBubble } from '../components/chatbot/UserBubble';
import { Step5SuccessView } from '../components/chatbot/Step5SuccessView';
import { CatalogModal } from '../components/chatbot/CatalogModal';
import { RfqHistoryModal } from '../components/chatbot/RfqHistoryModal';
import { ApiPayloadModal } from '../components/chatbot/ApiPayloadModal';
import { CATALOG_ITEMS, matchCatalogItem } from '../data/catalog';
import { ChatMessage, RFQData, StepNumber, CatalogItem } from '../types';
import { 
  Send, 
  Mail, 
  ShieldCheck, 
  BookOpen, 
  Database, 
  CornerDownLeft, 
  ChevronRight,
  Bot,
  ArrowLeft
} from 'lucide-react';

const INITIAL_BOT_MESSAGE: ChatMessage = {
  id: 'msg-welcome-01',
  role: 'bot',
  step: 1,
  timestamp: 'Justo ahora',
  content: 'Bienvenida oficial y selección de requerimiento',
  botTitle: '🛡️ Maindsteel Automotive: Bienvenido',
  botLines: [
    'Bienvenido a Maindsteel Automotive. Por favor selecciona o',
    'escribe el número del proceso (1-12) o producto (13-18) a cotizar.'
  ],
  showQuickResponses: true
};

interface ChatbotQuotationViewProps {
  onBack: () => void;
  onGoHome: () => void;
  initialItem?: string;
}

export const ChatbotQuotationView: React.FC<ChatbotQuotationViewProps> = ({ onBack, onGoHome, initialItem }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_BOT_MESSAGE]);
  const [currentStep, setCurrentStep] = useState<StepNumber>(1);
  const [inputText, setInputText] = useState('');
  
  // Current draft RFQ data
  const [rfqDraft, setRfqDraft] = useState<Partial<RFQData>>({
    itemName: 'Racks de Manejo',
    clientCompany: 'Empresa Automotriz',
    clientName: 'Ing. Comprador',
    clientProject: 'Plataforma Tier 1',
    clientEmail: 'compras@empresa.com',
    shippingCountry: 'México'
  });

  // Saved database RFQs
  const [savedRfqs, setSavedRfqs] = useState<RFQData[]>(() => {
    try {
      const stored = localStorage.getItem('maindsteel_rfqs');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  // Completed finalized RFQ for Step 5
  const [finalizedRfq, setFinalizedRfq] = useState<RFQData | null>(null);

  // Modals state
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [catalogFilter, setCatalogFilter] = useState<'proceso' | 'producto' | undefined>(undefined);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isPayloadOpen, setIsPayloadOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-fill initial item on start
  const hasAutoSentRef = useRef(false);
  useEffect(() => {
    let isActive = true;
    if (initialItem && messages.length === 1 && currentStep === 1 && !hasAutoSentRef.current) {
      hasAutoSentRef.current = true;
      const timer = setTimeout(() => {
        if (isActive) {
          handleSendMessage(initialItem.replace('Producto: ', '').replace('Proceso: ', ''));
        }
      }, 700);
      return () => {
        isActive = false;
        clearTimeout(timer);
      };
    }
  }, [initialItem]);

  // Auto-scroll when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, currentStep]);

  // Persist RFQs in localStorage
  useEffect(() => {
    try {
      localStorage.setItem('maindsteel_rfqs', JSON.stringify(savedRfqs));
    } catch (e) {
      console.error(e);
    }
  }, [savedRfqs]);

  // Auto-scroll to chatbot interface on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const card = document.getElementById('chatbot-main-card');
      if (card) {
        const y = card.getBoundingClientRect().top + window.scrollY - 20;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 350); // Mismo retraso necesario para sobreescribir el window.scrollTo proveniente de App.tsx
    return () => clearTimeout(timer);
  }, []);

  // Handle restarting conversation
  const handleResetChat = () => {
    setMessages([INITIAL_BOT_MESSAGE]);
    setCurrentStep(1);
    setFinalizedRfq(null);
    setRfqDraft({
      itemName: '',
      clientCompany: '',
      clientName: '',
      clientProject: '',
      clientEmail: '',
      shippingCountry: ''
    });
    setInputText('');
  };

  // Handle going back a step or resetting to step 1
  const handleGoBack = () => {
    if (currentStep <= 1) {
      // Exit Chatbot and return to previous Product/Process catalog
      onBack();
      return;
    }

    const previousStep = (currentStep - 1) as StepNumber;
    setCurrentStep(previousStep);
    setFinalizedRfq(null);
    setInputText('');
    
    // Filter messages to keep up to the previous step
    setMessages(prev => {
      const filtered = prev.filter(m => m.step <= previousStep);
      return filtered.length > 0 ? filtered : [INITIAL_BOT_MESSAGE];
    });
  };

  // Clear history
  const handleClearHistory = () => {
    setSavedRfqs([]);
    localStorage.removeItem('maindsteel_rfqs');
  };

  const openCatalogWithFilter = (filterCategory?: 'proceso' | 'producto') => {
    setCatalogFilter(filterCategory);
    setIsCatalogOpen(true);
  };

  // Helper to get formatted local time
  const getFormattedTime = () => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Process sending a user input
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const time = getFormattedTime();

    // 1. Add user bubble (Solid Gold Right Bubble)
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      step: currentStep,
      timestamp: time,
      content: text
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Process State Machine Step by Step
    if (currentStep === 1) {
      const lower = text.toLowerCase();
      if (lower === 'hola' || lower === 'buenos días' || lower === 'buenas tardes' || lower === 'inicio') {
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              id: `bot-${Date.now()}`,
              role: 'bot',
              step: 1,
              timestamp: getFormattedTime(),
              content: 'Bienvenida oficial y menú',
              botTitle: '🛡️ Maindsteel Automotive: Bienvenido',
              botLines: [
                'Bienvenido a Maindsteel Automotive. Por favor indique',
                'el número del Proceso (1-12) o Producto (13-18) a cotizar.'
              ],
              showQuickResponses: true
            }
          ]);
        }, 300);
        return;
      }

      // Check catalog item match
      const matched = matchCatalogItem(text);
      const chosenName = matched ? matched.name : text;
      const chosenCat = matched ? matched.category : 'producto';
      const chosenCode = matched ? matched.code : undefined;
      const chosenId = matched ? matched.id : undefined;

      setRfqDraft(prev => ({
        ...prev,
        itemName: chosenName,
        itemCategory: chosenCat,
        itemCode: chosenCode,
        itemNumber: chosenId
      }));

      // Paso 2 Bot message
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            id: `bot-p2-${Date.now()}`,
            role: 'bot',
            step: 2,
            timestamp: getFormattedTime(),
            content: 'Solicitud de Nombre y Empresa',
            botTitle: '🤖 Maindsteel Automotive',
            botLines: [
              'Claro que sí me podría dar más detalles. Para',
              'canalizar el proyecto, ¿cuál es tu Nombre y Empresa?'
            ]
          }
        ]);
        setCurrentStep(2);
      }, 400);

    } else if (currentStep === 2) {
      // Received Name and Company
      let name = text;
      let company = 'Empresa Solicitante';

      if (text.includes(',') || text.includes('-') || text.includes('/') || text.includes('·')) {
        const parts = text.split(/[,/\-·]+/);
        name = parts[0].trim();
        company = parts.slice(1).join(' ').trim() || 'Empresa Automotriz';
      } else {
        const words = text.split(' ');
        if (words.length >= 3) {
          name = words.slice(0, 2).join(' ');
          company = words.slice(2).join(' ');
        }
      }

      setRfqDraft(prev => ({
        ...prev,
        clientName: name,
        clientCompany: company
      }));

      // Paso 3 Bot message
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            id: `bot-p3-${Date.now()}`,
            role: 'bot',
            step: 3,
            timestamp: getFormattedTime(),
            content: 'Solicitud de Proyecto y Correo',
            botTitle: '🤖 Maindsteel Automotive',
            botLines: [
              'Gracias. ¿Para qué Proyecto específico requieren las',
              'piezas y cuál es tu Correo Corporativo de contacto?'
            ]
          }
        ]);
        setCurrentStep(3);
      }, 400);

    } else if (currentStep === 3) {
      // Received Project and Email
      let project = text;
      let email = 'contacto@automotive.com';

      const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      if (emailMatch) {
        email = emailMatch[0];
        project = text.replace(email, '').replace(/[,/\-·]+/, '').trim() || 'Proyecto Industrial';
      }

      setRfqDraft(prev => ({
        ...prev,
        clientProject: project,
        clientEmail: email
      }));

      // Paso 4 Bot message
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            id: `bot-p4-${Date.now()}`,
            role: 'bot',
            step: 4,
            timestamp: getFormattedTime(),
            content: 'Solicitud de País o región',
            botTitle: '🤖 Maindsteel Automotive',
            botLines: [
              'Excelente. Por último, ¿a qué País o región va',
              'dirigido el embarque industrial del material?'
            ]
          }
        ]);
        setCurrentStep(4);
      }, 400);

    } else if (currentStep === 4) {
      // Received Country / Region
      const country = text;
      const finalItem = rfqDraft.itemName || 'Racks de Manejo';
      const finalCompany = rfqDraft.clientCompany || 'Empresa Solicitante';
      const ticketId = `RFQ-AGS-2026-${Math.floor(1000 + Math.random() * 9000)}`;

      const completedRfq: RFQData = {
        id: ticketId,
        timestamp: new Date().toLocaleDateString('es-MX', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }) + ', ' + time + ' hrs',
        itemName: finalItem,
        itemCategory: rfqDraft.itemCategory || 'producto',
        itemCode: rfqDraft.itemCode || 'PRD-04',
        itemNumber: rfqDraft.itemNumber || 16,
        clientName: rfqDraft.clientName || 'Ing. Comprador',
        clientCompany: finalCompany,
        clientProject: rfqDraft.clientProject || 'Plataforma Automotriz',
        clientEmail: rfqDraft.clientEmail || 'compras@tier1.com',
        shippingCountry: country,
        status: 'Turnado a Ingeniería Tier 2'
      };

      setFinalizedRfq(completedRfq);
      setSavedRfqs(prev => [completedRfq, ...prev]);
      
      // Inject Webhook here if requested
      const payloadUrl = "https://script.google.com/macros/s/AKfycbxRX_YTjy3WLlbsM8nlc8noE0FNoEt4qMNiSEDMgEMsaSiRhjaGbkbBs3cM1-tFAvmksQ/exec";
      try {
        const googleSheetPayload = {
          // Base RFQ values
          ...completedRfq,
          
          // Core values requested by current Apps Script
          nombre: completedRfq.clientName,
          empresa: completedRfq.clientCompany,
          proyecto: completedRfq.clientProject,
          contacto: completedRfq.clientEmail,
          requerimiento: completedRfq.itemName,
          destino: completedRfq.shippingCountry,
          
          // Fallbacks in case the Apps Script active deployment is an older version
          "Solucion solicitada": completedRfq.itemName,
          "Solución solicitada": completedRfq.itemName,
          "Solucion solicitada ": completedRfq.itemName,
          solucion: completedRfq.itemName,
          proceso: completedRfq.itemName,
          producto: completedRfq.itemName,
          item: completedRfq.itemName,
          
          "Región": completedRfq.shippingCountry,
          "Region": completedRfq.shippingCountry,
          " Región": completedRfq.shippingCountry,
          region: completedRfq.shippingCountry,
          country: completedRfq.shippingCountry
        };

        await fetch(payloadUrl, {
          method: "POST",
          headers: { 
            "Content-Type": "text/plain;charset=utf-8" 
          },
          body: JSON.stringify(googleSheetPayload)
        });
        console.log("Datos del lead sincronizados de forma transparente.");
      } catch (error) {
        console.error("Error al enviar a la base de datos:", error);
      }

      // Direct transition to Step 5: Screen preview of Technical RFQ Sheet without animation
      setCurrentStep(5);
    }
  };

  const handleSelectItemFromModal = (item: CatalogItem) => {
    handleSendMessage(`${item.id}. ${item.shortName}`);
  };

  return (
    <div className="absolute inset-0 z-50 bg-[#0B0C0E] text-neutral-100 flex flex-col font-sans selection:bg-[#E5A824] selection:text-black pt-16">
      {/* Hero Section */}
      <section className="pt-8 sm:pt-12 pb-6 px-4 text-center border-b border-neutral-900 shadow-xl bg-[#08090b]">
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans drop-shadow-sm">
          CONTINUAR CON SOLICITUD
        </h1>
        <div className="w-16 h-1 bg-[#E5A824] rounded-full mx-auto my-3 shadow-[0_0_10px_rgba(229,168,36,0.5)]" />
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
          En Maindsteel tenemos la mejor disposición para proveerte toda la información además de ayudarte con cualquier pregunta que puedas tener.
        </p>
      </section>

      {/* Main Layout */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 pb-12 pt-8 overflow-y-auto">
        <div className="w-full">
          {/* Main Card: Agente de Maindsteel Automotive */}
          <div id="chatbot-main-card" className="bg-[#0E1013] border border-[#E5A824] rounded-lg shadow-[0_0_35px_rgba(229,168,36,0.15)] overflow-hidden flex flex-col min-h-[580px]">
            
            {/* Header of the Container */}
            <div className="px-5 py-4 border-b border-[#E5A824]/30 bg-gradient-to-r from-[#17140B] via-[#101115] to-[#0E1013] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Bot className="w-5 h-5 text-[#E5A824]" />
                <h2 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider font-sans">
                  AGENTE DE MAINDSTEEL AUTOMOTIVE
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsCatalogOpen(true)}
                  className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-neutral-300 hover:text-white bg-[#16181E] hover:bg-[#1E2028] border border-neutral-800 rounded transition-colors cursor-pointer"
                  title="Ver catálogo de 20 capacidades"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#E5A824]" />
                  <span>Catálogo (20)</span>
                </button>
                <span className="text-[11px] font-mono-tech text-[#E5A824] bg-[#1A180E] px-2.5 py-1 rounded border border-[#E5A824]/40 font-bold">
                  {currentStep < 5 ? `PASO 0${currentStep} / 05` : 'FINALIZADO'}
                </span>
              </div>
            </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col p-4 sm:p-6 justify-between bg-[#0B0C0E]/70 relative">
                {currentStep === 5 && finalizedRfq ? (
                  <Step5SuccessView
                    rfq={finalizedRfq}
                    onRestart={handleResetChat}
                    onOpenHistory={() => setIsHistoryOpen(true)}
                    onGoHome={onGoHome}
                  />
                ) : (
                  <>
                    {/* Chat Messages Log */}
                    <div className="flex-1 space-y-4 pb-4 min-h-[350px]">
                      {messages.map((msg) => {
                        if (msg.role === 'bot') {
                          return (
                            <BotBubble
                              key={msg.id}
                              title={msg.botTitle || '🤖 Maindsteel Automotive'}
                              lines={msg.botLines || [msg.content]}
                              step={msg.step}
                              showQuickResponses={msg.showQuickResponses}
                              onSelectItem={(item) => handleSendMessage(item)}
                              timestamp={msg.timestamp}
                            />
                          );
                        } else {
                          return (
                            <UserBubble
                              key={msg.id}
                              content={msg.content}
                              timestamp={msg.timestamp}
                            />
                          );
                        }
                      })}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Step Context Suggestions */}
                    <div className="py-2">
                      {currentStep === 2 && (
                        <div className="flex items-center gap-2 overflow-x-auto py-1 text-xs custom-scrollbar">
                          <span className="text-[11px] text-neutral-400 shrink-0 font-medium">Sugerencias:</span>
                          <button
                            onClick={() => handleSendMessage('Carlos Vega · Magna Seating México')}
                            className="px-2.5 py-1 rounded bg-[#141519] border border-neutral-700 hover:border-[#E5A824] text-neutral-300 hover:text-white whitespace-nowrap text-xs transition-colors cursor-pointer shrink-0"
                          >
                            Carlos Vega · Magna Seating
                          </button>
                          <button
                            onClick={() => handleSendMessage('Ing. Roberto Ramos · Nissan Mexicana')}
                            className="px-2.5 py-1 rounded bg-[#141519] border border-neutral-700 hover:border-[#E5A824] text-neutral-300 hover:text-white whitespace-nowrap text-xs transition-colors cursor-pointer shrink-0"
                          >
                            Ing. Roberto Ramos · Nissan Mexicana
                          </button>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="flex items-center gap-2 overflow-x-auto py-1 text-xs custom-scrollbar">
                          <span className="text-[11px] text-neutral-400 shrink-0 font-medium">Sugerencias:</span>
                          <button
                            onClick={() => handleSendMessage('Plataforma Nissan Sentra · cvega@magnaseating.com')}
                            className="px-2.5 py-1 rounded bg-[#141519] border border-neutral-700 hover:border-[#E5A824] text-neutral-300 hover:text-white whitespace-nowrap text-xs transition-colors cursor-pointer shrink-0"
                          >
                            Plataforma Sentra · cvega@magnaseating.com
                          </button>
                          <button
                            onClick={() => handleSendMessage('Subensamble Chasis Gen 4 · rramos@nissan.com.mx')}
                            className="px-2.5 py-1 rounded bg-[#141519] border border-neutral-700 hover:border-[#E5A824] text-neutral-300 hover:text-white whitespace-nowrap text-xs transition-colors cursor-pointer shrink-0"
                          >
                            Chasis Gen 4 · rramos@nissan.com.mx
                          </button>
                        </div>
                      )}

                      {currentStep === 4 && (
                        <div className="flex items-center gap-2 overflow-x-auto py-1 text-xs custom-scrollbar">
                          <span className="text-[11px] text-neutral-400 shrink-0 font-medium">Destinos comunes:</span>
                          <button
                            onClick={() => handleSendMessage('México (Aguascalientes / Bajío)')}
                            className="px-2.5 py-1 rounded bg-[#141519] border border-neutral-700 hover:border-[#E5A824] text-neutral-300 hover:text-white whitespace-nowrap text-xs transition-colors cursor-pointer shrink-0"
                          >
                            México (Aguascalientes / Bajío)
                          </button>
                          <button
                            onClick={() => handleSendMessage('Estados Unidos (Texas / Michigan)')}
                            className="px-2.5 py-1 rounded bg-[#141519] border border-neutral-700 hover:border-[#E5A824] text-neutral-300 hover:text-white whitespace-nowrap text-xs transition-colors cursor-pointer shrink-0"
                          >
                            Estados Unidos (Texas / Michigan)
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Bottom Form Inputs */}
                    <div className="pt-3 border-t border-neutral-800">
                      <div className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                        <span>
                          {currentStep === 1
                            ? 'PROCESO O PRODUCTO *'
                            : currentStep === 2
                            ? 'NOMBRE Y EMPRESA *'
                            : currentStep === 3
                            ? 'PROYECTO Y CORREO CORPORATIVO *'
                            : 'PAÍS O REGIÓN DE EMBARQUE *'}
                        </span>
                        <span className="text-[10px] text-[#E5A824] font-mono-tech font-normal">
                          {currentStep === 1 ? 'Escribe el número (1 a 18)' : 'Respuesta directa'}
                        </span>
                      </div>

                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSendMessage();
                        }}
                        className="relative flex items-center bg-[#101115] border border-neutral-800 focus-within:border-[#E5A824] rounded-lg overflow-hidden transition-all shadow-inner"
                      >
                        <div className="pl-3.5 pr-2 text-[#E5A824]">
                          <CornerDownLeft className="w-4 h-4" />
                        </div>
                        <input
                          ref={inputRef}
                          type="text"
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                          placeholder={
                            currentStep === 1
                              ? 'Escribe el número (1 a 18) o nombre del proceso/producto...'
                              : currentStep === 2
                              ? 'Tu Nombre y Empresa (ej: Carlos Vega, Magna Seating)...'
                              : currentStep === 3
                              ? 'Proyecto y Correo (ej: Sentra 2026, cvega@magna.com)...'
                              : 'País o Región de embarque (ej: México, Aguascalientes)...'
                          }
                          className="flex-1 bg-transparent py-3 pr-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none font-sans"
                        />
                        <button
                          type="submit"
                          disabled={!inputText.trim()}
                          className="mr-2 px-4 py-2 bg-[#E5A824] hover:bg-[#F1B434] disabled:opacity-30 disabled:hover:bg-[#E5A824] text-black font-extrabold text-xs tracking-wider uppercase rounded flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                        >
                          <span>Enviar</span>
                          <Send className="w-3 h-3 stroke-[2.5]" />
                        </button>
                      </form>

                      <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500 px-1 font-sans">
                        <span>Presiona ENTER para enviar · Sistema de asignación directa</span>
                        <button
                          type="button"
                          onClick={() => setIsPayloadOpen(true)}
                          className="text-[#E5A824]/70 hover:text-[#E5A824] transition-colors"
                        >
                          Ver API Payload
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Botón de color dorado "Atrás" */}
            <div className="mt-4 flex items-center justify-start pb-4">
              <button
                type="button"
                onClick={handleGoBack}
                className="px-5 py-2.5 bg-[#E5A824] hover:bg-[#F1B434] active:scale-95 text-black font-extrabold text-xs uppercase tracking-wider rounded-md flex items-center gap-2 shadow-[0_4px_16px_rgba(229,168,36,0.3)] hover:shadow-[0_6px_22px_rgba(229,168,36,0.5)] transition-all cursor-pointer font-sans"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
                <span>Atrás</span>
              </button>
            </div>
          </div>
      </main>

      <aside aria-label="Colecciones y registros de base de datos" className="absolute bottom-5 right-5 z-30">
        <button
          onClick={() => setIsHistoryOpen(true)}
          className="bg-[#0E1013]/95 hover:bg-[#16181F] text-white border border-[#E5A824] px-4 py-2 rounded-full flex items-center gap-2.5 shadow-[0_4px_20px_rgba(229,168,36,0.3)] hover:shadow-[0_4px_25px_rgba(229,168,36,0.5)] transition-all cursor-pointer group active:scale-95"
          title="Ver Colecciones en Base de Datos"
        >
          <Database className="w-4 h-4 text-[#E5A824] group-hover:scale-110 transition-transform" />
          <span className="text-xs font-bold font-sans tracking-wide">
            Colecciones DB ({savedRfqs.length})
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </aside>

      {/* Modals */}
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onSelectItem={handleSelectItemFromModal}
        initialFilter={catalogFilter}
      />

      <RfqHistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        rfqs={savedRfqs}
        onClearHistory={handleClearHistory}
      />

      <ApiPayloadModal
        isOpen={isPayloadOpen}
        onClose={() => setIsPayloadOpen(false)}
        currentStep={currentStep}
        messages={messages}
        currentRfq={rfqDraft}
      />
    </div>
  );
};
