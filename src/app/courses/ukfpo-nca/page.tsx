import type { Metadata } from "next";
import CourseDetail from "../../_components/course-detail/CourseDetail";
import { courseDetails } from "../../_components/course-detail/courseData";
import { createCourseMetadata } from "../../_components/course-detail/courseMetadata";

export const metadata: Metadata = createCourseMetadata(courseDetails["national-clinical-assessment"], "ukfpo-nca");

export default function NationalClinicalAssessmentPage() {
  return <CourseDetail course={courseDetails["national-clinical-assessment"]} />;
}
