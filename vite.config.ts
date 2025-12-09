import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "fs";

export default defineConfig({
  // Use "/" for custom domain or root deployment
  // Use "/repo-name/" if deploying to username.github.io/repo-name/
  base: "/",
  plugins: [
    react(),
    {
      name: 'copy-attached-assets',
      closeBundle() {
        const srcDir = path.resolve(import.meta.dirname, "attached_assets");
        const destDir = path.resolve(import.meta.dirname, "dist", "attached_assets");

        // Create destination directory
        if (!existsSync(destDir)) {
          mkdirSync(destDir, { recursive: true });
        }

        // Recursively copy all files
        function copyDirectory(src, dest) {
          const entries = readdirSync(src, { withFileTypes: true });

          for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);

            if (entry.isDirectory()) {
              if (!existsSync(destPath)) {
                mkdirSync(destPath, { recursive: true });
              }
              copyDirectory(srcPath, destPath);
            } else {
              copyFileSync(srcPath, destPath);
            }
          }
        }

        copyDirectory(srcDir, destDir);
        console.log('✅ Copied attached_assets to dist/attached_assets');
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
