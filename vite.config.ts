import { defineConfig } from "vite";

export default defineConfig({
  root: "client",
  logLevel: "info",
  server: {
    port: 6789,
    host: "0.0.0.0",
    strictPort: true,
  },
  build: {
    polyfillModulePreload: false,
    target: "esnext",
    manifest: true,
    sourcemap: true,
    cssTarget: "esnext",
    outDir: "../docs",
    emptyOutDir: true,
    assetsDir: "./",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) return id;
        },
      },
    },
  },
});