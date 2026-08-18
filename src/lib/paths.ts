/**
 * Prefix static asset URLs that Next.js does NOT rewrite with basePath.
 * next/image with `unoptimized` and raw <a href> need this.
 * Absolute https Open Graph URLs should use siteConfig.url instead.
 *
 * GitLab CI sets NEXT_PUBLIC_BASE_PATH from CI_PAGES_URL:
 * empty for unique/user domains, "/repo" for classic project Pages.
 */
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(
  /\/$/,
  "",
);

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
