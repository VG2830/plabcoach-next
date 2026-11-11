import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function PolicyPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[var(--ink)]">
      <Header />
      <main className="mx-auto min-h-[50vh] w-[var(--site-width)] max-w-[var(--container-max)] px-4 py-12 sm:py-16 lg:px-0">
        <article className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-[#dfeaf8] bg-white shadow-[0_18px_45px_rgba(23,96,166,0.08)]">
          <header className="border-b border-[#dfeaf8] bg-gradient-to-br from-[#eaf3ff] via-white to-[#f6f9fd] px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <h1 className="text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-[var(--body-muted)]">
              Last updated: 11 November 2026
            </p>
          </header>
          <div
            className={[
              "space-y-8 px-6 py-8 text-base leading-7 text-[var(--body-muted)] sm:px-10 sm:py-10 lg:px-14",
              "[&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:text-[var(--ink)] sm:[&_h2]:text-2xl",
              "[&_p]:mt-3",
              "[&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
              "[&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
              "[&_a]:font-semibold [&_a]:text-[var(--primary)] [&_a]:underline [&_a]:underline-offset-4",
              "[&_strong]:font-semibold [&_strong]:text-[var(--ink)]",
              "[&_th]:bg-[#edf4fc] [&_th]:font-semibold [&_th]:text-[var(--ink)]",
              "[&_td]:text-left",
            ].join(" ")}
          >
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
