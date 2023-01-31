import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import type { App } from "vue";

export enum PiniaName {
  User = "user",
  Storage = "storage",
  Init = "init",
}

const pinia = createPinia();

pinia.use(piniaPluginPersist);
export function setupStores(app: App) {
  app.use(pinia);
}
