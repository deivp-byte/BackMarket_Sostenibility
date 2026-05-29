import { createI18n } from 'vue-i18n'
import ca from './locales/ca.json'
import es from './locales/es.json'
import en from './locales/en.json'

export const i18n = createI18n({
  legacy: false, // Forzar el uso moderno de Composition API
  locale: 'ca',  // Idioma por defecto al cargar la web
  fallbackLocale: 'en', // Idioma de respaldo si falta alguna clave
  messages: { ca, es, en }
})