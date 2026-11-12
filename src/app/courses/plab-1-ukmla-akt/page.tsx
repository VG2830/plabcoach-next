import type { Metadata } from "next";
import CourseDetail from "../../_components/course-detail/CourseDetail";
import { courseDetails } from "../../_components/course-detail/courseData";
import { createCourseMetadata } from "../../_components/course-detail/courseMetadata";
import CourseStructuredData from "../../_components/seo/CourseStructuredData";

export const metadata: Metadata = createCourseMetadata(courseDetails["plab-1-ukmla-akt"], "plab-1-ukmla-akt");

export default function Plab1UkmlaPage() {
  return (
    <>
      <CourseStructuredData course={courseDetails["plab-1-ukmla-akt"]} routePath="/courses/plab-1-ukmla-akt" />
      <CourseDetail course={courseDetails["plab-1-ukmla-akt"]} />
    </>
  );
}
