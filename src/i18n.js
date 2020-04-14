import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
import translationEn from "./locales/en/translations.json";
import translationFr from "./locales/fr/translations.json";
i18n
.use(XHR)
.use(LanguageDetector)
.init({
    debug:true,
    lng:"en",

    // we init with resources
    resources: {
      en: {
        translations: translationEn
      },
      fr: {
        translations: translationFr
      }
    },
    fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
  
  });
  
  export default i18n;