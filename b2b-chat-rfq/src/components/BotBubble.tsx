import React, { useState } from 'react';
import { CATALOG_ITEMS } from '../data/catalog';
import { Cpu, Package, Check, Sparkles, Filter } from 'lucide-react';

interface BotBubbleProps {
  title: string;
  lines: string[];
  step: number;
  showQuickResponses?: boolean;
  onSelectItem?: (itemText: string) => void;
  timestamp?: string;
}

export const BotBubble: React.FC<BotBubbleProps> = ({
  title,
  lines,
  step,
  showQuickResponses,
  onSelectItem,
  timestamp,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'proceso' | 'producto'>('all');

  const processes = CATALOG_ITEMS.filter(i => i.category === 'proceso' && i.id <= 12);
  const products = CATALOG_ITEMS.filter(i => i.category === 'producto' && i.id <= 18);

  return (
    <div className="flex flex-col items-start gap-1 mb-5 select-text">
      {/* Bot Subtitle */}
      <div className="flex items-center gap-2 text-[10px] text-neutral-400 uppercase tracking-widest font-mono-tech ml-1">
        <span className="text-[#E5A824] font-bold">Maindsteel Bot</span>
        <span className="text-neutral-600">·</span>
        <span>Paso 0{step}</span>
        {timestamp && (
          <>
            <span className="text-neutral-600">·</span>
            <span>{timestamp}</span>
          </>
        )}
      </div>

      {/* Contenedor de hilos dorados (Golden filament box) */}
      <div className="relative max-w-full sm:max-w-2xl bg-[#0D0E11] rounded-lg border border-[#E5A824]/50 shadow-[0_4px_24px_rgba(229,168,36,0.1)] overflow-hidden transition-all">
        {/* Subtle decorative golden corner accents */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#E5A824] pointer-events-none" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#E5A824] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#E5A824] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#E5A824] pointer-events-none" />

        {/* Header container line */}
        <div className="px-4 py-2 border-b border-[#E5A824]/30 bg-gradient-to-r from-[#1C180E] via-[#121316] to-[#0D0E11] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold text-[#F1B434] tracking-wide flex items-center gap-2">
              {title}
            </span>
          </div>
          <span className="text-[10px] font-mono-tech text-neutral-400 uppercase tracking-wider">
            Aguascalientes Tier 2
          </span>
        </div>

        {/* Message lines: Maximum 1 line per bubble row rule */}
        <div className="px-4 py-3 space-y-1 bg-black/50 font-mono-tech text-neutral-200 text-xs sm:text-sm">
          {lines.map((line, idx) => (
            <div
              key={idx}
              className="py-0.5 tracking-tight border-b border-[#E5A824]/10 last:border-none flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5A824] shrink-0" />
              <span className="truncate block font-medium">{line}</span>
            </div>
          ))}
        </div>

        {/* Quick Response Interactive Grid Clasificado en PROCESOS y PRODUCTOS */}
        {showQuickResponses && (
          <div className="p-3 bg-[#08090B] border-t border-[#E5A824]/20 space-y-2.5">
            {/* Top Toolbar: Title & Classification Filter Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-neutral-800/80">
              <div className="text-[11px] font-mono-tech text-neutral-300 flex items-center gap-1.5">
                <span className="text-[#E5A824] font-bold">
                  CLASIFICACIÓN DE ELEMENTOS (1 AL 18):
                </span>
              </div>

              {/* Classification Category Pills */}
              <div className="flex items-center gap-1 self-start sm:self-auto text-[10px] font-mono-tech">
                <button
                  type="button"
                  onClick={() => setFilterType('all')}
                  className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                    filterType === 'all'
                      ? 'bg-[#E5A824] text-black font-bold'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  Todos (18)
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('proceso')}
                  className={`px-2 py-0.5 rounded transition-all cursor-pointer flex items-center gap-1 ${
                    filterType === 'proceso'
                      ? 'bg-[#E5A824] text-black font-bold'
                      : 'bg-neutral-900 text-neutral-400 hover:text-[#E5A824] border border-neutral-800'
                  }`}
                >
                  <Cpu className="w-2.5 h-2.5" />
                  Procesos (1-12)
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('producto')}
                  className={`px-2 py-0.5 rounded transition-all cursor-pointer flex items-center gap-1 ${
                    filterType === 'producto'
                      ? 'bg-[#E5A824] text-black font-bold'
                      : 'bg-neutral-900 text-neutral-400 hover:text-[#E5A824] border border-neutral-800'
                  }`}
                >
                  <Package className="w-2.5 h-2.5" />
                  Productos (13-18)
                </button>
              </div>
            </div>

            {/* Scrollable Container with Classified Sections */}
            <div className="max-h-60 overflow-y-auto pr-1 space-y-3">
              {/* SECTION 1: PROCESOS (1 AL 12) */}
              {(filterType === 'all' || filterType === 'proceso') && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono-tech text-neutral-400 px-0.5 pt-0.5">
                    <span className="flex items-center gap-1.5 font-bold text-[#E5A824]">
                      <Cpu className="w-3 h-3 text-[#E5A824]" />
                      PROCESOS DE MANUFACTURA (1 AL 12):
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#1C180E] text-[#E5A824] border border-[#E5A824]/30 uppercase font-semibold">
                      Tipo: Proceso
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    {processes.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onSelectItem?.(`${item.id}. ${item.shortName}`)}
                        className="px-2 py-1.5 text-left rounded bg-[#121317] hover:bg-[#E5A824] text-neutral-200 hover:text-black border border-neutral-800 hover:border-[#E5A824] transition-all text-xs font-mono-tech flex items-center justify-between group cursor-pointer active:scale-95 shadow-xs"
                        title={`${item.id}. ${item.name} (Proceso de Manufactura)`}
                      >
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="font-bold text-[#E5A824] group-hover:text-black shrink-0">
                            {item.id}.
                          </span>
                          <span className="truncate font-medium">{item.shortName}</span>
                        </div>
                        <span className="text-[9px] uppercase px-1 py-0.2 rounded bg-black/60 group-hover:bg-black group-hover:text-white text-neutral-400 font-bold shrink-0 ml-1">
                          PROCESO
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION 2: PRODUCTOS (13 AL 18) */}
              {(filterType === 'all' || filterType === 'producto') && (
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[10px] font-mono-tech text-neutral-400 px-0.5 pt-1 border-t border-neutral-800/60">
                    <span className="flex items-center gap-1.5 font-bold text-[#E5A824]">
                      <Package className="w-3 h-3 text-[#E5A824]" />
                      PRODUCTOS AUTOMOTRICES (13 AL 18):
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#1C180E] text-[#E5A824] border border-[#E5A824]/30 uppercase font-semibold">
                      Tipo: Producto
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    {products.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onSelectItem?.(`${item.id}. ${item.shortName}`)}
                        className="px-2 py-1.5 text-left rounded bg-[#121317] hover:bg-[#E5A824] text-neutral-200 hover:text-black border border-neutral-800 hover:border-[#E5A824] transition-all text-xs font-mono-tech flex items-center justify-between group cursor-pointer active:scale-95 shadow-xs"
                        title={`${item.id}. ${item.name} (Producto Automotriz)`}
                      >
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="font-bold text-[#E5A824] group-hover:text-black shrink-0">
                            {item.id}.
                          </span>
                          <span className="truncate font-medium">{item.shortName}</span>
                        </div>
                        <span className="text-[9px] uppercase px-1 py-0.2 rounded bg-black/60 group-hover:bg-black group-hover:text-white text-neutral-400 font-bold shrink-0 ml-1">
                          PRODUCTO
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Instructional Note */}
            <div className="text-[10px] text-neutral-400 font-mono-tech pt-1.5 text-center border-t border-neutral-800/80 flex items-center justify-center gap-1">
              <span>Escribe el número</span>
              <strong className="text-[#E5A824]">1 al 12 para Proceso</strong>
              <span>o</span>
              <strong className="text-[#E5A824]">13 al 18 para Producto</strong>
              <span>(o haz clic en la opción).</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
