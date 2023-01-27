/// <reference types="vitest" />

import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      containers: path.resolve(__dirname, "./src/containers"),
      helpers: path.resolve(__dirname, "./src/helpers"),
      types: path.resolve(__dirname, "./src/types"),
      assets: path.resolve(__dirname, "./src/assets"),
      src: path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    istanbul({
      include: "src/*",
      exclude: ["node_modules", "test/"],
      extension: [".js", "jsx", ".ts", "tsx"],
    }),
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
    globals: true,
    exclude: [...configDefaults.exclude],
    coverage: {
      reportsDirectory: "coverage-reports/jest",
      include: [
        "src/components/**/*",
        "src/containers/**/*",
        "src/helpers/**/*",
      ],
      all: true,
      provider: "istanbul",
      reporter: ["text", "json", "html"],
    },
  },
});
