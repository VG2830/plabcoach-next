import type { CourseDetailData } from "../course-detail/courseData";

// export const PLABCOACH_SITE_URL = "https://plabcoach.com";
export const PLABCOACH_SITE_URL = "https://plabcoach.cogniq.in";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization"],
  "@id": `${PLABCOACH_SITE_URL}/#organization`,
  name: "PLABcoach",
  url: `${PLABCOACH_SITE_URL}/`,
  logo: `${PLABCOACH_SITE_URL}/new_plabcoach.webp`,
  email: "support@plabcoach.com",
  telephone: "+44 7712 222818",
  address: { "@type": "PostalAddress", streetAddress: "9 The Pavilions, Cranmore Drive", addressLocality: "Shirley", postalCode: "B90 4SB", addressCountry: "GB" },
  founder: { "@id": `${PLABCOACH_SITE_URL}/about-us/#karam-singh` },
  sameAs: ["https://www.facebook.com/plabcoach1", "https://www.instagram.com/plab.coach/", "https://www.youtube.com/@plab_coach", "https://apps.apple.com/us/app/plabcoach/id6740922681", "https://play.google.com/store/apps/details?id=com.edmingle.plabcoach"],
};

export const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", "@id": `${PLABCOACH_SITE_URL}/#website`,
  name: "PLABcoach", url: `${PLABCOACH_SITE_URL}/`, publisher: { "@id": `${PLABCOACH_SITE_URL}/#organization` },
};

export const personSchema = {
  "@context": "https://schema.org", "@type": "Person", "@id": `${PLABCOACH_SITE_URL}/about-us/#karam-singh`,
  name: "Karam Singh", honorificPrefix: "Dr", honorificSuffix: "M.D., MRCGP", jobTitle: "Founder of PLABcoach and NHS GP",
  worksFor: { "@id": `${PLABCOACH_SITE_URL}/#organization` }, url: `${PLABCOACH_SITE_URL}/about-us/`,
};

export function createBreadcrumbSchema(items: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${PLABCOACH_SITE_URL}${item.path}` })) };
}

export function createCourseSchemas(course: CourseDetailData, routePath: string) {
  const url = `${PLABCOACH_SITE_URL}${routePath}`;
  const courseSchema = {
    "@context": "https://schema.org", "@type": "Course", name: `${course.eyebrow.replace(/\n/g, " ")} Course`,
    description: course.metaDescription, url,
    provider: { "@type": "Organization", name: "PLABcoach", sameAs: `${PLABCOACH_SITE_URL}/` },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: ["Online", "Onsite"], instructor: { "@id": `${PLABCOACH_SITE_URL}/about-us/#karam-singh` } },
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: course.faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: typeof faq.answer === "string" ? faq.answer : `${faq.answer.beforeLink}${faq.answer.linkText}${faq.answer.afterLink ?? ""}` } })) };
  const breadcrumb = createBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Courses", path: "/courses" }, { name: course.eyebrow.replace(/\n/g, " "), path: routePath }]);
  return [courseSchema, faqSchema, breadcrumb];
}

export function createBlogPostingSchema(input: { title: string; description: string; url: string; image?: string; datePublished: string; authorName: string }) {
  return {
    "@context": "https://schema.org", "@type": "BlogPosting", headline: input.title, description: input.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url }, datePublished: input.datePublished,
    author: { "@type": input.authorName.toLowerCase() === "plabcoach" ? "Organization" : "Person", name: input.authorName },
    publisher: { "@id": `${PLABCOACH_SITE_URL}/#organization` },
    ...(input.image ? { image: [input.image] } : {}),
  };
}
