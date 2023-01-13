/// <reference types="vite/client" />

interface ImportMetaEnv {
  // readonly VITE_APP_MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    __TAURI__: any;
  }
}
