import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// base: "./" -> rutas relativas, funciona en GitHub Pages (sub-path) y Vercel
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    outDir: "dist",
    assetsInlineLimit: 2048,
  },
});
