import type { Metadata } from "next";
import type { CourseDetailData } from "./courseData";

// const siteUrl = "https://plabcoach.com";
const siteUrl = "https://plabcoach-next.vercel.app";


export function createCourseMetadata(course: CourseDetailData, routePath: string): Metadata {
  const canonicalPath = `/courses/${routePath}`;

  return {
    title: course.metaTitle,
    description: course.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      url: `${siteUrl}${canonicalPath}`,
      title: course.metaTitle,
      description: course.metaDescription,
      images: [
        {
          url: course.ogImage,
          width: 1200,
          height: 628,
          alt: `${course.eyebrow} preparation by PLABcoach`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: course.metaTitle,
      description: course.metaDescription,
      images: [course.ogImage],
    },
  };
}