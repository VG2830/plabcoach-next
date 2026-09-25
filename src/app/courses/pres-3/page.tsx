import type { Metadata } from "next";
import CourseDetail from "../../_components/course-detail/CourseDetail";
import { courseDetails } from "../../_components/course-detail/courseData";
import { createCourseMetadata } from "../../_components/course-detail/courseMetadata";

export const metadata: Metadata = createCourseMetadata(courseDetails["pres-3-osce"], "pres-3");

export default function Pres3OscePage() {
  return <CourseDetail course={courseDetails["pres-3-osce"]} />;
}
