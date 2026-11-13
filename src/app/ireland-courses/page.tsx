import { CourseGroupPage, irelandCourses } from "../_components/courses/Courses";
import { createPageMetadata } from "../_components/pageMetadata";

export const metadata = createPageMetadata({
  title: "Ireland PRES Courses | PLABcoach",
  description:
    "Explore PRES 2 and PRES 3 preparation courses for medical registration in Ireland.",
  canonicalPath: "/ireland-courses/",
  image: "/courses_pres2.webp",
  imageAlt: "Ireland PRES course preparation",
});

export default function IrelandCoursesPage() {
  return (
    <CourseGroupPage
      id="ireland-courses"
      title="Ireland Courses"
      description="Focused preparation for doctors preparing for the Pre-Registration Examination System in Ireland."
      courses={irelandCourses}
      decoration="right"
    />
  );
}
