import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import th from './locales/th.json'

export const SUPPORTED_LANGUAGES = ['th', 'en'] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export const resources = {
  en: { translation: en },
  th: { translation: th },
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: {
      escapeValue: false, // React หนี XSS ให้อยู่แล้ว
    },
    detection: {
      // จำภาษาที่เลือกไว้ใน localStorage
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
