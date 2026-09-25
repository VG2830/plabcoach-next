import type { Metadata } from "next";
import CourseDetail from "../../_components/course-detail/CourseDetail";
import { courseDetails } from "../../_components/course-detail/courseData";
import { createCourseMetadata } from "../../_components/course-detail/courseMetadata";

export const metadata: Metadata = createCourseMetadata(courseDetails["msra"], "msra");

export default function MedicalStudentRankingAssessmentPage() {
  return <CourseDetail course={courseDetails["msra"]} />;
}
