import path from "node:path";

import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@lang": path.resolve("./src"),
    },
  },
  build: {
    emptyOutDir: false,
    lib: {
      name: "davascript",
      entry: path.resolve("./src/index.ts"),
      formats: ["es", "cjs"],

      fileName: (format: string) => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: ["@davascript/shared"],

      output: {
        exports: "named",
        globals: {},
      },
    },
  },
  plugins: [
    dts({
      root: ".",
      entryRoot: "./src",
      outputDir: "./dist/types",
    }),
  ],
});
