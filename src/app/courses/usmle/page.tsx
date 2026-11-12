import { JsonLd, createBreadcrumbSchema } from "../../_components/seo/JsonLd";
export default function USMLEPage() {
  return <>
    <JsonLd data={createBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Courses", path: "/courses" }, { name: "USMLE", path: "/courses/usmle" }])} />
    <div>
      <h1>USMLE Course</h1>
      <p>This is the USMLE course page.</p>
    </div>
  </>;
}