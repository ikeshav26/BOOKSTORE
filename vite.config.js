import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import envCompatible from "vite-plugin-env-compatible";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), envCompatible(), tailwindcss()],
  server: {
    allowedHosts: [
      "localhost",
      "*.trycloudflare.com",
      "longitude-slot-pope-analyst.trycloudflare.com",
    ],
  },
});
