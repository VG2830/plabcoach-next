import type { CourseDetailData } from "../course-detail/courseData";
import { createCourseSchemas, JsonLd } from "./JsonLd";

export default function CourseStructuredData({ course, routePath }: { course: CourseDetailData; routePath: string }) {
  return <>{createCourseSchemas(course, routePath).map((schema, index) => <JsonLd key={`${course.slug}-${index}`} data={schema} />)}</>;
}
