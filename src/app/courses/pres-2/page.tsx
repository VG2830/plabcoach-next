import type { Metadata } from "next";
import CourseDetail from "../../_components/course-detail/CourseDetail";
import { courseDetails } from "../../_components/course-detail/courseData";
import { createCourseMetadata } from "../../_components/course-detail/courseMetadata";

export const metadata: Metadata = createCourseMetadata(courseDetails["pres-2"], "pres-2");

export default function PresLevel2Page() {
  return <CourseDetail course={courseDetails["pres-2"]} />;
}
