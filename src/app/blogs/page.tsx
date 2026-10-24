import Blogs from "../_components/blogs/Blogs";
import { createPageMetadata } from "../_components/pageMetadata";
import { getWordPressPosts, toPlainText } from "../_lib/wordpress";

export const metadata = createPageMetadata({
  title: "Medical Exam Preparation Blogs & Advice | PLABcoach",
  description:
    "Explore expert guidance, exam tips and practical insights to support your PLAB, UKMLA and medical exam preparation journey.",
  canonicalPath: "/blogs",
  image: "/blogs_hero_sec_image.webp",
  imageAlt: "Doctors discussing medical learning material",
});

export default async function BlogsPage() {
  const posts = await getWordPressPosts();

  const formattedPosts = posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: toPlainText(post.title.rendered),
    excerpt: toPlainText(post.excerpt.rendered),
    date: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(post.date)),
    author: post._embedded?.author?.[0]?.name ?? "Plabcoach",
    image:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
      "/blogs_featured_image.webp",
    href: `/blogs/${encodeURIComponent(post.slug)}`,
  }));

  return <Blogs posts={formattedPosts} />;
}
