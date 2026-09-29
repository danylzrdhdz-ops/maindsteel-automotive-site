import React from 'react';
import { ArrowRight, Play, Award } from 'lucide-react';
import { RoutePath } from '../types';
import {
  GoldMaindsteelEmblem,
  GoldMedallionMexico,
  GoldMedallionQuality,
  GoldMedallionCar,
  CertificacionesStack,
  NuestrosClientesBanner,
  CapacidadTecnologicaVisual,
  ManufacturaAlaAlturaVisual
} from '../components/BrandIcons';
import { PROCESSES_DATA } from '../data/processesData';
import manufacturaBg from '../../images/manufactura ala altura de la empresa.png';
import medallaPlateada from '../../images/medalla plateada de auto.png';
import politicaImg from '../../images/política de calidad.png';
import garantiaImg from '../../images/garantia maindsteel medalla.png';
import mexicanoImg from '../../images/100  mexicano.png';
import capacidadBg from '../../images/capacidad tecnológica.png';

interface HomeViewProps {
  onNavigate: (route: RoutePath) => void;
  onOpenQuote: (service?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="w-full bg-[#0a0b0e] text-zinc-200" id="home-view">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION: MANUFACTURA A LA ALTURA */}
      {/* ============================================================ */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden border-b border-zinc-800" id="hero-section">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <img 
            src={manufacturaBg} 
            alt="Manufactura a la Altura" 
            className="w-full h-full object-cover filter brightness-[0.6] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15),transparent_70%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Gold Certified Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13151b]/90 border border-[#d4af37]/60 mb-6 text-xs uppercase tracking-widest text-[#f5d47a] shadow-xl">
            <Award className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-semibold">Tier 2 Automotriz • Certificación IATF 16949</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-tight sm:leading-none drop-shadow-[0_6px_30px_rgba(0,0,0,0.9)]">
            MANUFACTURA A LA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f5d47a] to-[#d4af37]">
              ALTURA
            </span>{' '}
            DE TU EMPRESA
          </h1>

          <p className="mt-6 text-base sm:text-xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
            Diseño y manufactura de partes automotrices y comercialización de productos metálicos de alta precisión con tecnología CNC.
          </p>

          {/* Action CTA Buttons - Gold Original Palette */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('productos')}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#b8860b] hover:from-[#d4af37] hover:to-[#f5d47a] text-black font-black text-sm uppercase tracking-wider transition-all shadow-[0_4px_22px_rgba(212,175,55,0.4)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.6)]"
                id="hero-btn-productos"
              >
                VER PRODUCTOS
              </button>
              <button
                onClick={() => onOpenQuote('Asesoría Técnica General')}
                className="w-full sm:w-auto px-8 py-3.5 bg-black hover:bg-black text-white font-bold text-sm uppercase tracking-wider border border-[#d4af37]/80 hover:border-[#d4af37] transition-all shadow-lg"
                id="hero-btn-asesor"
              >
                Hablar con un Asesor
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. COMPANY INTRO & 3 GOLD MEDALLIONS */}
        {/* ============================================================ */}
        <section className="py-20 bg-[#0b0c10]" id="intro-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center">
              <div className="mb-4 opacity-90 grayscale-[85%] filter brightness-110 mt-[-10px] transform hover:scale-105 transition-transform duration-500">
                <img src={medallaPlateada} alt="Medalla Plateada" className="w-40 h-40 sm:w-56 sm:h-56 object-contain drop-shadow-xl" />
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light text-justify sm:text-center mt-[-20px]">
                Desde su fundación en 2006, Maindsteel Automotive se ha posicionado como líder en el diseño y manufactura
                de partes automotrices y comercialización de productos metálicos para diferentes aplicaciones. En Maindsteel
                nos movemos hacia el futuro con la fuerza de nuestros valores, apostando por la innovación continua en
                tecnología y desarrollo, pero, sobre todo, apoyándonos del factor humano que es nuestro motor para desarrollar
                nuevos proyectos enfocados en ofrecer soluciones metálicas eficientes para el mercado.
              </p>
            </div>

