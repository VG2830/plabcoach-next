import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Footer from "../../_components/Footer";
import Header from "../../_components/Header";
import {
  getWordPressPostBySlug,
  toDisplayContent,
  toPlainText,
} from "../../_lib/wordpress";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getWordPressPostBySlug(slug);

  if (!post) {
    return { title: "Blog post not found | PLABcoach" };
  }

  const title = toPlainText(post.title.rendered);
  const description = toPlainText(post.excerpt.rendered);

  return {
    title: `${title} | PLABcoach`,
    description,
    alternates: { canonical: `/blogs/${encodeURIComponent(post.slug)}` },
    openGraph: {
      type: "article",
      title,
      description,
      images: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        ? [post._embedded["wp:featuredmedia"][0].source_url]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getWordPressPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.date));

  return (
    <div className="min-h-screen bg-white text-[var(--blogs-heading)]">
      <Header />
      <main className="mx-auto w-[var(--site-width)] max-w-[900px] py-12 sm:py-16">
        <Link
          href="/blogs"
          className="inline-flex items-center text-sm font-semibold text-[var(--blogs-primary)] hover:underline"
        >
          &larr; Back to blogs
        </Link>

        <article className="mt-8">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            {toPlainText(post.title.rendered)}
          </h1>
          <p className="mt-4 text-sm text-[var(--blogs-muted)]">
            {date} <span aria-hidden="true">·</span>{" "}
            {post._embedded?.author?.[0]?.name ?? "Plabcoach"}
          </p>

          {image && (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[22px] bg-[var(--blogs-image-bg)]">
              <Image
                src={image}
                alt=""
                fill
                priority
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          )}

          <div
            className="prose prose-lg mt-8 max-w-none prose-headings:text-[var(--blogs-heading)] prose-a:text-[var(--blogs-primary)] prose-img:rounded-xl"
            dangerouslySetInnerHTML={{
              __html: toDisplayContent(post.content.rendered),
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
