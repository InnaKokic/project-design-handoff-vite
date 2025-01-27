import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enTranslation from "./Translations/en.json"
import svTranslation from "./Translations/sv.json"
import zhTranslation from "./Translations/zh.json"
import bgTranslation from "./Translations/bg.json"

const resources = {
    en: {
        translation: enTranslation,
    },
    sv: {
        translation: svTranslation,
    },
    zh: {
        translation: zhTranslation,
    },
    bg: {
        translation: bgTranslation,
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
    interpolation: {
        escapeValue: false
    }
})

export default i18n