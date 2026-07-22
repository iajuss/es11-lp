export const siteUrl = "https://es11-lp-7sa5.vercel.app";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
