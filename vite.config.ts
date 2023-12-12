import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n", "@vueuse/head"],
      exclude: ["**/dist/**"],
      dts: "src/auto-import.d.ts",
    }),
    visualizer(),
    Components({
      dts: "src/components.d.ts",
      resolvers: [],
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias for the 'src' directory
      "@pages": path.resolve(__dirname, "src/pages"), // Alias for the 'src/components' directory
      "@layouts": path.resolve(__dirname, "src/layouts"), // Alias for the 'src/layouts' directory
      "@components": path.resolve(__dirname, "src/components"), // Alias for the 'src/components' directory
      "@assets": path.resolve(__dirname, "src/assets"), // Alias for the 'src/assets' directory
      "@store": path.resolve(__dirname, "src/store"), // Alias for the 'src/store' directory
    },
  },
});
