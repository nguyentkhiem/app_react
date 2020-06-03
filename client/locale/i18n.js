import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from './en';
import JP from './jp';

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // React already does escaping
  resources: {
    en: {
      translations: EN
    },
    jp: {
      translations: JP
    }
  },
  //default language
  lng: window.localStorage.getItem('locate') || "en",
  fallbackLng: ["en", "jp"],
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false
});

export default i18n;
