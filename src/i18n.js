import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import lnJson from "./locales/ln.json";
import ruJson from "./locales/ru.json";

const resources = {
  ln: {
    translation: lnJson,
  },
  ru: {
    translation: ruJson,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ln",
    fallbackLng: "ln",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
