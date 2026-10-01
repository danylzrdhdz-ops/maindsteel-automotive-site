import React from 'react';
import { ArrowLeft, Check, Layers, Cpu, ShieldAlert, Sparkles } from 'lucide-react';
import { ProcessDetails, RoutePath } from '../types';
import maquinariaImg from '../../images/Maquinaria.webp';
import garantiaImg from '../../images/Garantía Maindsteel.webp';
import hidrocalidadImg from '../../images/100_hidrocalidad.webp';
import Image from './Image';

interface ProcessTemplateProps {
  process: ProcessDetails;
  onNavigate: (route: RoutePath) => void;
  onOpenQuote: (serviceName: string) => void;
}

export const ProcessTemplate: React.FC<ProcessTemplateProps> = ({
  process,
  onNavigate,
  onOpenQuote
}) => {
  return (
    <div className="w-full bg-[#0a0b0e] text-zinc-200 min-h-screen" id={`process-page-${process.slug}`}>
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[320px] md:h-[380px] overflow-hidden flex items-center justify-center bg-[#08090b]">
        {/* Imagen de fondo específica de este proceso */}
        <Image 
          src={process.coverImage || process.cardImage} 
          alt={process.title} 
          className={`absolute inset-0 w-full h-full pointer-events-none ${process.coverImageFit === 'contain' ? 'object-contain' : 'object-cover object-center scale-105'}`}
        />

        {/* Degradado oscuro para fundir bordes y garantizar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-[#08090b]/80 to-[#08090b]/60"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contenido al frente */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          {/* Botón Volver */}
          <button 
            onClick={() => onNavigate('procesos')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-300 border border-[#c59b27]/40 bg-black/60 px-4 py-1.5 rounded-full hover:border-[#c59b27] hover:text-[#c59b27] transition mb-4"
          >
            ← Volver a Catálogo de Procesos
          </button>

          {/* Título dinámico del proceso */}
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-white drop-shadow-md">
            {process.title}
          </h1>

          {/* Línea decorativa dorada */}
          <div className="w-20 h-1 bg-[#c59b27] mt-3 rounded-full"></div>
        </div>
      </section>

      {/* 2. MAIN CONTENT SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* SECTION 1: NUESTRA MAQUINARIA (Left Image, Right Text) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center" id="section-nuestra-maquinaria">
          {/* Left Machine Image with Gold Border */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[320px] md:h-[360px] rounded-2xl border-2 border-[#c59b27]/60 overflow-hidden bg-[#0c0d10]">
              <Image
                src={process.machineryImage}
                alt={`${process.title} - Maquinaria`}
                className={`w-full h-full block ${process.machineryImageFit === 'contain' ? 'object-contain' : 'object-cover scale-[1.02]'}`}
              />
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-black/40"></div>
              <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur border border-[#c59b27]/50 text-[#c59b27] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider">
                PARQUE TECNOLÓGICO CNC
              </div>
            </div>
          </div>

          {/* Right Text & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
                {process.machineryTitle}
              </h2>
              <div className="w-16 h-1 bg-[#d4af37] mt-2" />
            </div>

            <p className="text-zinc-300 text-base leading-relaxed font-light">
              {process.machineryText}
            </p>

            {/* Quick spec highlights */}
            <div className="p-4 rounded-md bg-[#13151b] border border-zinc-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#d4af37] font-semibold uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Capacidad y Fiabilidad IATF 16949</span>
              </div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Operamos bajo esquemas de manufactura esbelta con calibración continua y trazabilidad
                completa por lote de producción.
              </p>
            </div>

            <div>
              <button
                onClick={() => onOpenQuote(`${process.title} (Maquinaria)`)}
                className="px-7 py-3 bg-[#b8860b] hover:bg-[#d4af37] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded transition-all shadow-[0_4px_16px_rgba(184,134,11,0.4)] hover:shadow-[0_4px_22px_rgba(212,175,55,0.6)]"
                id="quote-btn-maquinaria"
              >
                Solicitar cotización
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: VENTAJAS DEL PROCESO (Left Text, Right Image) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 border-t border-zinc-800/80" id="section-ventajas-proceso">
          {/* Left Text & CTA */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="inline-block">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
                {process.advantagesTitle}
              </h2>
              <div className="w-16 h-1 bg-[#d4af37] mt-2" />
            </div>

            <p className="text-zinc-300 text-base leading-relaxed font-light">
              {process.advantagesText}
            </p>

            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Tolerancias repetitivas aptas para ensamble en líneas automatizadas Tier 1.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Disminución del desperdicio de material gracias a software de anidado CAD/CAM.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Superficies limpias listas para pintura, recubrimiento o ensamble directo.</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote(`${process.title} (Ventajas/Proceso)`)}
                className="px-7 py-3 bg-[#b8860b] hover:bg-[#d4af37] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded transition-all shadow-[0_4px_16px_rgba(184,134,11,0.4)] hover:shadow-[0_4px_22px_rgba(212,175,55,0.6)]"
                id="quote-btn-ventajas"
              >
                Solicitar cotización
              </button>
            </div>
          </div>

          {/* Right Manufactured Part Image with Gold Border */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative w-full h-[320px] md:h-[360px] rounded-2xl border-2 border-[#c59b27]/60 overflow-hidden bg-[#0c0d10]">
              <Image
                src={process.advantagesImage}
                alt={`${process.title} - Producto terminado`}
                className="w-full h-full object-cover block scale-[1.02]"
              />
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-black/40"></div>
              <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur border border-[#c59b27]/50 text-[#c59b27] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider">
                PIEZA TERMINADA
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 border-t border-zinc-800" id="section-feature-cards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1: MAQUINARIA */}
            <div className="bg-[#12141a] rounded-lg p-7 border border-zinc-700/80 hover:border-[#d4af37] transition-all flex flex-col items-center text-center shadow-lg group">
              <div className="mb-5 transform group-hover:-translate-y-2 transition-transform h-32 w-32 flex items-center justify-center">
                <Image src={maquinariaImg} alt="Maquinaria Maindsteel" className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(212,175,55,0.4)] transform scale-[3]" />
              </div>
              <h3 className="text-base font-extrabold uppercase tracking-wider text-white mb-3 mt-4">
                Maquinaria
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                {process.machineryCardSpecs}
              </p>
            </div>

            {/* CARD 2: GARANTÍA MAINDSTEEL */}
            <div className="bg-[#12141a] rounded-lg p-7 border border-zinc-700/80 hover:border-[#d4af37] transition-all flex flex-col items-center text-center shadow-lg group">
              <div className="mb-5 transform group-hover:-translate-y-2 transition-transform h-32 w-32 flex items-center justify-center">
                <Image src={garantiaImg} alt="Garantía Maindsteel" className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(212,175,55,0.4)] transform scale-[3]" />
              </div>
              <h3 className="text-base font-extrabold uppercase tracking-wider text-white mb-3 mt-4">
                Garantía Maindsteel
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                Ofrecemos garantía en todos nuestros servicios y productos realizados con excelencia
              </p>
            </div>

            {/* CARD 3: 100% HIDROCALIDAD */}
            <div className="bg-[#12141a] rounded-lg p-7 border border-zinc-700/80 hover:border-[#d4af37] transition-all flex flex-col items-center text-center shadow-lg group">
              <div className="mb-5 transform group-hover:-translate-y-2 transition-transform h-32 w-32 flex items-center justify-center">
                <Image src={hidrocalidadImg} alt="100% Hidrocalidad" className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(212,175,55,0.4)] transform scale-[3]" />
              </div>
              <h3 className="text-base font-extrabold uppercase tracking-wider text-white mb-3 mt-4">
                100% Hidrocalidad
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                Orgullosos de ser una empresa mexicana ícono del estado de Aguascalientes.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 4: TECHNICAL SPECIFICATIONS SHEET */}
        {process.additionalSpecs && process.additionalSpecs.length > 0 && (
          <section className="p-8 rounded-lg bg-[#111318] border border-zinc-800" id="section-tech-specs">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-[#d4af37]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Ficha Técnica de Capacidades de Proceso
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.additionalSpecs.map((spec, i) => (
                <div key={i} className="p-4 rounded bg-[#161922] border border-zinc-800/80">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1">
                    {spec.label}
                  </span>
                  <span className="text-sm font-bold text-[#f5d47a] block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
