import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { RoutePath } from '../types';
import { PROCESSES_DATA } from '../data/processesData';
import {
  NuestrosClientesBanner,
  CapacidadTecnologicaVisual
} from './BrandIcons';
import Image from './Image';
import capacidadBg from '../../images/capacidad tecnológica.webp';

interface HomeSecondaryContentProps {
  onNavigate: (route: RoutePath) => void;
}

export const HomeSecondaryContent: React.FC<HomeSecondaryContentProps> = ({ onNavigate }) => {
  return (
    <>
      {/* ============================================================ */}
      {/* 3. CAPACIDAD TECNOLÓGICA */}
      {/* ============================================================ */}
      <section className="relative py-24 bg-[#0a0b0e] overflow-hidden border-b border-zinc-800" id="tech-capacity-section">
        <div className="absolute inset-0 z-0">
          <Image 
            src={capacidadBg} 
            alt="Capacidad Tecnológica" 
            className="w-full h-full object-cover filter brightness-[0.7] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Block matching Canva */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-4">
                NUESTRA CAPACIDAD <br/>
                <span className="text-[#d4af37]">
                  TECNOLÓGICA
                </span>
              </h2>
              <p className="mt-3 text-base sm:text-lg text-white font-medium">
                Desde el 2006 siendo líderes<br/>en manufactura
              </p>
            </div>

            {/* Right: Data Blocks matching Canva */}
            <div className="space-y-6">
              {/* Box 1: Nave Industrial */}
              <div className="p-8 border border-[#d4af37]/60 bg-[#0b0c10]/70 backdrop-blur-md shadow-xl flex items-center h-40">
                <p className="text-[17px] text-zinc-200 leading-relaxed font-light">
                  El área de nuestra nave industrial es de <br/> más de <span className="font-bold text-white">14,000 metros cuadrados</span>.
                </p>
              </div>

              {/* Box 2: Certifications and Video Stack - Row layout per Canva */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-40">
                <div className="p-4 border border-[#d4af37]/60 bg-[#0b0c10]/90 backdrop-blur-md flex items-center justify-center shadow-2xl h-full">
                   <div className="text-left w-full h-full p-2 flex flex-col justify-center">
                     <span className="text-white text-[15px] font-black leading-relaxed tracking-wider mb-3 drop-shadow-md uppercase">
                       Tier 2 de: <br/> Nissan,<br/> Honda, Mazda
                     </span>
                     <div className="w-12 h-[3px] bg-[#d4af37]" />
                   </div>
                </div>

                <div className="relative overflow-hidden border border-[#d4af37]/60 bg-zinc-950 group h-full shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"
                    alt="Tour planta Maindsteel"
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="w-10 h-10 rounded-full bg-transparent border-2 border-[#d4af37] text-[#d4af37] flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                      <Play className="w-4 h-4 fill-current ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. NUESTROS PROCESOS (12 Process Cards Grid with Gold Accents) */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0e1015] border-b border-zinc-800" id="processes-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              NUESTROS{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f5d47a] to-[#d4af37]">
                PROCESOS
              </span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light max-w-3xl mx-auto">
              Suministramos un gran número de partes para la industria automotriz, con nuestra experiencia aseguramos
              la durabilidad y consistencia en la manufactura de partes para producción, ofreciendo proceso completo
              desde el diseño y simulación CAD hasta el maquinado, ensamble y pruebas de calidad.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PROCESSES_DATA.map((proc, index) => (
              <div
                key={proc.id}
                className="relative border border-[#d4af37]/20 rounded-lg overflow-hidden bg-[#0d1015] flex flex-col group shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]"
                id={`process-card-${proc.slug}`}
              >
                <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                  <Image
                    src={proc.cardImage || proc.machineryImage}
                    alt={proc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.85] contrast-110"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 left-4 bg-[#11131a] border border-[#d4af37]/60 px-2 py-0.5 shadow-md">
                    <span className="text-[#d4af37] font-black text-xs tracking-widest font-sans">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-[15px] font-black uppercase text-white tracking-widest leading-snug mb-8 group-hover:text-[#f5d47a] transition-colors duration-300">
                    {proc.title}
                  </h3>
                  <div className="mt-auto">
                    <button
                      onClick={() => onNavigate(`proceso/${proc.slug}` as RoutePath)}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-transparent text-white hover:text-black border border-[#d4af37]/40 hover:bg-[#d4af37] hover:border-[#d4af37] text-[11px] font-bold uppercase tracking-widest transition-all duration-300"
                      id={`btn-ver-detalles-${proc.slug}`}
                    >
                      VER DETALLES
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. NUESTROS CLIENTES */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#0a0b0e]" id="clients-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              NUESTROS{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f5d47a] to-[#d4af37]">
                CLIENTES
              </span>
            </h2>
            <p className="text-xs text-zinc-400 mt-2 uppercase tracking-wider font-light">
              Marcas globales y ensambladoras líderes que confían en la precisión de Maindsteel
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3" />
          </div>

          <NuestrosClientesBanner />
        </div>
      </section>
    </>
  );
};

export default HomeSecondaryContent;
