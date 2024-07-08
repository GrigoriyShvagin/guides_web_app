import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createI18n, useI18n } from "vue-i18n";
import { languages } from "./i18n";

const messages = Object.assign(languages);

const i18n = createI18n({
  legacy: false,
  fallbackLocale: "ru",
  locale: localStorage.getItem("lang") == "Русский" ? "ru" : "en",
  messages,
});

createApp(App, {
  setup() {
    const { t } = useI18n;
    return { t };
  },
})
  .use(router)
  .use(i18n)
  .mount("#app");
