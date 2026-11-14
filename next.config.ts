import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plabcoach.com",
      },
    ],
  },
  async redirects() {
    return [
      // Old live-site pages
      { source: "/homepage/", destination: "/", permanent: true },
      { source: "/homeeo/", destination: "/", permanent: true },
      { source: "/frontpage/", destination: "/", permanent: true },
      { source: "/newplanpage/", destination: "/courses/", permanent: true },
      { source: "/coursesnewtwo/", destination: "/courses/", permanent: true },
      { source: "/coursesnewupcoming-courses/", destination: "/courses/", permanent: true },
      { source: "/candidate-interest-form-upcoming-courses/", destination: "/courses/", permanent: true },
      { source: "/newplanpage/", destination: "/courses/", permanent: true },
      { source: "/newplanpage2/", destination: "/courses/", permanent: true },
      { source: "/coursesnew/", destination: "/courses/", permanent: true },
      { source: "/upcoming-courses/", destination: "/courses/", permanent: true },
      {
        source: "/coursenewupcoming-courses/",
        destination: "/courses/",
        permanent: true,
      },
      {
        source: "/candidate-interest-form-coming-soon-courses/",
        destination: "/courses/",
        permanent: true,
      },
      {
        source: "/coursesnew-ukmla-ukmla-courses/",
        destination: "/uk-plab-ukmla-courses/",
        permanent: true,
      },
      {
        source: "/coursesnewuk-plab-ukmla-courses/",
        destination: "/uk-plab-ukmla-courses/",
        permanent: true,
      },
      {
        source: "/coursenewireland-courses/",
        destination: "/ireland-courses/",
        permanent: true,
      },
       {
        source: "/coursesnewireland-courses/",
        destination: "/ireland-courses/",
        permanent: true,
      },
      {
        source: "/coursenew-ukfoundation-programme-courses/",
        destination: "/uk-foundation-programme-courses/",
        permanent: true,
      },
      {
        source: "/coursesnewuk-foundation-programme/",
        destination: "/uk-foundation-programme-courses/",
        permanent: true,
      },
      {
        source: "/plab2-ukmla-cpsa-subscription-plan2/",
        destination: "/plab2-ukmla-cpsa-subscription/",
        permanent: true,
      },
      {
        source: "/plab-2-comprehensive-course/",
        destination: "/plab2-ukmla-cpsa-subscription/",
        permanent: true,
      },
       {
        source: "/birmingham/",
        destination: "/plab2-ukmla-cpsa-subscription/",
        permanent: true,
      },
      {
        source: "/smartqbank-demo/",
        destination: "/course-plan?course=plab-1-ukmla-akt",
        permanent: true,
      },
      {
        source: "/smartqbank2/",
        destination: "/course-plan?course=plab-1-ukmla-akt",
        permanent: true,
      },
      {
        source: "/smartqbank-pres2-new/",
        destination: "/course-plan?course=pres-2",
        permanent: true,
      },
      {
        source: "/smartqbank/",
        destination: "/course-plan?course=plab-1-ukmla-akt",
        permanent: true,
      },
      {
        source: "/smartqbank-pres2/",
        destination: "/course-plan?course=pres-2",
        permanent: true,
      },
      {
        source: "/pres-3-osce-data-interpretation-subscription-plans-2-new/",
        destination: "/pres-3-osce-data-interpretation-subscription-plans/",
        permanent: true,
      },
      {
        source: "/national-clinical-assessment-nca-subscription-plans-new/",
        destination: "/national-clinical-assessment-nca-subscription-plans/",
        permanent: true,
      },
      {
        source: "/prescribing-safety-assessment-psa-subscription-plans-new/",
        destination: "/prescribing-safety-assessment-psa-subscription/",
        permanent: true,
      },
       {
        source: "/prescribing-safety-assessment-psa-subscription-plan-new/",
        destination: "/prescribing-safety-assessment-psa-subscription/",
        permanent: true,
      },
      {
        source: "/important-exam-dates-2/",
        destination: "/important-exam-dates/",
        permanent: true,
      },
      {
        source: "/upcoming-events/",
        destination: "/important-exam-dates/",
        permanent: true,
      },
      {
        source: "/speaking-events/",
        destination: "/important-exam-dates/",
        permanent: true,
      },
      { source: "/about-us-final/", destination: "/about-us/", permanent: true },
      { source: "/newcontactus/", destination: "/contact-us/", permanent: true },
      {
        source: "/one-on-one-mentoring-form/",
        destination: "/contact-us/",
        permanent: true,
      },
      {
        source: "/candidate-interest-form/",
        destination: "/contact-us/",
        permanent: true,
      },
      {
        source: "/birminham/",
        destination: "/plab2-ukmla-cpsa-subscription/",
        permanent: true,
      },
      { source: "/new-delhi/", destination: "/", permanent: true },
      { source: "/sponsorship-scheme/", destination: "/", permanent: true },
      {
        source: "/osce-pitfalls-30-mistakes-to-avoid-2/",
        destination: "/osce-pitfalls-30-mistakes-to-avoid/",
        permanent: true,
      },
      {
        source: "/osce-pitfalls-30-mistakes-to-avoid-3/",
        destination: "/osce-pitfalls-30-mistakes-to-avoid/",
        permanent: true,
      },
      { source: "/category/:path*", destination: "/blogs/", permanent: true },
      { source: "/tag/:path*", destination: "/blogs/", permanent: true },
      { source: "/author/:path*", destination: "/blogs/", permanent: true },
      {
        source: "/testimonial/:path*",
        destination: "/testimonials/",
        permanent: true,
      },
      {
        source: "/testimonials/",
        destination: "/",
        permanent: true,
      },
      // Old staging addresses
      {
        source: "/courses/plab-1-ukmla-akt/",
        destination: "/plab1-ukmla-akt-subscription-plans/",
        permanent: true,
      },
      {
        source: "/courses/plab-2-ukmla-cpsa/",
        destination: "/plab2-ukmla-cpsa-subscription/",
        permanent: true,
      },
      {
        source: "/courses/pres-2/",
        destination: "/pres-level-2-subscription-plans/",
        permanent: true,
      },
      {
        source: "/courses/pres-3/",
        destination: "/pres-3-osce-data-interpretation-subscription-plans/",
        permanent: true,
      },
      {
        source: "/courses/ukfpo-nca/",
        destination: "/national-clinical-assessment-nca-subscription-plans/",
        permanent: true,
      },
      {
        source: "/courses/ukfpo-psa/",
        destination: "/prescribing-safety-assessment-psa-subscription/",
        permanent: true,
      },
      {
        source: "/courses/mrcp-akt/",
        destination: "/mrcgp-akt-preparation/",
        permanent: true,
      },
      {
        source: "/courses/msra/",
        destination: "/msra-preparation/",
        permanent: true,
      },
      {
        source: "/blogs/:slug",
        destination: "/:slug/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
