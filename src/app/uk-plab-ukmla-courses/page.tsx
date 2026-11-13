import { CourseGroupPage, ukCourses } from "../_components/courses/Courses";
import { createPageMetadata } from "../_components/pageMetadata";

export const metadata = createPageMetadata({
  title: "UK PLAB / UKMLA Courses | PLABcoach",
  description:
    "Explore PLAB 1 and PLAB 2 preparation courses for UK medical registration.",
  canonicalPath: "/uk-plab-ukmla-courses/",
  image: "/courses_plab1.webp",
  imageAlt: "PLAB and UKMLA course preparation",
});

export default function UkPlabUkmlaCoursesPage() {
  return (
    <CourseGroupPage
      id="uk-plab-ukmla"
      title="UK PLAB / UKMLA Courses"
      description="Prepare for the knowledge and clinical assessments required to begin your medical career in the UK. The UKMLA assesses the core knowledge, skills and behaviours required for safe and effective medical practice."
      courses={ukCourses}
      decoration="left"
    />
  );
}
