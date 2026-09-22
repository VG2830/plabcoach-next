import CourseDetail from "../../_components/course-detail/CourseDetail";
import { courseDetails } from "../../_components/course-detail/courseData";

export default function StudentRankingAssessmentPage() {
  return <CourseDetail course={courseDetails["mrcp-akt"]} />;
}
