const normalizeBase = (base: string) => {
  if (!base) return "";
  return base.endsWith("/") ? base.slice(0, -1) : base;
};

const ASSET_BASE = normalizeBase(import.meta.env.BASE_URL || "/");

/**
 * Resolves a static asset path so it works when the site is served from a GitHub Pages base URL.
 */
export const resolveAssetPath = (assetPath: string) => {
  if (/^https?:\/\//i.test(assetPath)) return assetPath;
  const normalizedPath = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${ASSET_BASE}${normalizedPath}`;
};

export const applyAssetBaseToVehicles = <T extends { images: string[] }>(items: T[]): T[] =>
  items.map((item) => ({
    ...item,
    images: item.images.map(resolveAssetPath),
  }));

export const rewriteAttachedAssetBackground = (value: string) =>
  value.replace(/url\((['\"]?)(\/attached_assets)/gi, (_, quote) => `url(${quote}${resolveAssetPath("/attached_assets")}`);

export const rewriteDomAssetReferences = () => {
  const selectors = [
    "img[src^='/attached_assets/']",
    "source[src^='/attached_assets/']",
    "link[href^='/attached_assets/']",
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll<HTMLImageElement | HTMLLinkElement>(selector).forEach((node) => {
      const attr = node instanceof HTMLLinkElement ? "href" : "src";
      const original = node.getAttribute(attr);
      if (!original) return;
      node.setAttribute(attr, resolveAssetPath(original));
    });
  });

  document.querySelectorAll<HTMLElement>("[style*='/attached_assets/']").forEach((element) => {
    const current = element.style.backgroundImage;
    if (current) {
      element.style.backgroundImage = rewriteAttachedAssetBackground(current);
    }
  });

  document
    .querySelectorAll<HTMLMetaElement>("meta[content^='/attached_assets/']")
    .forEach((meta) => {
      const original = meta.getAttribute("content");
      if (!original) return;
      meta.setAttribute("content", resolveAssetPath(original));
    });
};
