import React from 'react';
import { MaindsteelLogo } from './MaindsteelLogo';
import { Globe, Phone, User, BookOpen, Database, RefreshCw } from 'lucide-react';

interface HeaderProps {
  onOpenCatalog: (filterCategory?: 'proceso' | 'producto') => void;
  onOpenHistory: () => void;
  onResetChat: () => void;
  savedCount: number;
  activeSection?: string;
  onSelectNav?: (nav: 'inicio' | 'procesos' | 'productos' | 'contacto') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCatalog,
  onOpenHistory,
  onResetChat,
  savedCount,
  activeSection = 'contacto',
  onSelectNav,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0B0C0E]/95 backdrop-blur-md border-b border-neutral-900 px-4 sm:px-8 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Official Maindsteel Brand Logo */}
        <div className="cursor-pointer" onClick={() => onSelectNav?.('inicio')}>
          <MaindsteelLogo />
        </div>

        {/* Center: Navigation Menu from Official Site */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.15em] uppercase font-bold">
          <button
            onClick={() => onSelectNav?.('inicio')}
            className={`transition-colors py-1 cursor-pointer ${
              activeSection === 'inicio' ? 'text-[#E5A824]' : 'text-neutral-300 hover:text-white'
            }`}
          >
            INICIO
          </button>
          <button
            onClick={() => onOpenCatalog('proceso')}
            className={`transition-colors py-1 cursor-pointer flex items-center gap-1.5 ${
              activeSection === 'procesos' ? 'text-[#E5A824]' : 'text-neutral-300 hover:text-white'
            }`}
          >
            PROCESOS
          </button>
          <button
            onClick={() => onOpenCatalog('producto')}
            className={`transition-colors py-1 cursor-pointer flex items-center gap-1.5 ${
              activeSection === 'productos' ? 'text-[#E5A824]' : 'text-neutral-300 hover:text-white'
            }`}
          >
            PRODUCTOS
          </button>
          <button
            onClick={() => onSelectNav?.('contacto')}
            className="text-white font-bold relative py-1 cursor-pointer"
          >
            CONTACTO
            {/* The golden underline accent as seen in the website screenshot */}
            <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E5A824] rounded-full shadow-[0_0_8px_#E5A824]" />
          </button>
        </nav>

        {/* Right: Actions, Language, Phone and Iniciar Sesión button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Catalog mobile button */}
          <button
            onClick={() => onOpenCatalog()}
            className="lg:hidden p-2 text-xs border border-neutral-800 text-neutral-300 rounded hover:text-[#E5A824] hover:border-[#E5A824]/50"
            title="Ver catálogo"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          {/* Language selector: [🌐 EN] */}
          <button
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-300 border border-neutral-800 rounded hover:border-neutral-600 transition-colors cursor-pointer"
            title="Cambiar idioma a Inglés"
          >
            <Globe className="w-3.5 h-3.5 text-[#E5A824]" />
            <span className="font-semibold tracking-wider text-[11px]">EN</span>
          </button>

          {/* Telephone button: [📞] */}
          <a
            href="tel:+524499731200"
            className="p-2 text-neutral-300 border border-neutral-800 rounded hover:border-[#E5A824] hover:text-[#E5A824] transition-colors cursor-pointer flex items-center justify-center"
            title="Llamar a Conmutador: +52 (449) 973-1200"
          >
            <Phone className="w-4 h-4 text-[#E5A824]" />
          </a>

          {/* Iniciar Sesión button: [👤 INICIAR SESIÓN] from screenshot */}
          <button
            onClick={onOpenHistory}
            className="bg-[#E5A824] hover:bg-[#F1B434] active:scale-95 text-black font-extrabold text-xs sm:text-[13px] tracking-wide uppercase px-4 sm:px-5 py-2 rounded flex items-center gap-2 transition-all shadow-[0_2px_12px_rgba(229,168,36,0.3)] cursor-pointer"
          >
            <User className="w-4 h-4 stroke-[2.5]" />
            <span>INICIAR SESIÓN</span>
          </button>

          {/* Reset button for conversation */}
          <button
            onClick={onResetChat}
            className="p-2 text-neutral-400 hover:text-white border border-neutral-800 rounded hover:bg-neutral-900 transition-colors cursor-pointer"
            title="Nueva cotización"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
