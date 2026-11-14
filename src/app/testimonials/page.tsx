import Image from "next/image";
import Link from "next/link";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import { createPageMetadata } from "../_components/pageMetadata";
import { createBreadcrumbSchema, JsonLd } from "../_components/seo/JsonLd";
import { testimonials } from "../_components/testimonials";

export const metadata = createPageMetadata({
  title: "Student Testimonials | PLABcoach",
  description:
    "Read success stories and feedback from PLABcoach students preparing for PLAB, UKMLA, PRES and the UK Foundation Programme.",
  canonicalPath: "/testimonials/",
  image: "/hero_banner_image.webp",
  imageAlt: "PLABcoach students preparing for medical exams",
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials/" },
        ])}
      />
      <div className="min-h-screen bg-white text-[var(--ink)]">
        <Header />
        <main>
          <section className="relative overflow-hidden bg-[var(--testimonial-bg)] py-16 sm:py-20 lg:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-40 -top-32 h-[440px] w-[440px] rounded-full bg-[#dbeaff]/70 blur-3xl"
            />
            <div className="relative mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)] sm:text-[13px]">
                  What Our Students Say
                </p>
                <h1 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-[var(--ink)] sm:text-4xl lg:text-5xl">
                  Success Stories from Around the World
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--body-muted)] sm:text-base">
                  Hear from doctors who prepared for their medical exams with PLABcoach.
                </p>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
                {testimonials.map((item) => (
                  <article
                    key={item.name}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/80 bg-white p-6 shadow-[0_14px_38px_rgba(32,32,32,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(32,32,32,0.13)] sm:p-7"
                  >
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#dceaff] to-transparent" />
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#eef3ff] ring-2 ring-white">
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </span>
                        <div className="min-w-0">
                          <h2 className="truncate text-sm font-bold text-[var(--ink)] sm:text-base">
                            {item.name}
                          </h2>
                          <p className="mt-1 text-xs font-medium text-[var(--body-muted)]">
                            {item.location}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 text-sm tracking-[1px] text-[#e8bd1a]" aria-hidden="true">
                        ★★★★★
                      </span>
                      <span className="sr-only">5 out of 5 stars</span>
                    </div>

                    <div className="mt-5">
                      <span className="inline-flex rounded-full bg-[#eef4ff] px-3 py-1 text-[11px] font-semibold text-[var(--primary)]">
                        {item.exam}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-1 gap-2">
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-4xl font-black leading-none text-[#9dcfff]"
                      >
                        “
                      </span>
                      <p className="pt-1 text-sm leading-7 text-[#626b7d]">
                        {item.quote}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Link
                  href="/courses/"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-[var(--primary)] px-7 text-sm font-bold text-white transition-[filter,transform] duration-200 hover:-translate-y-0.5 hover:brightness-105"
                >
                  Explore our courses
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}