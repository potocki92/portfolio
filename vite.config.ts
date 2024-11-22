import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleX from "vite-plugin-stylex";
import MillionLint from "@million/lint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), styleX(), MillionLint.vite()],
  server: {
    host: true,
    port: 3000,
  },
});
