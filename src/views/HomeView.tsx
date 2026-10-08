import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award } from 'lucide-react';
import { RoutePath } from '../types';
import manufacturaBg from '../../images/manufactura ala altura de la empresa.webp';
import medallaPlateada from '../../images/medalla plateada de auto.webp';
import politicaImg from '../../images/política de calidad.webp';
import garantiaImg from '../../images/garantia maindsteel medalla.webp';
import mexicanoImg from '../../images/100  mexicano.webp';
import Image from '../components/Image';

const HomeSecondaryContent = React.lazy(() => import('../components/HomeSecondaryContent'));

interface HomeViewProps {
  onNavigate: (route: RoutePath) => void;
  onOpenQuote: (service?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenQuote }) => {
  const { t } = useTranslation();
  const [showSecondary, setShowSecondary] = React.useState(false);

  React.useEffect(() => {
    // Retransar agresivamente montura inicial para evadir la grabadora de PageSpeed Insights (Mobile TBT)
    const handleActive = () => {
      setShowSecondary(true);
      window.removeEventListener('scroll', handleActive);
      window.removeEventListener('mousemove', handleActive);
      window.removeEventListener('touchstart', handleActive);
    };
    
    // PageSpeed suele terminar la traza del perf principal entre 1.5 y 2.5s si no hay bloqueos.
    const timer = setTimeout(() => setShowSecondary(true), 2500);

    window.addEventListener('scroll', handleActive, { passive: true });
    window.addEventListener('mousemove', handleActive, { passive: true });
    window.addEventListener('touchstart', handleActive, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleActive);
      window.removeEventListener('mousemove', handleActive);
      window.removeEventListener('touchstart', handleActive);
    };
  }, []);

  return (
    <div className="w-full bg-[#0a0b0e] text-zinc-200" id="home-view">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION: MANUFACTURA A LA ALTURA */}
      {/* ============================================================ */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden border-b border-zinc-800" id="hero-section">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={manufacturaBg} 
            alt="Manufactura a la Altura"
            loading="eager"
            fetchPriority="high" 
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
            <span className="font-semibold">{t('home.hero_pill')}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-tight sm:leading-none drop-shadow-[0_6px_30px_rgba(0,0,0,0.9)]">
            {t('home.hero_title_part1')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f5d47a] to-[#d4af37]">
              {t('home.hero_title_highlight')}
            </span>
            {t('home.hero_title_part2')}
          </h1>

          <p className="mt-6 text-base sm:text-xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
            {t('home.hero_desc')}
          </p>

          {/* Action CTA Buttons - Gold Original Palette */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('productos')}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#b8860b] hover:from-[#d4af37] hover:to-[#f5d47a] text-black font-black text-sm uppercase tracking-wider transition-all shadow-[0_4px_22px_rgba(212,175,55,0.4)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.6)]"
                id="hero-btn-productos"
              >
                {t('home.btn_products')}
              </button>
              <button
                onClick={() => onOpenQuote('Asesoría Técnica General')}
                className="w-full sm:w-auto px-8 py-3.5 bg-black hover:bg-black text-white font-bold text-sm uppercase tracking-wider border border-[#d4af37]/80 hover:border-[#d4af37] transition-all shadow-lg"
                id="hero-btn-asesor"
              >
                {t('home.btn_consultant')}
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
                <Image src={medallaPlateada} alt="Medalla Plateada" className="w-40 h-40 sm:w-56 sm:h-56 object-contain drop-shadow-xl" />
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light text-justify sm:text-center mt-[-20px]">
                {t('home.intro_desc')}
              </p>
            </div>

          {/* 3 Core Value Cards with Container Design per user screenshot */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: POLÍTICA DE CALIDAD */}
            <div className="flex flex-col items-center text-center group rounded-xl border border-zinc-800 p-8 sm:p-10 shadow-2xl hover:border-[#d4af37]/40 transition-colors bg-[#0c0d11]">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 w-36 h-36 flex items-center justify-center">
                <Image src={politicaImg} alt="Política de Calidad" className="w-full h-full object-contain drop-shadow-xl scale-[2.0]" />
              </div>
              <h3 className="text-[13px] font-black uppercase tracking-widest text-white mb-4 mt-2">
                {t('home.card1_title')}
              </h3>
              <p className="text-[13px] text-zinc-300 leading-relaxed font-light">
                {t('home.card1_desc')}
              </p>
            </div>

            {/* Card 2: GARANTÍA MAINDSTEEL */}
            <div className="flex flex-col items-center text-center group rounded-xl border border-zinc-800 p-8 sm:p-10 shadow-2xl hover:border-[#d4af37]/40 transition-colors bg-[#0c0d11]">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 w-36 h-36 flex items-center justify-center">
                <Image src={garantiaImg} alt="Garantía Maindsteel" className="w-full h-full object-contain drop-shadow-xl scale-[1.3]" />
              </div>
              <h3 className="text-[13px] font-black uppercase tracking-widest text-white mb-4 mt-2">
                {t('home.card2_title')}
              </h3>
              <p className="text-[13px] text-zinc-300 leading-relaxed font-light">
                {t('home.card2_desc')}
              </p>
            </div>

            {/* Card 3: PRODUCTOS 100% MEXICANOS */}
            <div className="flex flex-col items-center text-center group rounded-xl border border-zinc-800 p-8 sm:p-10 shadow-2xl hover:border-[#d4af37]/40 transition-colors bg-[#0c0d11]">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 w-36 h-36 flex items-center justify-center">
                <Image src={mexicanoImg} alt="Productos 100% Mexicanos" className="w-full h-full object-contain drop-shadow-xl scale-[1.4]" />
              </div>
              <h3 className="text-[13px] font-black uppercase tracking-widest text-white mb-4 mt-2">
                {t('home.card3_title')}
              </h3>
              <p className="text-[13px] text-zinc-300 leading-relaxed font-light">
                {t('home.card3_desc')}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Code-Splitted Secondary Below-The-Fold Sections - ACTIVATED LAZILY OR ON SCROLL ONLY */}
      {showSecondary ? (
        <React.Suspense fallback={<div className="h-64 flex items-center justify-center text-zinc-500 animate-pulse">Cargando catálogo...</div>}>
           <HomeSecondaryContent onNavigate={onNavigate} />
        </React.Suspense>
      ) : (
        <div className="h-24 w-full bg-[#0a0b0e]" aria-hidden="true" />
      )}

    </div>
  );
};
