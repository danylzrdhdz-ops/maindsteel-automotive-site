import React, { useState } from 'react';
import { ProductItem } from '../types';
import { PRODUCTS_DATA } from '../data/productsData';
import { ProductDetailModal } from '../components/ProductDetailModal';

interface ProductsViewProps {
  onOpenQuote: (productName: string) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('TODO');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filters = [
    { label: 'TODO', key: 'TODO' },
    { label: 'DOBLADO DE TUBO Y FORMADO DE ALAMBRE', key: 'tubo-alambre' },
    { label: 'RACKS', key: 'racks' },
    { label: 'CARROS PARA MANEJO DE MATERIAL', key: 'carros' },
    { label: 'ESTACIONES DE TRABAJO', key: 'estaciones' },
    { label: 'CONTENEDORES PARA MANEJO DE MATERIAL', key: 'componentes' },
    { label: 'SOLDADURA TIG & MIG Y POR PROYECCIÓN', key: 'soldadura' }
  ];

  const filteredProducts = activeFilter === 'TODO'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === activeFilter);

  // Dynamic Tailwind Grid adjustment so that 8 products, 1 product, 2 products, etc. look mathematically balanced
  const getDynamicGridClasses = (count: number) => {
    if (count === 1) return 'max-w-md mx-auto grid-cols-1';
    if (count === 2) return 'max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2';
    if (count === 3) return 'max-w-5xl mx-auto grid-cols-1 sm:grid-cols-3';
    if (count === 6) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    // 4 or 8 items: perfect 4-column balanced grid (2 complete rows of 4 cards on desktop)
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  };

  return (
    <div className="w-full bg-[#0a0b0e] text-zinc-200 min-h-screen" id="products-view">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-72 sm:h-80 flex items-center justify-center overflow-hidden border-b border-zinc-800">
        <img
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80"
          alt="Productos automotrices metálicos"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.25] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15),transparent_70%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            CATÁLOGO DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f5d47a] to-[#d4af37]">PRODUCTOS</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
          <p className="mt-3 text-xs sm:text-sm text-zinc-300 uppercase tracking-widest font-light">
            Componentes automotrices, racks logísticos y ensambles metálicos de precisión
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER PILLS - Rich Gold Theme */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3" id="product-category-filters">
          {filters.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all border ${
                  isActive
                    ? 'bg-transparent text-[#f5d47a] border-b-2 border-b-[#f5d47a] border-t-transparent border-x-transparent shadow-sm'
                    : 'bg-transparent text-zinc-400 border border-zinc-700/50 hover:text-[#f5d47a] hover:border-[#d4af37]/60'
                }`}
                id={`filter-${f.key}`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. DYNAMIC PRODUCT CARDS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className={`grid gap-8 ${getDynamicGridClasses(filteredProducts.length)}`} id="products-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#12141a] rounded-xl overflow-hidden border border-zinc-700/80 hover:border-[#d4af37] transition-all flex flex-col justify-between shadow-xl group hover:shadow-[0_8px_28px_rgba(212,175,55,0.15)]"
              id={`product-card-${product.id}`}
            >
              {/* Product Photo Full-Bleed Container */}
              <div className="relative w-full aspect-square overflow-hidden bg-zinc-900 border-b border-zinc-800/80">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover scale-[1.15] group-hover:scale-[1.22] transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90 pointer-events-none" />

                {/* Quality badge pill */}
                <div className="absolute top-4 right-4 z-10 px-2.5 py-0.5 rounded bg-black/80 border border-[#d4af37]/50 text-[10px] uppercase font-bold text-[#f5d47a] shadow-md">
                  IATF 16949
                </div>
              </div>

              {/* Title & Actions */}
              <div className="p-5 sm:p-6 border-t border-zinc-800/90 flex-1 flex flex-col justify-end space-y-4 bg-[#121212]">
                <div className="text-center mb-2">
                  <h3 className="text-sm sm:text-base font-black uppercase text-white tracking-widest group-hover:text-[#f5d47a] transition-colors line-clamp-2 leading-tight">
                    {product.title}
                  </h3>
                </div>

                {/* 2 Buttons Stacked: "COTIZAR" and "VER DETALLES" */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => onOpenQuote(`Producto: ${product.title}`)}
                    className="w-full py-3 bg-[#b8860b] hover:bg-[#d4af37] text-black text-xs font-black uppercase tracking-widest transition-all shadow-md"
                    id={`btn-cotizar-${product.id}`}
                  >
                    COTIZAR
                  </button>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-3 bg-black hover:bg-zinc-900 border border-[#d4af37]/80 hover:border-[#d4af37] text-white hover:text-[#f5d47a] text-xs font-bold uppercase tracking-widest transition-all"
                    id={`btn-detalles-${product.id}`}
                  >
                    VER DETALLES
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuote={onOpenQuote}
      />

    </div>
  );
};
