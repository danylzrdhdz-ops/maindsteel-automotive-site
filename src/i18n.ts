import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // idioma primario
    fallbackLng: 'es', // idioma de respaldo
    interpolation: {
      escapeValue: false // react ya escapa valores por defecto contra XSS
    }
  });

export default i18n;
