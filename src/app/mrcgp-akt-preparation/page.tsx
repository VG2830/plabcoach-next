import type { Metadata } from "next";
import CourseDetail from "../_components/course-detail/CourseDetail";
import { courseDetails } from "../_components/course-detail/courseData";
import { createCourseMetadata } from "../_components/course-detail/courseMetadata";
import CourseStructuredData from "../_components/seo/CourseStructuredData";

export const metadata: Metadata = createCourseMetadata(
  courseDetails["mrcp-akt"],
  "/mrcgp-akt-preparation/",
);

export default function StudentRankingAssessmentPage() {
  return (
    <>
      <CourseStructuredData
        course={courseDetails["mrcp-akt"]}
        routePath="/mrcgp-akt-preparation/"
      />
      <CourseDetail course={courseDetails["mrcp-akt"]} />
    </>
  );
}
