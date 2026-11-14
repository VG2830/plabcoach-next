import Courses from "../_components/courses/Courses";
import { JsonLd, createBreadcrumbSchema } from "../_components/seo/JsonLd";
import { createPageMetadata } from "../_components/pageMetadata";

export const metadata = createPageMetadata({
  title: "UK & Ireland Medical Exam Courses | PLABcoach",
  description: "Explore our comprehensive range of medical exam preparation courses designed to help you succeed.",
  canonicalPath: "/courses/",
  image: "/hero_banner_image.webp",
  imageAlt: "PLABcoach medical exam preparation",
});

export default function CoursesPage() { return <><JsonLd data={createBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Courses", path: "/courses" }])} /><Courses /></>; }
