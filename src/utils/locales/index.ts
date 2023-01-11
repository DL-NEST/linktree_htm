import { createI18n } from "vue-i18n";
import { zh } from "@/utils/locales/zh";
import { en } from "@/utils/locales/en";

const messages = {
  ...zh,
  ...en,
};

export const locales = createI18n({
  legacy: false,
  locale: "zh",
  fallbackLocale: "zh",
  messages,
});
