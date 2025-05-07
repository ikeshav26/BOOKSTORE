<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import json from '@rollup/plugin-json'; 
import tailwindcss from '@tailwindcss/vite';
import envCompatible from 'vite-plugin-env-compatible';
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import json from "@rollup/plugin-json";
import tailwindcss from "@tailwindcss/vite";
>>>>>>> 114fbd4df86c09a966a60c53848324cddd47e54d

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    envCompatible(),
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
