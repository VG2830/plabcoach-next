import type { Metadata } from "next";
import CourseDetail from "../../_components/course-detail/CourseDetail";
import { courseDetails } from "../../_components/course-detail/courseData";
import { createCourseMetadata } from "../../_components/course-detail/courseMetadata";
import CourseStructuredData from "../../_components/seo/CourseStructuredData";

export const metadata: Metadata = createCourseMetadata(courseDetails["prescribing-safety-assessment"], "ukfpo-psa");

export default function PrescribingSafetyAssessmentPage() {
  return (
    <>
      <CourseStructuredData course={courseDetails["prescribing-safety-assessment"]} routePath="/courses/ukfpo-psa" />
      <CourseDetail course={courseDetails["prescribing-safety-assessment"]} />
    </>
  );
}
