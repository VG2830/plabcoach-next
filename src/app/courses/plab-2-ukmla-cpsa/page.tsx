import type { Metadata } from "next";
import CourseDetail from "../../_components/course-detail/CourseDetail";
import { courseDetails } from "../../_components/course-detail/courseData";
import { createCourseMetadata } from "../../_components/course-detail/courseMetadata";

export const metadata: Metadata = createCourseMetadata(courseDetails["plab-2-ukmla"], "plab-2-ukmla-cpsa");

export default function Plab2UkmlaPage() {
  return <CourseDetail course={courseDetails["plab-2-ukmla"]} />;
}
