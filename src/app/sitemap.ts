import type { MetadataRoute } from "next";
import { getWordPressPostsForSitemap } from "./_lib/wordpress";

const siteUrl = "https://plabcoach.com";
const redirectingBlogSlugs = new Set([
  "osce-pitfalls-30-mistakes-to-avoid-2",
  "osce-pitfalls-30-mistakes-to-avoid-3",
]);

const staticPaths = [
  "/",
  "/about-us/",
  "/blogs/",
  "/contact-us/",
  "/cookie-policy/",
  "/course-plan/",
  "/courses/",
  "/courses/amc/",
  "/courses/usmle/",
  "/drappraisals/",
  "/important-exam-dates/",
  "/ireland-courses/",
  "/mrcgp-akt-preparation/",
  "/msra-preparation/",
  "/national-clinical-assessment-nca-subscription-plans/",
  "/no-refund-policy/",
  "/plab1-ukmla-akt-subscription-plans/",
  "/plab2-ukmla-cpsa-subscription/",
  "/pres-3-osce-data-interpretation-subscription-plans/",
  "/pres-level-2-subscription-plans/",
  "/prescribing-safety-assessment-psa-subscription/",
  "/privacy-policy/",
  "/terms-and-conditions/",
  "/testimonials/",
  "/uk-foundation-programme-courses/",
  "/uk-plab-ukmla-courses/",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticLastModified = new Date();
  const staticPathSet = new Set(staticPaths);
  const posts = await getWordPressPostsForSitemap();

  return [
    ...staticPaths.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: staticLastModified,
    })),
    ...posts
      .filter(
        (post) =>
          !redirectingBlogSlugs.has(post.slug) &&
          !staticPathSet.has(`/${post.slug}/`),
      )
      .map((post) => ({
        url: `${siteUrl}/${encodeURIComponent(post.slug)}/`,
        lastModified: new Date(post.modified),
      })),
  ];
}
