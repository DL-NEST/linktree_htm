import { createPinia } from "pinia";
// @ts-ignore
import piniaPluginPersist from "pinia-plugin-persist";

export enum PiniaName {
  User = "user",
  Storage = "storage",
}

const pinia = createPinia();

pinia.use(piniaPluginPersist);

export { pinia };
