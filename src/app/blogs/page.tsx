import Blogs from "../_components/blogs/Blogs";
import { createPageMetadata } from "../_components/pageMetadata";

export const metadata = createPageMetadata({
  title: "Medical Exam Preparation Blogs & Advice | PLABcoach",
  description:
    "Explore expert guidance, exam tips and practical insights to support your PLAB, UKMLA and medical exam preparation journey.",
  canonicalPath: "/blogs",
  image: "/blogs_hero_sec_image.webp",
  imageAlt: "Doctors discussing medical learning material",
});

export default function BlogsPage() {
  return <Blogs />;
}
