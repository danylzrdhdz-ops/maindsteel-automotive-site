import React from 'react';
import { X, Check, Shield, Layers, Gauge, Send } from 'lucide-react';
import { ProductItem } from '../types';
import Image from './Image';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenQuote: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenQuote
}) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      id="product-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#12141a] border border-[#d4af37]/60 rounded-lg shadow-[0_10px_35px_rgba(0,0,0,0.8)] overflow-hidden"
        id="product-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-[#996515] via-[#d4af37] to-[#f5d47a]" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#d4af37] tracking-widest block mb-1">
              {product.categoryLabel}
            </span>
            <h3 className="text-xl font-black text-white uppercase tracking-wider">
              {product.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 transition-colors"
            id="product-modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Photo on circular dark pedestal representation */}
          <div className="relative rounded-lg overflow-hidden border border-[#d4af37]/50 aspect-[16/9] bg-zinc-950 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
              <span className="text-xs font-mono text-[#f5d47a] bg-black/70 px-2.5 py-1 rounded border border-[#d4af37]/30">
                Tolerancia: {product.tolerance}
              </span>
              <span className="text-xs font-semibold text-white bg-black/70 px-2.5 py-1 rounded border border-zinc-700">
                Calidad IATF 16949
              </span>
            </div>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#d4af37]" />
              <span>Características de Manufactura</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 p-2 rounded bg-[#181b23] border border-zinc-800">
                  <Check className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials & Tolerances */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded bg-[#161922] border border-zinc-800">
            <div>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider flex items-center gap-1.5 font-bold mb-1.5">
                <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                Materiales Compatibles
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.materials.map((mat, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-[11px] bg-zinc-800 text-zinc-200 border border-zinc-700">
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider flex items-center gap-1.5 font-bold mb-1.5">
                <Gauge className="w-3.5 h-3.5 text-[#d4af37]" />
                Precisión Dimensional
              </span>
              <p className="text-xs text-[#f5d47a] font-mono">
                {product.tolerance}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-zinc-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            Cerrar
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenQuote(`Producto: ${product.title}`);
            }}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#b8860b] hover:bg-[#d4af37] text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-[0_4px_14px_rgba(184,134,11,0.35)]"
            id="modal-cotizar-producto-btn"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Cotizar Esta Pieza</span>
          </button>
        </div>
      </div>
    </div>
  );
};
