// Plugins
import Components from "unplugin-vue-components/vite";
import Vue from "@vitejs/plugin-vue";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import ViteFonts from "unplugin-fonts/vite";
import vueDevTools from "vite-plugin-vue-devtools";

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// ponytail: single VITE_PDF_GEN flag also hides the download FAB (App.vue) —
// same env var, read once here and once client-side via import.meta.env.
const isPdfGen = process.env.VITE_PDF_GEN === "true";

export default defineConfig({
  plugins: [
    Vue({ template: { transformAssetUrls } }),
    ...(isPdfGen ? [] : [vueDevTools()]),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify(),
    Components(),
    ViteFonts({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "wght@100;300;400;500;700;900"
          }
        ]
      }
    })
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]
  },
  server: {
    host: true,
    port: 3000
  }
});
