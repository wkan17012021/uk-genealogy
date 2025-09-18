import { defineConfig } from "vite";

export default defineConfig({
   base: "/", // Set this to your repo name
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
