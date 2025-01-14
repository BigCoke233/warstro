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

      "prompt.constellationStatus": "{{planet}} in {{sign}}",
    }
  },
  zh: {
    translation: {
      "action.play": "出牌",
      "action.descend": "降临",
      "action.summon": "召唤",

      "player": "玩家",
      "'s Panel": " 的面板",

      "sign.aries": "白羊座",
      "sign.sagittarius": "射手座",
      "sign.leo": "狮子座",
      "sign.gemini": "双子座",
      "sign.aquarius": "水瓶座",
      "sign.libra": "天秤座",
      "sign.scorpio": "天蝎座",
      "sign.cancer": "巨蟹座",
      "sign.pisces": "双鱼座",
      "sign.capricorn": "摩羯座",
      "sign.virgo": "处女座",
      "sign.taurus": "金牛座",

      "planet.venus": "金星",
      "planet.mars": "火星",
      "planet.mercury": "水星",
      "planet.uranus": "天王星",
      "planet.neptune": "海王星",
      "planet.pluto": "冥王星",
      "planet.jupiter": "木星",
      "planet.saturn": "土星",

      "prompt.constellationStatus": "{{planet}}落入{{sign}}",
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
