import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import locale_fr from './locale/fr/locale_fr';
import locale_en from './locale/en/locale_en';
import locale_ar from './locale/ar/locale_ar';

i18n
// detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    .init({
        debug: process.env.NODE_ENV === "development",
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            fr: {
                translation: locale_fr
            },
            en: {
                translation: locale_en
            },
            ar: {
                translation: locale_ar
            }
        }
    });

export default i18n;