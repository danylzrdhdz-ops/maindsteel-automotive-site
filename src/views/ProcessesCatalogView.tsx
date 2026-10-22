import React from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from '../types';
import { useProcesses } from '../data/processesData';
import Image from '../components/Image';

interface ProcessesCatalogViewProps {
  onNavigate: (route: RoutePath) => void;
  onOpenQuote: (serviceName: string) => void;
}

export const ProcessesCatalogView: React.FC<ProcessesCatalogViewProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const { t } = useTranslation();
  const processes = useProcesses();
  return (
    <div className="w-full bg-[#0a0b0e] text-zinc-200 min-h-screen" id="processes-catalog-view">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-72 sm:h-80 flex items-center justify-center overflow-hidden border-b border-zinc-800">
        <Image
          src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
          alt="Procesos de manufactura industrial"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.3] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15),transparent_70%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-wider drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {t('processes_catalog.title')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
          <p className="mt-4 text-lg sm:text-2xl text-[#f5d47a] uppercase tracking-wider font-extrabold drop-shadow-md">
            {t('processes_catalog.subtitle')}
          </p>
        </div>
      </section>

      {/* 2. PROCESSES LIST / CATALOG (Matching Image 9 structure) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10">
          {processes.map((proc, index) => (
            <div
              key={proc.id}
              className="bg-[#0f1115] rounded-xl overflow-hidden border-2 border-zinc-800 transition-all flex flex-col md:flex-row group hover:border-[#d4af37]/80 shadow-2xl"
              id={`catalog-process-${proc.slug}`}
            >
              {/* Left Photo */}
              <div className="w-full md:w-[35%] min-h-[260px] md:h-auto overflow-hidden bg-zinc-950 relative border-r border-zinc-800/80">
                <Image
                  src={proc.cardImage || proc.machineryImage}
                  alt={proc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-black/90 border border-[#d4af37] rounded-md text-xs sm:text-sm uppercase font-black text-[#f5d47a] tracking-widest shadow-lg">
                  {t('processes_catalog.process_prefix')}{index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
              </div>

              {/* Right Side: Details & Actions */}
              <div className="w-full md:w-[65%] p-6 lg:p-8 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4 border-b border-zinc-800 pb-3">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-wide drop-shadow-sm">
                      {proc.title}
                    </h2>
                    <span className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-widest text-[#d4af37] uppercase">
                      <Sparkles className="w-4 h-4" />
                      <span>IATF 16949</span>
                    </span>
                  </div>

                  <p className="text-lg sm:text-xl text-zinc-100 leading-relaxed font-normal">
                    {proc.machineryText}
                  </p>

                  <div className="flex items-start gap-3.5 text-base sm:text-lg text-white font-medium bg-black/60 p-4 rounded-lg border border-[#d4af37]/40 shadow-inner">
                    <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span>{proc.machineryCardSpecs}</span>
                  </div>
                </div>

                {/* Actions Block: Horizontal Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenQuote(proc.title)}
                    className="px-8 py-3.5 bg-[#b8860b] hover:bg-[#d4af37] text-white text-sm sm:text-base font-black uppercase tracking-wider rounded-lg transition-all shadow-[0_4px_16px_rgba(184,134,11,0.4)] hover:shadow-[0_4px_22px_rgba(212,175,55,0.6)] cursor-pointer"
                    id={`btn-cotizar-proc-${proc.slug}`}
                  >
                    {t('processes_catalog.btn_quote')}
                  </button>

                  <button
                    onClick={() => onNavigate(`proceso/${proc.slug}` as RoutePath)}
                    className="px-8 py-3.5 bg-black hover:bg-zinc-900 border-2 border-[#d4af37] hover:border-[#f5d47a] text-[#f5d47a] hover:text-[#d4af37] text-sm sm:text-base font-black uppercase tracking-wider rounded-lg transition-all flex items-center gap-2.5 shadow-sm cursor-pointer"
                    id={`btn-ver-proc-${proc.slug}`}
                  >
                    <span>{t('processes_catalog.btn_view')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
