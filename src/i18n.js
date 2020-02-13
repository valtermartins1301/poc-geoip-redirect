import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import ptbr from './locales/pt-BR'
import en from './locales/en'

const resources = {
  en,
  'pt-BR': ptbr,
}

const detectionOptions = {
  order: [
    'querystring',
    'subdomain',
    'cookie',
    'localStorage',
    'navigator',
    'htmlTag',
    'path',
  ],
  lookupQuerystring: 'lang',
}

i18n
  .use(LanguageDetector) // detector language using detectionOptions object
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: detectionOptions,
    resources,

    fallbackLng: 'pt-BR',

    defaultNS: ['commons'],

    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  })

export default i18n