          {/* 3 Core Value Cards with Container Design per user screenshot */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: POLÍTICA DE CALIDAD */}
            <div className="flex flex-col items-center text-center group rounded-xl border border-zinc-800 p-8 sm:p-10 shadow-2xl hover:border-[#d4af37]/40 transition-colors bg-[#0c0d11]">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 w-36 h-36 flex items-center justify-center">
                <img src={politicaImg} alt="Política de Calidad" className="w-full h-full object-contain drop-shadow-xl scale-[2.0]" />
              </div>
              <h3 className="text-[13px] font-black uppercase tracking-widest text-white mb-4 mt-2">
                POLÍTICA DE CALIDAD
              </h3>
              <p className="text-[13px] text-zinc-300 leading-relaxed font-light">
                Diseñamos y manufacturamos partes automotrices basados en un sistema de Gestión de Calidad certificado ISO 9001: 2015 e IATF 16949.
              </p>
            </div>

            {/* Card 2: GARANTÍA MAINDSTEEL */}
            <div className="flex flex-col items-center text-center group rounded-xl border border-zinc-800 p-8 sm:p-10 shadow-2xl hover:border-[#d4af37]/40 transition-colors bg-[#0c0d11]">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 w-36 h-36 flex items-center justify-center">
                <img src={garantiaImg} alt="Garantía Maindsteel" className="w-full h-full object-contain drop-shadow-xl scale-[1.3]" />
              </div>
              <h3 className="text-[13px] font-black uppercase tracking-widest text-white mb-4 mt-2">
                GARANTÍA MAINDSTEEL
              </h3>
              <p className="text-[13px] text-zinc-300 leading-relaxed font-light">
                Ofrecemos garantía integral en todos nuestros servicios y componentes conformados con excelencia e ingeniería de clase mundial.
              </p>
            </div>

            {/* Card 3: PRODUCTOS 100% MEXICANOS */}
            <div className="flex flex-col items-center text-center group rounded-xl border border-zinc-800 p-8 sm:p-10 shadow-2xl hover:border-[#d4af37]/40 transition-colors bg-[#0c0d11]">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 w-36 h-36 flex items-center justify-center">
                <img src={mexicanoImg} alt="Productos 100% Mexicanos" className="w-full h-full object-contain drop-shadow-xl scale-[1.4]" />
              </div>
              <h3 className="text-[13px] font-black uppercase tracking-widest text-white mb-4 mt-2">
                PRODUCTOS 100% MEXICANOS
              </h3>
              <p className="text-[13px] text-zinc-300 leading-relaxed font-light">
                Orgullosos de ser una empresa mexicana de clase internacional, ícono industrial del estado de Aguascalientes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CAPACIDAD TECNOLÓGICA */}
      {/* ============================================================ */}
      <section className="relative py-24 bg-[#0a0b0e] overflow-hidden border-b border-zinc-800" id="tech-capacity-section">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <img 
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
                     {/* Abstract tier line */}
                     <div className="w-12 h-[3px] bg-[#d4af37]" />
                   </div>
                </div>

                <div className="relative overflow-hidden border border-[#d4af37]/60 bg-zinc-950 group h-full shadow-xl">
                  <img
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

          {/* 12 Process Cards Grid with Gold Accents matching Canva Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PROCESSES_DATA.map((proc, index) => (
              <div
                key={proc.id}
                className="relative border border-[#d4af37]/20 rounded-lg overflow-hidden bg-[#0d1015] flex flex-col group shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]"
                id={`process-card-${proc.slug}`}
              >
                {/* Process Photo Top Banner */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                  <img
                    src={proc.cardImage || proc.machineryImage}
                    alt={proc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.85] contrast-110"
                  />
                  {/* Floating Number Badge matching mockup */}
                  <div className="absolute top-4 left-4 bg-[#11131a] border border-[#d4af37]/60 px-2 py-0.5 shadow-md">
                    <span className="text-[#d4af37] font-black text-xs tracking-widest font-sans">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content Below */}
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

          {/* Official Client Logos Banner */}
          <NuestrosClientesBanner />
        </div>
      </section>

    </div>
  );
};
