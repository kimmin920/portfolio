import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { resolve } from "node:path";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        baoManSaveTheCity: resolve(
          __dirname,
          "projects/bao-man-save-the-city/index.html",
        ),
        oneLine: resolve(__dirname, "projects/one-line/index.html"),
        storyboardFlow: resolve(__dirname, "projects/storyboard-flow/index.html"),
        visualEditor: resolve(__dirname, "projects/visual-editor/index.html"),
      },
    },
  },
  plugins: [tailwindcss(), cloudflare()],
});