import CourseDetail from "../../_components/course-detail/CourseDetail";
import { courseDetails } from "../../_components/course-detail/courseData";

export default function PresLevel2Page() {
  return <CourseDetail course={courseDetails["pres-level-2"]} />;
}
