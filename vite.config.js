import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // The main entry point for your theme's assets.
    // Vite will automatically handle all imports from this file.
    rollupOptions: {
      input: {
        main: "/main.js",
      },
    },
    // The directory where Vite will output the bundled and minified files.
    outDir: "dist",
    // Generates a manifest file to help WordPress enqueue the correct files.
    manifest: true,
    // Clears the output directory before building.
    emptyOutDir: true,
    // Ensures assets are copied to the correct folder
    assetsDir: "",
  },
});
