import { CourseGroupPage, foundationCourses } from "../_components/courses/Courses";
import { createPageMetadata } from "../_components/pageMetadata";

export const metadata = createPageMetadata({
  title: "UK Foundation Programme Courses | PLABcoach",
  description:
    "Explore preparation courses for the National Clinical Assessment and Prescribing Safety Assessment.",
  canonicalPath: "/uk-foundation-programme-courses/",
  image: "/courses_nca.webp",
  imageAlt: "UK Foundation Programme course preparation",
});

export default function UkFoundationProgrammeCoursesPage() {
  return (
    <CourseGroupPage
      id="uk-foundation"
      title="UK Foundation Programme Courses"
      description="The UK Foundation Programme is a two-year structured training programme for newly qualified doctors in the UK."
      courses={foundationCourses}
      decoration="left-large"
    />
  );
}
