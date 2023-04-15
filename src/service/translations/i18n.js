import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations for different locales
import en from './locales/en/translation.json';
import bg from './locales/bg/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
            bg: {
                translation: bg,
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
