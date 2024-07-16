import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enlocal, eslocal, frlocal } from "../locales";

i18n.use(initReactI18next)
    .init(
        {
            lng: "es",
            fallbackLng: "es",
            resources: {
                es: { translation: eslocal },
                en: { translation: enlocal },
                fr: { translation: frlocal }
            },
            interpolation: { escapeValue: false }
        }
    );

export default i18n;
