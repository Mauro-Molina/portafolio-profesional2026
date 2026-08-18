/**
 * Prefix static asset URLs that Next.js does NOT rewrite with basePath.
 * next/image with `unoptimized` and raw <a href> need this.
 * Absolute https Open Graph URLs should use siteConfig.url instead.
 *
 * GitHub Actions sets NEXT_PUBLIC_BASE_PATH from the Pages URL:
 * empty for user sites (username.github.io), "/repo" for project Pages.
 */
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(
  /\/$/,
  "",
);

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
