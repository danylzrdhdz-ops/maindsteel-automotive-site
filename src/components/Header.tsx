import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Globe, Menu, X, MessageSquare } from 'lucide-react';
import { MaindsteelLogo } from './BrandIcons';
import { RoutePath, AuthUser } from '../types';
import logoAutomotive from '../../images/logo automotive.webp';
import Image from './Image';

interface HeaderProps {
  currentRoute: RoutePath;
  onNavigate: (route: RoutePath) => void;
  currentUser: AuthUser | null;
  onOpenAuth: () => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  currentUser,
  onOpenAuth,
  onOpenQuote
}) => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

  const handleTranslateToggle = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const navLinks: { label: string; route: RoutePath }[] = [
    { label: t('header.nav.home'), route: 'inicio' },
    { label: t('header.nav.processes'), route: 'procesos' },
    { label: t('header.nav.products'), route: 'productos' },
    { label: t('header.nav.contact'), route: 'contacto' }
  ];

  const isCurrentActive = (route: RoutePath) => {
    if (route === 'procesos') {
      return currentRoute === 'procesos' || currentRoute.startsWith('proceso/');
    }
    return currentRoute === route;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0f14]/95 backdrop-blur-md border-b border-zinc-800 transition-colors" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <div
          onClick={() => {
            onNavigate('inicio');
            setMobileMenuOpen(false);
          }}
          className="flex-shrink-0 cursor-pointer"
          id="header-brand-logo"
        >
          <Image 
            src={logoAutomotive} 
            alt="Maindsteel Automotive Logo" 
            loading="eager"
            fetchPriority="high"
            className="h-12 sm:h-16 w-auto object-contain drop-shadow-sm transition-all"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
          {navLinks.map((link) => {
            const active = isCurrentActive(link.route);
            return (
              <button
                key={link.route}
                onClick={() => onNavigate(link.route)}
                className={`relative py-1 text-sm tracking-wider font-bold uppercase transition-colors ${
                  active
                    ? 'text-[#f5d47a]'
                    : 'text-zinc-400 hover:text-white'
                }`}
                id={`nav-link-${link.route.replace('/', '-')}`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-gradient-to-r from-[#996515] via-[#d4af37] to-[#f5d47a] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={handleTranslateToggle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/80 border border-zinc-800 transition-colors"
              title="Alternar Idioma / Toggle Language"
              id="lang-selector-btn"
            >
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{i18n.language === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>

          {/* Direct Phone Contact with Tooltip */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPhoneTooltip(!showPhoneTooltip)}
              onMouseEnter={() => setShowPhoneTooltip(true)}
              onMouseLeave={() => setShowPhoneTooltip(false)}
              className="p-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-800/80 border border-zinc-800 transition-colors"
              aria-label="Llamar a planta Aguascalientes"
              id="header-phone-btn"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
            </button>

            {showPhoneTooltip && (
              <div className="absolute right-0 top-full mt-2 w-56 p-3 bg-[#16181f] border border-[#d4af37]/60 rounded-md shadow-2xl z-50 text-xs animate-in fade-in">
                <span className="text-[10px] uppercase font-bold text-[#d4af37] block mb-1">
                  {t('header.attention')}
                </span>
                <a
                  href="tel:+524491581709"
                  className="text-white font-bold text-sm block hover:underline hover:text-[#f5d47a]"
                >
                  +52-449-158-17-09
                </a>
                <span className="text-[10px] text-zinc-400 block mt-1">
                  {t('header.schedule')}
                </span>
              </div>
            )}
          </div>

          {/* Quote CTA - Gold Metallic Style */}
          <button
            onClick={onOpenQuote}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#b8860b] hover:from-[#d4af37] hover:to-[#f5d47a] text-black text-xs font-extrabold uppercase tracking-wider rounded transition-all shadow-[0_2px_12px_rgba(212,175,55,0.35)] border border-[#f5d47a]/50"
            id="header-quote-btn"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t('header.quote_btn')}</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenQuote}
            className="p-2 text-xs font-bold bg-[#d4af37] text-black rounded"
            aria-label="Solicitar Cotización"
          >
            <MessageSquare className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white rounded bg-zinc-800"
            aria-label="Abrir menú de navegación"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101217] border-b border-zinc-800 px-5 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => {
            const active = isCurrentActive(link.route);
            return (
              <button
                key={link.route}
                onClick={() => {
                  onNavigate(link.route);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm font-bold tracking-wider uppercase ${
                  active ? 'text-[#f5d47a] font-black' : 'text-zinc-400'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" /> +52-449-158-17-09
            </span>
            <span className="flex items-center gap-1" onClick={handleTranslateToggle}>
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" /> {i18n.language === 'es' ? 'EN' : 'ES'}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
