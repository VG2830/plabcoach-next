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
  const readingMinutes = Math.max(
    1,
    Math.ceil(toPlainText(toDisplayContent(post.content.rendered)).split(/\s+/).length / 220),
  );

  return (
    <div className="min-h-screen bg-white text-[var(--blogs-heading)]">
      <Header />
      <main className="bg-[#f7f8fc] pb-16 sm:pb-24">
        <section className="relative overflow-hidden bg-[var(--blogs-hero-bg)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-44 h-[480px] w-[480px] rounded-full bg-white/50 blur-3xl"
          />
          <div className="relative mx-auto w-[var(--site-width)] max-w-[var(--container-max)] pb-16 pt-8 sm:pb-24 sm:pt-12">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-full border border-[#dce2f5] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--blogs-primary)] shadow-sm transition-colors hover:bg-white"
            >
              <span aria-hidden="true">←</span>
              All articles
            </Link>

            <div className="mt-12 sm:mt-16">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--blogs-label)] sm:text-sm">
                PLABcoach journal
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[var(--blogs-heading)] sm:text-4xl md:text-5xl">
                {toPlainText(post.title.rendered)}
              </h1>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[var(--blogs-muted)]">
                <span className="inline-flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#dceaff] text-sm font-bold text-[var(--blogs-primary)]">
                    {(post._embedded?.author?.[0]?.name ?? "Plabcoach")
                      .slice(0, 1)
                      .toUpperCase()}
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9298a8]">
                      Written by
                    </span>
                    <span className="mt-0.5 block font-semibold text-[var(--blogs-heading)]">
                      {post._embedded?.author?.[0]?.name ?? "Plabcoach"}
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="hidden h-8 w-px bg-[#d9deec] sm:block" />
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9298a8]">
                    Published
                  </span>
                  <span className="mt-0.5 block font-medium text-[var(--blogs-heading)]">
                    {date}
                  </span>
                </span>
                <span aria-hidden="true" className="hidden h-8 w-px bg-[#d9deec] sm:block" />
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9298a8]">
                    Reading time
                  </span>
                  <span className="mt-0.5 block font-medium text-[var(--blogs-heading)]">
                    {readingMinutes} min read
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="relative mx-auto -mt-7 w-[var(--site-width)] max-w-[var(--container-max)] sm:-mt-10">
          {image && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[var(--blogs-image-bg)] shadow-[0_18px_50px_rgba(23,36,90,0.12)] sm:rounded-3xl">
              <Image
                src={image}
                alt=""
                fill
                priority
                sizes="(max-width: 1480px) 100vw, 1480px"
                className="object-cover"
              />
            </div>
          )}

          <article className="mt-8 w-full rounded-2xl border border-[#e9ebf2] bg-white px-5 py-8 shadow-[0_10px_40px_rgba(23,36,90,0.04)] sm:mt-10 sm:rounded-3xl sm:px-10 sm:py-12 lg:px-14">
            <div
              className={[
                "blog-article-content",
                "text-[16px] leading-[1.85] text-[#51596b] sm:text-[17px]",
                "[&_p]:mb-6",
                "[&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:tracking-[-0.02em] [&_h2]:text-[var(--blogs-heading)] sm:[&_h2]:text-[30px]",
                "[&_h3]:mb-3 [&_h3]:mt-9 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:leading-tight [&_h3]:text-[var(--blogs-heading)] sm:[&_h3]:text-2xl",
                "[&_h4]:mb-3 [&_h4]:mt-7 [&_h4]:text-lg [&_h4]:font-bold [&_h4]:text-[var(--blogs-heading)]",
                "[&_ul]:mb-7 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:marker:text-[var(--blogs-primary)]",
                "[&_ol]:mb-7 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:marker:font-bold [&_ol]:marker:text-[var(--blogs-primary)]",
                "[&_li]:pl-1",
                "[&_a]:font-semibold [&_a]:text-[var(--blogs-primary)] [&_a]:underline [&_a]:decoration-[#b7d8f3] [&_a]:underline-offset-4 hover:[&_a]:decoration-[var(--blogs-primary)]",
                "[&_strong]:font-bold [&_strong]:text-[#303b58]",
                "[&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--blogs-primary)] [&_blockquote]:bg-[#f3f7ff] [&_blockquote]:px-6 [&_blockquote]:py-4 [&_blockquote]:text-lg [&_blockquote]:font-medium [&_blockquote]:text-[var(--blogs-heading)]",
                "[&_img]:my-8 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-2xl",
                "[&_figure]:my-8 [&_figcaption]:mt-2 [&_figcaption]:text-center [&_figcaption]:text-sm [&_figcaption]:text-[#858b9b]",
                "[&_table]:my-8 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-[#e4e8f0] [&_td]:p-3 [&_th]:border [&_th]:border-[#e4e8f0] [&_th]:bg-[#f3f7ff] [&_th]:p-3 [&_th]:text-left [&_th]:font-bold [&_th]:text-[var(--blogs-heading)]",
                "[&_hr]:my-10 [&_hr]:border-[#e7eaf1]",
              ].join(" ")}
              dangerouslySetInnerHTML={{
                __html: toDisplayContent(post.content.rendered),
              }}
            />

            <div className="mt-12 border-t border-[#e9ebf2] pt-7">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--blogs-primary)] transition-colors hover:text-[var(--blogs-heading)]"
              >
                <span aria-hidden="true">←</span>
                Back to all articles
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
