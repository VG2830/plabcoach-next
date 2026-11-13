import type { MetadataRoute } from "next";

const productionUrl = "https://plabcoach.com";
// const productionUrl = "https://plabcoach.cogniq.in";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
const isProduction = configuredSiteUrl === productionUrl;

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${productionUrl}/sitemap.xml` };
}
