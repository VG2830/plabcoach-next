import CourseDetail from "../../_components/course-detail/CourseDetail";
import { courseDetails } from "../../_components/course-detail/courseData";

export default function MedicalStudentRankingAssessmentPage() {
  return <CourseDetail course={courseDetails["msra"]} />;
}
