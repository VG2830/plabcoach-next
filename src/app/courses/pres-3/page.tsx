import type { Metadata } from "next";
import CourseDetail from "../../_components/course-detail/CourseDetail";
import { courseDetails } from "../../_components/course-detail/courseData";
import { createCourseMetadata } from "../../_components/course-detail/courseMetadata";
import CourseStructuredData from "../../_components/seo/CourseStructuredData";

export const metadata: Metadata = createCourseMetadata(courseDetails["pres-3-osce"], "pres-3");

export default function Pres3OscePage() {
  return (
    <>
      <CourseStructuredData course={courseDetails["pres-3-osce"]} routePath="/courses/pres-3" />
      <CourseDetail course={courseDetails["pres-3-osce"]} />
    </>
  );
}
