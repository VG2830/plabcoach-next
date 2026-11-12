
import Homepage from "./_components/Home";
import { createPageMetadata } from "./_components/pageMetadata";
import { getRecentWordPressPosts } from "./_lib/wordpress";
import homeFaqSchema from "./_components/homeFaqSchema";
import { JsonLd, websiteSchema } from "./_components/seo/JsonLd";
export const metadata = createPageMetadata({
  title: "PLAB, UKMLA & Medical Exam Preparation | PLABcoach",
  description:
    "Prepare for PLAB, UKMLA, PRES and UK Foundation Programme exams with expert-led courses, question banks and mock exams for international medical graduates.",
  canonicalPath: "/",
  image: "/hero_banner_image.webp",
  imageAlt: "Doctors preparing for medical exams with PLABcoach",
});

export default async function Home() {
  const blogPosts = await getRecentWordPressPosts();

  return (
     <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={homeFaqSchema} />
      <Homepage blogPosts={blogPosts} />
    </>
  );
}
