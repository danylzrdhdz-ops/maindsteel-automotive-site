import React, { useState, useEffect } from 'react';
import { Database, X, Trash2, Mail, FileText, RefreshCw, CheckCircle2 } from 'lucide-react';
import { dbService, subscribeToStore } from '../services/store';
import { ContactMessage, QuoteRequest } from '../types';

export const DataAdminDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'quotes' | 'contacts'>('quotes');
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);

  const refreshData = () => {
    setQuotes(dbService.getQuotes());
    setContacts(dbService.getContactMessages());
  };

  useEffect(() => {
    refreshData();
    const unsubscribe = subscribeToStore(refreshData);
    return () => unsubscribe();
  }, []);

  const handleDeleteQuote = (id: string) => {
    dbService.deleteQuote(id);
  };

  const handleDeleteContact = (id: string) => {
    dbService.deleteContactMessage(id);
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#161822]/90 hover:bg-[#1f2230] border border-[#d4af37]/60 text-zinc-200 hover:text-white shadow-2xl backdrop-blur-md text-xs font-semibold transition-all group"
        id="btn-open-db-drawer"
        title="Consultar colecciones de cotizaciones y mensajes guardados"
      >
        <Database className="w-4 h-4 text-[#d4af37] group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Colecciones DB ({quotes.length + contacts.length})</span>
      </button>

      {/* Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div
            className="w-full max-w-xl bg-[#0f1117] border-l border-zinc-800 shadow-2xl h-full flex flex-col"
            id="db-drawer-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-[#14161f]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-[#d4af37]/10 text-[#d4af37]">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Almacén de Datos (Colecciones)
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    Modo Local Storage activo • Persistencia de registros
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={refreshData}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded"
                  title="Actualizar"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded"
                  title="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Collection Tabs */}
            <div className="flex border-b border-zinc-800 bg-[#11131a]">
              <button
                onClick={() => setActiveTab('quotes')}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-colors ${
                  activeTab === 'quotes'
                    ? 'border-[#d4af37] text-white bg-[#181a24]'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <FileText className="w-4 h-4 text-[#d4af37]" />
                <span>quotes ({quotes.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('contacts')}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-b-2 transition-colors ${
                  activeTab === 'contacts'
                    ? 'border-[#d4af37] text-white bg-[#181a24]'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span>contact_messages ({contacts.length})</span>
              </button>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {activeTab === 'quotes' ? (
                quotes.length === 0 ? (
                  <div className="p-8 text-center text-zinc-500 text-xs">
                    No hay solicitudes de cotización registradas en la colección quotes.
                  </div>
                ) : (
                  quotes.map((q) => (
                    <div
                      key={q.id}
                      className="p-4 rounded-lg bg-[#151720] border border-zinc-800 hover:border-zinc-700 space-y-2 relative group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#f5d47a]">
                          {q.id}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                            {q.status}
                          </span>
                          <button
                            onClick={() => handleDeleteQuote(q.id)}
                            className="text-zinc-500 hover:text-red-400 p-1"
                            title="Eliminar registro"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-white">
                        {q.servicioProducto}
                      </h4>

                      <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
                        <div>
                          <span className="text-zinc-500 block text-[10px]">Solicitante:</span>
                          <span>{q.nombre}</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">Empresa:</span>
                          <span>{q.empresa}</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">Email:</span>
                          <span className="text-[#d4af37]">{q.email}</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">Teléfono:</span>
                          <span>{q.telefono}</span>
                        </div>
                      </div>

                      <div className="pt-1 text-xs text-zinc-400 bg-zinc-900/60 p-2.5 rounded border border-zinc-800/80">
                        <span className="text-[10px] text-zinc-500 uppercase block font-mono">Volumen: {q.volumen}</span>
                        <p className="mt-1 text-[11px] leading-relaxed text-zinc-300 font-light">{q.mensaje}</p>
                      </div>

                      <span className="text-[10px] text-zinc-500 block text-right">
                        {new Date(q.createdAt).toLocaleString('es-MX')}
                      </span>
                    </div>
                  ))
                )
              ) : contacts.length === 0 ? (
                <div className="p-8 text-center text-zinc-500 text-xs">
                  No hay mensajes registrados en la colección contact_messages.
                </div>
              ) : (
                contacts.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 rounded-lg bg-[#151720] border border-zinc-800 hover:border-zinc-700 space-y-2 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#f5d47a]">
                        {c.id}
                      </span>
                      <button
                        onClick={() => handleDeleteContact(c.id)}
                        className="text-zinc-500 hover:text-red-400 p-1"
                        title="Eliminar mensaje"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="text-sm font-bold text-white">
                      {c.asunto || 'Consulta General'}
                    </h4>

                    <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
                      <div>
                        <span className="text-zinc-500 block text-[10px]">Nombre:</span>
                        <span>{c.nombre}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[10px]">Email:</span>
                        <span className="text-[#d4af37]">{c.email}</span>
                      </div>
                      {c.telefono && (
                        <div>
                          <span className="text-zinc-500 block text-[10px]">Teléfono:</span>
                          <span>{c.telefono}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-zinc-300 bg-zinc-900/60 p-2.5 rounded border border-zinc-800/80 leading-relaxed font-light">
                      {c.mensaje}
                    </p>

                    <span className="text-[10px] text-zinc-500 block text-right">
                      {new Date(c.createdAt).toLocaleString('es-MX')}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Footer notice */}
            <div className="p-4 bg-[#14161f] border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Almacenamiento Local Activo</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded text-xs"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
