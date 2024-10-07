import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enNs1 from "./locales/en/ns1.json";
import enFallback from "./locales/en/fallback.json";
import plNs1 from "./locales/pl/ns1.json";
import plFallback from "./locales/pl/fallback.json";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    defaultNS: "ns1",
    fallbackNS: "fallback",
    resources: {
      en: {
        ns1: enNs1,
        fallback: enFallback,
      },
      pl: {
        ns1: plNs1,
        fallback: plFallback,
      },
    },
  });

export default i18next;
