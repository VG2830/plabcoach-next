import type { Metadata } from "next";
import CoursePlanPage from "./_components/CoursePlanPage";
import { coursePlanCatalog, defaultCoursePlan } from "./_data/coursePlanData";
import { JsonLd, createBreadcrumbSchema } from "../_components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Course Plans | PLABCoach",
  description: "Choose the PLABCoach plan that best fits your exam preparation needs.",
};

type CoursePlanRouteProps = {
  searchParams?: Promise<{
    course?: string | string[];
    selectedPlan?: string | string[];
  }>;
};

export default async function CoursePlanRoute({ searchParams }: CoursePlanRouteProps) {
  const params = searchParams ? await searchParams : {};
  const rawCourse = Array.isArray(params.course) ? params.course[0] : params.course;
  const requestedCourse = rawCourse?.trim() || defaultCoursePlan.slug;
  const courseKey = requestedCourse.toLowerCase();
  const configuredPlan = coursePlanCatalog[courseKey] ?? defaultCoursePlan;

  // Keep the incoming course slug intact so every enrol action carries the
  // originating course context forward to the future checkout flow.
  const data = { ...configuredPlan, slug: requestedCourse };

  return <><JsonLd data={createBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Course Plans", path: "/course-plan" }])} /><CoursePlanPage data={data} /></>;
}
