import CourseDetail from "../../_components/course-detail/CourseDetail";
import { courseDetails } from "../../_components/course-detail/courseData";

export default function PrescribingSafetyAssessmentPage() {
  return <CourseDetail course={courseDetails["prescribing-safety-assessment"]} />;
}
