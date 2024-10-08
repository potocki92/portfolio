import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enFallback from "./locales/en/fallback.json";
import plFallback from "./locales/pl/fallback.json";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    defaultNS: "fallback",
    fallbackNS: "fallback",
    resources: {
      en: {
        fallback: enFallback,
      },
      pl: {
        fallback: plFallback,
      },
    },
  });

export default i18next;
