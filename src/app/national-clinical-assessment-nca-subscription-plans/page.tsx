import type { Metadata } from "next";
import CourseDetail from "../_components/course-detail/CourseDetail";
import { courseDetails } from "../_components/course-detail/courseData";
import { createCourseMetadata } from "../_components/course-detail/courseMetadata";
import CourseStructuredData from "../_components/seo/CourseStructuredData";

export const metadata: Metadata = createCourseMetadata(
  courseDetails["national-clinical-assessment"],
  "/national-clinical-assessment-nca-subscription-plans/",
);

export default function NationalClinicalAssessmentPage() {
  return (
    <>
      <CourseStructuredData
        course={courseDetails["national-clinical-assessment"]}
        routePath="/national-clinical-assessment-nca-subscription-plans/"
      />
      <CourseDetail course={courseDetails["national-clinical-assessment"]} />
    </>
  );
}
