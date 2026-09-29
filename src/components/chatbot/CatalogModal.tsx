import React, { useState, useEffect } from 'react';
import { CATALOG_ITEMS } from '../../data/catalog';
import { CatalogItem } from '../../types';
import { X, Search, CheckCircle, Cpu, Layers } from 'lucide-react';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: CatalogItem) => void;
  initialFilter?: 'proceso' | 'producto';
}

export const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
  onSelectItem,
  initialFilter,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'proceso' | 'producto'>('all');

  useEffect(() => {
    if (initialFilter) {
      setActiveFilter(initialFilter);
    } else {
      setActiveFilter('all');
    }
  }, [initialFilter, isOpen]);

  if (!isOpen) return null;

  const filteredItems = CATALOG_ITEMS.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.machinery.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.specs.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="bg-[#0D0E11] border border-[#E5A824]/60 w-full max-w-4xl max-h-[90vh] rounded-lg flex flex-col shadow-[0_0_50px_rgba(229,168,36,0.15)] overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#E5A824]/30 flex items-center justify-between bg-[#121317]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans font-bold text-[#E5A824] uppercase tracking-widest">
                Catálogo Oficial Planta Aguascalientes
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-black text-[#E5A824] border border-[#E5A824]/30 font-bold">
                20 Elementos Tier 2
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white font-sans mt-0.5">
              Capacidades de Manufactura Automotriz
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 border-b border-neutral-900 bg-[#0F1014] flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-neutral-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por proceso, máquina, acero..."
              className="w-full bg-[#16181E] border border-neutral-800 rounded pl-9 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#E5A824]"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto text-xs font-sans">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#E5A824] text-black font-bold shadow-[0_0_10px_rgba(229,168,36,0.3)]'
                  : 'bg-[#16181E] text-neutral-300 hover:text-white border border-neutral-800'
              }`}
            >
              Todos (20)
            </button>
            <button
              onClick={() => setActiveFilter('proceso')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer flex items-center gap-1 ${
                activeFilter === 'proceso'
                  ? 'bg-[#E5A824] text-black font-bold shadow-[0_0_10px_rgba(229,168,36,0.3)]'
                  : 'bg-[#16181E] text-neutral-300 hover:text-white border border-neutral-800'
              }`}
            >
              <Cpu className="w-3 h-3" />
              Procesos (1-12)
            </button>
            <button
              onClick={() => setActiveFilter('producto')}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer flex items-center gap-1 ${
                activeFilter === 'producto'
                  ? 'bg-[#E5A824] text-black font-bold shadow-[0_0_10px_rgba(229,168,36,0.3)]'
                  : 'bg-[#16181E] text-neutral-300 hover:text-white border border-neutral-800'
              }`}
            >
              <Layers className="w-3 h-3" />
              Productos (13-20)
            </button>
          </div>
        </div>

        {/* Catalog Items Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-3.5 bg-[#0B0C0E]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#121317] border border-neutral-800/80 hover:border-[#E5A824] rounded-lg p-4 transition-all flex flex-col justify-between group hover:shadow-[0_4px_16px_rgba(229,168,36,0.08)]"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-[#1C1B14] border border-[#E5A824]/40 text-[#E5A824] text-xs font-bold font-mono-tech flex items-center justify-center shrink-0">
                      {item.id}
                    </span>
                    <span className="text-[10px] font-mono-tech uppercase px-1.5 py-0.5 rounded bg-black text-[#E5A824] border border-[#E5A824]/20">
                      {item.code}
                    </span>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-sans">
                      {item.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-[#F1B434] transition-colors font-sans">
                  {item.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-sans">
                  {item.description}
                </p>

                <div className="mt-3 space-y-1 text-[11px] font-sans pt-2 border-t border-neutral-800/60">
                  <div className="text-neutral-400">
                    <strong className="text-neutral-300 font-semibold">Maquinaria:</strong> {item.machinery}
                  </div>
                  <div className="text-neutral-400">
                    <strong className="text-neutral-300 font-semibold">Técnica:</strong> {item.specs}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-[10px] text-neutral-500 font-sans">
                  Maindsteel Planta PIVA
                </span>
                <button
                  onClick={() => {
                    onSelectItem(item);
                    onClose();
                  }}
                  className="px-3 py-1 text-xs font-bold text-black bg-[#E5A824] hover:bg-[#F1B434] rounded transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                >
                  <CheckCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                  Cotizar este elemento
                </button>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="col-span-2 text-center py-12 text-neutral-500 text-xs">
              No se encontraron elementos con el término ingresado.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-neutral-900 bg-[#0F1014] flex items-center justify-between text-xs text-neutral-400">
          <div>Certificación IATF 16949 / ISO 9001:2015 Tier 2</div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
