import type { Metadata } from "next";
import CourseDetail from "../_components/course-detail/CourseDetail";
import { courseDetails } from "../_components/course-detail/courseData";
import { createCourseMetadata } from "../_components/course-detail/courseMetadata";
import CourseStructuredData from "../_components/seo/CourseStructuredData";

export const metadata: Metadata = createCourseMetadata(
  courseDetails["plab-2-ukmla"],
  "/plab2-ukmla-cpsa-subscription/",
);

export default function Plab2UkmlaPage() {
  return (
    <>
      <CourseStructuredData
        course={courseDetails["plab-2-ukmla"]}
        routePath="/plab2-ukmla-cpsa-subscription/"
      />
      <CourseDetail course={courseDetails["plab-2-ukmla"]} />
    </>
  );
}
