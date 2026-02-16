import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: [
      "laudable-spontaneity-production.up.railway.app",
      ".up.railway.app",
    ],
  },
});
