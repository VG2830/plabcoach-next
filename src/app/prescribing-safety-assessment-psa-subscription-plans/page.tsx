import type { Metadata } from "next";
import CourseDetail from "../_components/course-detail/CourseDetail";
import { courseDetails } from "../_components/course-detail/courseData";
import { createCourseMetadata } from "../_components/course-detail/courseMetadata";
import CourseStructuredData from "../_components/seo/CourseStructuredData";

export const metadata: Metadata = createCourseMetadata(
  courseDetails["prescribing-safety-assessment"],
  "/prescribing-safety-assessment-psa-subscription-plans/",
);

export default function PrescribingSafetyAssessmentPage() {
  return (
    <>
      <CourseStructuredData
        course={courseDetails["prescribing-safety-assessment"]}
        routePath="/prescribing-safety-assessment-psa-subscription-plans/"
      />
      <CourseDetail course={courseDetails["prescribing-safety-assessment"]} />
    </>
  );
}
