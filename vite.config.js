import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: "./",
  server: {
    host: true,
    port: 3000,
  },
});
