import React, { useState } from 'react';
import { RFQData } from '../types';
import { X, Database, CheckCircle2, Trash2, FileText } from 'lucide-react';
import { RfqSheetModal } from './RfqSheetModal';

interface RfqHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  rfqs: RFQData[];
  onClearHistory: () => void;
}

export const RfqHistoryModal: React.FC<RfqHistoryModalProps> = ({
  isOpen,
  onClose,
  rfqs,
  onClearHistory,
}) => {
  const [selectedRfqForSheet, setSelectedRfqForSheet] = useState<RFQData | null>(null);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
        <div className="bg-[#0D0E11] border border-[#E5A824]/60 w-full max-w-3xl max-h-[85vh] rounded-lg flex flex-col shadow-[0_0_50px_rgba(229,168,36,0.15)] overflow-hidden font-sans">
          {/* Header */}
          <div className="px-5 py-4 border-b border-[#E5A824]/30 flex items-center justify-between bg-[#121317]">
            <div className="flex items-center gap-2.5">
              <Database className="w-5 h-5 text-[#E5A824]" />
              <div>
                <h2 className="text-base font-bold text-white uppercase tracking-wider font-sans">
                  Colecciones en Base de Datos ({rfqs.length})
                </h2>
                <div className="text-[11px] text-neutral-400">
                  Planta Aguascalientes Tier 2 · Cola de Asignación y Fichas Técnicas
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#0B0C0E] space-y-3">
            {rfqs.length === 0 ? (
              <div className="py-12 text-center text-neutral-500">
                <Database className="w-10 h-10 mx-auto mb-3 opacity-30 text-[#E5A824]" />
                <p className="text-sm font-semibold">No hay requerimientos guardados aún.</p>
                <p className="text-xs text-neutral-500 mt-1">
                  Completa el flujo interactivo de 5 pasos para generar el primer registro oficial.
                </p>
              </div>
            ) : (
              rfqs.map((rfq) => (
                <div
                  key={rfq.id}
                  className="bg-[#121317] border border-neutral-800 hover:border-[#E5A824]/80 rounded-lg p-4 transition-all space-y-2 group shadow-sm hover:shadow-[0_4px_16px_rgba(229,168,36,0.1)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800/80 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono-tech font-bold text-[#E5A824]">
                        {rfq.id}
                      </span>
                      <span className="text-[10px] text-neutral-500">·</span>
                      <span className="text-[11px] text-neutral-400 font-sans">{rfq.timestamp}</span>
                    </div>
                    <span className="text-[10px] font-sans px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      {rfq.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-sans">
                        Elemento
                      </span>
                      <span className="font-bold text-white font-sans">{rfq.itemName}</span>
                      <span className="text-[11px] text-[#E5A824] block font-mono-tech">
                        {rfq.itemCode || 'PRD'} · #{rfq.itemNumber || '16'}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-sans">
                        Empresa / Proyecto
                      </span>
                      <span className="text-neutral-200 font-sans font-medium">{rfq.clientCompany}</span>
                      <span className="text-[11px] text-neutral-400 block truncate font-sans">
                        {rfq.clientProject}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-sans">
                        Contacto y Destino
                      </span>
                      <span className="text-neutral-200 font-sans">{rfq.clientName}</span>
                      <span className="text-[11px] text-neutral-400 block font-sans">
                        Embarque: {rfq.shippingCountry}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-neutral-800/60 flex items-center justify-between text-[11px]">
                    <span className="text-neutral-400 font-mono-tech truncate max-w-[60%]">
                      Email: {rfq.clientEmail}
                    </span>
                    <button
                      onClick={() => setSelectedRfqForSheet(rfq)}
                      className="px-3 py-1 bg-[#1A180E] hover:bg-[#E5A824] text-[#E5A824] hover:text-black border border-[#E5A824]/40 rounded font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Ver Ficha Oficial (PDF)</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-neutral-900 bg-[#121317] flex items-center justify-between">
            {rfqs.length > 0 ? (
              <button
                onClick={onClearHistory}
                className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Vaciar registros
              </button>
            ) : (
              <span className="text-xs text-neutral-500">Registros sincronizados con LocalStorage</span>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-sans transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>

      {/* Embedded RFQ Sheet preview modal if clicked */}
      {selectedRfqForSheet && (
        <RfqSheetModal
          isOpen={!!selectedRfqForSheet}
          onClose={() => setSelectedRfqForSheet(null)}
          rfq={selectedRfqForSheet}
        />
      )}
    </>
  );
};
