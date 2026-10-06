import React, { lazy, Suspense, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath, AuthUser } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { DataAdminDrawer } from './components/DataAdminDrawer';
import { getProcessBySlug } from './data/processesData';
import { authService, subscribeToStore } from './services/store';

// Eager load for initial view to reduce LCP (Largest Contentful Paint) penalty in PageSpeed Insights
import { HomeView } from './views/HomeView';

// Lazy loaded views for Code Splitting (TBT reduction)
const ProcessesCatalogView = lazy(() => import('./views/ProcessesCatalogView').then(m => ({ default: m.ProcessesCatalogView })));
const ProductsView = lazy(() => import('./views/ProductsView').then(m => ({ default: m.ProductsView })));
const ContactView = lazy(() => import('./views/ContactView').then(m => ({ default: m.ContactView })));
const ProcessTemplate = lazy(() => import('./components/ProcessTemplate').then(m => ({ default: m.ProcessTemplate })));
const ChatbotQuotationView = lazy(() => import('./views/ChatbotQuotationView').then(m => ({ default: m.ChatbotQuotationView })));

export default function App() {
  const { t } = useTranslation();
  const [currentRoute, setCurrentRoute] = React.useState<RoutePath>('inicio');
  const [previousRoute, setPreviousRoute] = React.useState<RoutePath>('inicio');
  const [quoteDefaultService, setQuoteDefaultService] = React.useState<string>('');
  const [authModalOpen, setAuthModalOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState<AuthUser | null>(() => authService.getCurrentUser());

  // Listen for hash changes in browser URL
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as RoutePath;
      if (hash) {
        setCurrentRoute(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync auth state
  React.useEffect(() => {
    const unsubscribe = subscribeToStore(() => {
      setCurrentUser(authService.getCurrentUser());
    });
    return () => unsubscribe();
  }, []);

  const navigateTo = (route: RoutePath) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceName?: string) => {
    setQuoteDefaultService(serviceName || '');
    setPreviousRoute(currentRoute);
    navigateTo('chatbot');
  };

  const renderActiveView = () => {
    if (currentRoute === 'chatbot') {
      return (
        <ChatbotQuotationView 
          initialItem={quoteDefaultService} 
          onBack={() => navigateTo(previousRoute)} 
          onGoHome={() => navigateTo('inicio')}
        />
      );
    }

    if (currentRoute === 'inicio') {
      return (
        <HomeView
          onNavigate={navigateTo}
          onOpenQuote={handleOpenQuote}
        />
      );
    }

    if (currentRoute === 'procesos') {
      return (
        <ProcessesCatalogView
          onNavigate={navigateTo}
          onOpenQuote={handleOpenQuote}
        />
      );
    }

    if (currentRoute === 'productos') {
      return (
        <ProductsView
          onOpenQuote={handleOpenQuote}
        />
      );
    }

    if (currentRoute === 'contacto') {
      return <ContactView />;
    }

    // Dynamic Process Template Route: 'proceso/:slug'
    if (currentRoute.startsWith('proceso/')) {
      const slug = currentRoute.replace('proceso/', '');
      const processData = getProcessBySlug(slug);

      if (processData) {
        return (
          <ProcessTemplate
            process={processData}
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
          />
        );
      }

      // Fallback if slug not found
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-[#0a0b0e] text-zinc-300">
          <h2 className="text-2xl font-bold text-white mb-2">{t('app.not_found')}</h2>
          <p className="text-sm text-zinc-400 mb-6">{t('app.not_found_desc')}</p>
          <button
            onClick={() => navigateTo('procesos')}
            className="px-6 py-2.5 bg-[#b8860b] text-white font-bold rounded uppercase text-xs"
          >
            {t('app.view_catalog')}
          </button>
        </div>
      );
    }

    return <HomeView onNavigate={navigateTo} onOpenQuote={handleOpenQuote} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0b0e] text-zinc-200 font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Top Banner indicating local persistence */}
      <div className="bg-[#12141c] border-b border-zinc-800/80 px-4 py-1.5 text-center text-[11px] text-zinc-400 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>{t('app.secure_mode')}</span>
      </div>

      {/* Main Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        currentUser={currentUser}
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main View Body */}
      <main className="flex-1 w-full" id="main-view-container">
        <Suspense fallback={<div className="flex h-[50vh] animate-pulse items-center justify-center text-[#d4af37]">{t('app.loading')}</div>}>
          {renderActiveView()}
        </Suspense>
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Global Modals */}

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        currentUser={currentUser}
        onLoginSuccess={(user) => setCurrentUser(user)}
        onLogout={() => {
          authService.logout();
          setCurrentUser(null);
        }}
      />

      {/* Storage / Collection Inspector Drawer */}
      <DataAdminDrawer />
    </div>
  );
}
