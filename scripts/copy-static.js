import { cpSync, existsSync, mkdirSync, readdirSync } from "fs";
import path from "path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist/public");
const extraPublicDir = path.join(rootDir, "public");
const rootStaticFiles = [
  "ads.txt",
  "accessibility.txt",
  "ai.txt",
  "bots.txt",
  "browserconfig.xml",
  "claude.txt",
  "crawlers.txt",
  "geo.txt",
  "gpt.txt",
  "humans.txt",
  "llms.txt",
  "manifest.json",
  "nlp.txt",
  "opensearch.xml",
  "robots.txt",
  "security.txt",
  "seo.txt",
  "sitemap.xml",
  "training.txt",
];

if (!existsSync(distDir)) {
  throw new Error("Expected dist/public to exist. Run `vite build` first.");
}

const copyRootFiles = () => {
  rootStaticFiles.forEach((file) => {
    const source = path.join(rootDir, file);
    if (existsSync(source)) {
      cpSync(source, path.join(distDir, file));
    }
  });
};

const copyExtraPublicDir = () => {
  if (!existsSync(extraPublicDir)) return;
  const entries = readdirSync(extraPublicDir);
  if (entries.length === 0) return;
  cpSync(extraPublicDir, distDir, { recursive: true });
};

mkdirSync(distDir, { recursive: true });
copyExtraPublicDir();
copyRootFiles();
