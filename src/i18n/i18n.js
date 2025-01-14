import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "action.play": "Play",
      "action.descend": "Descend",
      "action.summon": "Summon",

      "player": "Player",
    }
  },
  zh: {
    translation: {
      "action.play": "出牌",
      "action.descend": "降临",
      "action.summon": "召唤",

      "player": "玩家",
      "'s Panel": " 的面板"
    }
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;
