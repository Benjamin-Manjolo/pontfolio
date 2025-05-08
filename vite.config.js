import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://benjaminmanjolo-nine.vercel.app/", // 🔁 Replace with your actual domain
      // Optional: if you want to exclude paths
      // exclude: ['/admin', '/secret-page']
    }),
  ],
});
