import Courses from "../_components/courses/Courses";
import { JsonLd, createBreadcrumbSchema } from "../_components/seo/JsonLd";
export default function CoursesPage() { return <><JsonLd data={createBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Courses", path: "/courses" }])} /><Courses /></>; }
