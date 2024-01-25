import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/BreakingNews",
  plugins: [react()],
  server: {
    proxy: "https://news-headlines.onrender.com",
  },
  /*   server: {
    proxy: "http://localhost:3005",
  }, */
});
