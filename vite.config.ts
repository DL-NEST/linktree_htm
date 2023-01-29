import { fileURLToPath, URL } from "node:url";
import path from "path";
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { visualizer } from "rollup-plugin-visualizer";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "./",
    plugins: [
      vue(),
      vueJsx(),
      VueI18nPlugin({
        include: path.resolve(process.cwd(), "src/locales/**"),
      }),
      // visualizer({
      //   open: true, //注意这里要设置为true，否则无效
      //   gzipSize: true,
      //   brotliSize: true,
      //   filename: "build_analyse.html",
      // }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
        // 自定义插入位置
        // inject?: 'body-last' | 'body-first'
        // custom dom id
        // customDomId: '__svg__icons__dom__',
      }),
      // element 自动按需导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:5523/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      },
    },
    build: {
      chunkSizeWarningLimit: 2000,
      cssCodeSplit: true,
      sourcemap: false,
      minify: "esbuild",
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          splashscreen: resolve(__dirname, "splashscreen/index.html"),
        },
      },
    },
  };
});
