import type { App } from "vue";
import svgIcon from "./svgIcon";

// globalComponents
export default function setupGlobal(app: App) {
  app.use(svgIcon);
}
