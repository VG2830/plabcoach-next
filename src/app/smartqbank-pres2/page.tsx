import type { Metadata } from "next";
import CourseDetail from "../_components/course-detail/CourseDetail";
import { courseDetails } from "../_components/course-detail/courseData";
import { createCourseMetadata } from "../_components/course-detail/courseMetadata";
import CourseStructuredData from "../_components/seo/CourseStructuredData";

export const metadata: Metadata = createCourseMetadata(
  courseDetails["pres-2"],
  "/pres-level-2-subscription-plans/",
);

export default function PresLevel2Page() {
  return (
    <>
      <CourseStructuredData
        course={courseDetails["pres-2"]}
        routePath="/pres-level-2-subscription-plans/"
      />
      <CourseDetail course={courseDetails["pres-2"]} />
    </>
  );
}
