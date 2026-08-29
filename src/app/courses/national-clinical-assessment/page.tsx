import CourseDetail from "../../_components/course-detail/CourseDetail";
import { courseDetails } from "../../_components/course-detail/courseData";

export default function NationalClinicalAssessmentPage() {
  return <CourseDetail course={courseDetails["national-clinical-assessment"]} />;
}
