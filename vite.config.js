import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import json from "@rollup/plugin-json";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //json(), // Add the JSON plugin
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      "localhost",
      "*.trycloudflare.com",
      "longitude-slot-pope-analyst.trycloudflare.com",
    ],
  },
});
