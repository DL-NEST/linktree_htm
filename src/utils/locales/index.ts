import { createI18n } from "vue-i18n";
import { zh } from "@/utils/locales/zh";
import { en } from "@/utils/locales/en";
import { usePreferredLanguages } from "@vueuse/core";

// 获取浏览器首语言
const languages: string =
  usePreferredLanguages().value[0] === "zh-CN" ? "zh" : "en";

const messages = {
  ...zh,
  ...en,
};

export const locales = createI18n({
  legacy: false,
  locale: languages,
  fallbackLocale: languages,
  messages,
});
