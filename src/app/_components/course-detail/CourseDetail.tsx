"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import type { CourseDetailData, PathwayStep, RelatedExam } from "./courseData";


function SubscribeButton({ href, className = "", children }: { href: string; className?: string; children?: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`inline-flex h-[50px] min-w-[186px] items-center justify-center rounded-[10px] bg-[var(--course-detail-primary)] px-[26px] text-[13px] font-bold text-white transition-[filter,transform] duration-200 hover:-translate-y-[1px] hover:brightness-105 ${className}`}
    >
      {children ?? "Subscribe Now"}
    </Link>
  );
}

function FAQAccordionItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-[14px] transition-all duration-200 ${isOpen ? "bg-[var(--course-detail-faq-item-active)] text-white shadow-[0_10px_26px_rgba(12,35,80,0.22)]" : "bg-[var(--course-detail-faq-item-bg)]"}`}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7 sm:py-6"
      >
        <span className={`text-[13px] font-semibold leading-[1.35] sm:text-[14px] ${isOpen ? "text-white" : "text-[var(--course-detail-faq-text)]"}`}>
          {question}
        </span>
        <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full transition-all duration-200 ${isOpen ? "bg-white/10" : "bg-transparent"}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none">
            <path
              d={isOpen ? "M3 9l4-4 4 4" : "M3 5l4 4 4-4"}
              stroke={isOpen ? "#ffffff" : "#5363e8"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className={`px-6 pb-6 sm:px-7 sm:pb-7 ${isOpen ? "text-[#c9d1e4]" : "text-[var(--course-detail-copy)]"}`}>
            <p className="text-[13px] leading-[1.7] sm:text-[14px]">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RelatedExamCard({ exam, index }: { exam: RelatedExam; index: number }) {
  const variantStyles = [
    { card: "bg-[var(--course-detail-related-1-bg)]", tagBg: "bg-[var(--course-detail-related-1-tag-bg)]", tagText: "text-[#09539f]", iconBg: "bg-[var(--course-detail-related-1-icon)]" },
    { card: "bg-[var(--course-detail-related-2-bg)]", tagBg: "bg-[var(--course-detail-related-2-tag-bg)]", tagText: "text-[#5b4dbf]", iconBg: "bg-[var(--course-detail-related-2-icon)]" },
    { card: "bg-[var(--course-detail-related-3-bg)]", tagBg: "bg-[var(--course-detail-related-3-tag-bg)]", tagText: "text-[#1e7e54]", iconBg: "bg-[var(--course-detail-related-3-icon)]" },
  ];
  const style = variantStyles[(index % 3)];
  return (
    <Link href={exam.href} className={`group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-transparent px-6 py-7 transition-all duration-200 hover:-translate-y-[2px] hover:border-black/[0.06] hover:shadow-[0_22px_46px_rgba(23,36,90,0.14)] ${style.card}`}>
      <div className={`mb-5 grid h-[64px] w-[64px] place-items-center rounded-[50%] ${style.iconBg}`}>
        {index === 0 ? (
          
          <Image src="/plab_2_courses_indv_icon.svg" alt="" width={42} height={50} />
        ) : index === 1 ? (
         
          <Image src="/courses_indv_book_icon.svg" alt="" width={42} height={50} />
        ) : (
         
          <Image src="/courses_indv_home_icon.svg" alt="" width={42} height={50} />
        )}
      </div>
      <h3 className="text-[18px] font-bold tracking-[-0.012em] text-[var(--course-detail-heading)] sm:text-[19px]">{exam.title}</h3>
      <p className="mt-2 text-[12.5px] leading-[1.55] text-[var(--course-detail-copy)] sm:text-[13px]">{exam.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {exam.tags.map((t) => (
          <span
            key={t.label}
            className={`inline-flex items-center rounded-full px-3 py-[6px] text-[11.5px] font-semibold ${style.tagBg} ${style.tagText}`}
          >
            {t.label}
          </span>
        ))}
      </div>
      <div className="relative mt-5 min-h-[170px] w-full flex-1">
        <Image src={exam.image} alt="" aria-hidden="true" fill sizes="(max-width: 768px) 100vw, 360px" className="object-contain object-center" />
      </div>
    </Link>
  );
}

function PathwayIcon({ icon }: { icon: PathwayStep["icon"] }) {
  const common = "#0c2350";
  switch (icon) {
    case "eligibility":
      return (
       <Image src="/pathway_1.svg" alt=""  width={34} height={34}></Image>
      );
    case "pass-plab1":
    case "pass-pres2":
    case "pass-pres3":
    case "pass-plab2":
    case "pass-nca":
    case "pass-psa":
      return (
        <Image src="/pathway_2.svg" alt="" width={34} height={34}></Image>
      );
    case "prepare-plab2":
    case "prepare-pres3":
    case "prepare-nca":
    case "prepare-psa":
      return (
        <Image src="/pathway_3.svg" alt="" width={34} height={34}></Image>
      );
    case "apply-registration":
    case "apply-imc":
    case "apply-fp":
      return (
              <Image src="/pathway_4.svg" alt="" width={34} height={34}></Image>
      );
    case "start-career":
      return (
        
        <Image src="/pathway_5.svg" alt="" width={34} height={34}></Image>
      );
    default:
      return (
        // 
        <Image src="/pathway_6.svg" alt="" width={34} height={34}></Image>
      );
  }
}

function PathwayVisual({ steps }: { steps: PathwayStep[] }) {
  const curve = useMemo(() => {
    if (steps.length === 0) return null;
    const width = 1400;
    const height = 520;
    const defaultPts = [
      { x: 150, y: 370 },
      { x: 355, y: 240 },
      { x: 580, y: 345 },
      { x: 790, y: 275 },
      { x: 1005, y: 200 },
      { x: 1220, y: 170 },
    ];
    const n = steps.length;
    const pts = defaultPts.slice(0, n);
    if (n === 0) return null;
    if (n > defaultPts.length) {
      for (let i = defaultPts.length; i < n; i++) {
        const t = i / (n - 1);
        pts.push({ x: 150 + t * (width - 300), y: 260 });
      }
    }
    let d = `M ${pts[0].x - 90} ${pts[0].y + 18}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i];
      const b = pts[i + 1];
      const dx = b.x - a.x;
      const cx1 = a.x + dx * 0.42;
      const cy1 = a.y + (b.y - a.y) * 0.08;
      const cx2 = a.x + dx * 0.58;
      const cy2 = a.y + (b.y - a.y) * 0.92;
      d += ` C ${cx1.toFixed(1)} ${cy1.toFixed(1)}, ${cx2.toFixed(1)} ${cy2.toFixed(1)}, ${b.x} ${b.y}`;
    }
    const last = pts[pts.length - 1];
    d += ` C ${last.x + 40} ${last.y - 18}, ${last.x + 75} ${last.y - 55}, ${last.x + 95} ${last.y - 105}`;
    return { path: d, pts, viewBox: `0 0 ${width} ${height}`, width, height };
  }, [steps]);

  const labelAbove: Record<number, boolean> = { 2: true };

  if (!curve) return null;

  return (
    <div className="relative w-full overflow-hidden">
      <svg
        viewBox={curve.viewBox}
        preserveAspectRatio="xMidYMid meet"
        className="h-auto w-full max-w-[1400px]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pathwayLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#b8c3ff" />
            <stop offset="45%" stopColor="#9aaaff" />
            <stop offset="100%" stopColor="#8396ff" />
          </linearGradient>
          <filter id="pathwayGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d={curve.path}
          fill="none"
          stroke="url(#pathwayLine)"
          strokeWidth="9"
          strokeLinecap="round"
          filter="url(#pathwayGlow)"
          opacity="0.92"
        />
      </svg>

      <ol className="pointer-events-none absolute inset-0">
        {curve.pts.map((pt, i) => {
          const step = steps[i];
          if (!step) return null;
          const leftPct = (pt.x / curve.width) * 100;
          const topPct = (pt.y / curve.height) * 100;
          const above = labelAbove[i] ?? false;
          return (
            <li
              key={step.id}
              className="absolute -translate-x-1/2"
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
              }}
            >
              <div className="pointer-events-auto relative grid place-items-center -translate-y-1/2">
                <span
                  className="absolute h-[92px] w-[92px] rounded-full bg-[#eef0ff]"
                  style={{ opacity: 0.85 }}
                />
                <span
                  className="relative grid h-[82px] w-[82px] place-items-center rounded-full bg-white shadow-[0_14px_36px_rgba(83,99,232,0.22)] ring-[7px] ring-[#e8ecff]"
                >
                  <PathwayIcon icon={step.icon} />
                </span>
                <span
                  className="absolute -top-[14px] -left-[20px] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f1f3ff] text-[20px] font-extrabold tracking-[-0.01em] text-[#17245a]"
                >
                  {step.number}
                </span>
                <div
                  className={`absolute w-[280px] max-w-[42vw] text-center ${
                    above ? "bottom-[108%] mb-[14px]" : "top-[108%] mt-[14px]"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-[14.5px] font-bold leading-[1.3] tracking-[-0.008em] text-[var(--course-detail-heading)] sm:text-[15.5px] md:text-[16px]">
                    {step.label}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function CourseDetail({ course }: { course: CourseDetailData }) {
  const plansHref = course.subscribeHref ?? `/course-plan?course=${encodeURIComponent(course.slug)}`;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTocId, setActiveTocId] = useState<string>(course.toc[0]?.id ?? "");

  const activeTocItem = course.toc.find((t) => t.id === activeTocId) ?? course.toc[0];
  const activeSection =
    course.sections.find((s) => s.id === activeTocId) ?? course.sections[0];

  const subscribeSection = (
    <div className="mt-[34px] flex flex-col gap-[14px] sm:flex-row sm:gap-[20px] lg:mt-[40px]">
      <SubscribeButton href={plansHref} />
      <a
        href="#course-sections"
        className="inline-flex h-[50px] min-w-[186px] items-center justify-center rounded-[10px] border-[1.5px] border-[var(--course-detail-button-border)] px-[26px] text-[13px] font-bold text-[var(--course-detail-button-muted)] transition-colors duration-200 hover:border-[var(--course-detail-primary)] hover:text-[var(--course-detail-primary)]"
      >
        Learn More
      </a>
    </div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[var(--course-detail-heading)]">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--course-detail-hero-bg)] pb-[70px] pt-[64px] sm:pb-[90px] sm:pt-[74px] lg:pb-[10px] lg:pt-[82px]">
          <Image
            src="/hero_banner_bg_ellipse.webp"
            alt=""
            aria-hidden="true"
            width={1332}
            height={689}
            className="pointer-events-none absolute right-[-380px] top-[-140px] w-[880px] max-w-none  sm:right-[-300px] sm:w-[1000px] lg:right-[-130px] lg:top-[-330px] lg:w-[1280px]"
          />

          <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="grid gap-[46px] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-[60px] xl:gap-[80px]">
              <div className="max-w-[680px]">
                <p className="text-[12px] font-bold uppercase tracking-[0.01em] text-[var(--course-detail-label)] sm:text-[13px]">
                  {course.eyebrow}
                </p>
                <h1 className="mt-[10px] whitespace-pre-line text-[32px] font-bold leading-[1.1] tracking-[-0.022em] text-[var(--course-detail-heading)] sm:text-[40px] lg:text-[46px] xl:text-[50px]">
                  <span className="text-[var(--course-detail-primary)]">{course.title.split("\n")[0]}</span>
                  <span className="block">
                    {course.title.split("\n").slice(1).join("\n")}
                  </span>
                </h1>

                {subscribeSection}

                <div className="mt-[44px] rounded-[28px] border border-[var(--course-detail-hero-desc-border)] bg-[var(--course-detail-hero-desc-bg)] px-[26px] py-[28px] shadow-[0_14px_34px_rgba(83,99,232,0.08)] sm:px-[34px] sm:py-[32px]">
                  <p className="text-[13px] font-medium leading-[1.75] text-[var(--course-detail-body-strong)] sm:text-[14.5px] lg:text-[15px]">
                    {course.heroDescription}
                  </p>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[825px] justify-self-end bottom-[-80px]">
                <div className="relative aspect-[4/3.3] w-full">
                  <Image
                    src={course.heroImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(max-width: 1024px) 100vw, 825px"
                    priority
                    className="object-contain object-center drop-shadow-[0_22px_50px_rgba(23,36,90,0.18)] "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOC + Content sections */}
        <section id="course-sections" className="relative overflow-hidden bg-[var(--course-detail-content-bg)] pb-[70px] pt-[70px] sm:pb-[90px] sm:pt-[84px] lg:pb-[104px] lg:pt-[96px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="grid gap-[30px] lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start lg:gap-[44px] xl:gap-[60px]">
              {/* TOC — shows only the currently active section */}
              <aside className="lg:sticky lg:top-[calc(var(--header-height)+24px)]">
                <div className="relative overflow-hidden rounded-[28px] bg-[var(--course-detail-toc-bg)] px-[28px] py-[34px] shadow-[0_18px_40px_rgba(23,36,90,0.06)] sm:px-[32px] sm:py-[40px]">
                  <p className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-[var(--course-detail-label)]">TOC</p>
                  <h2 className="mt-[6px] text-[26px] font-bold leading-[1.1] tracking-[-0.016em] text-[var(--course-detail-heading)] sm:text-[30px] lg:text-[34px]">
                    Table of Contents
                  </h2>

                  <nav className="mt-[22px] flex flex-col gap-[6px]">
                    {course.toc.map((item) => {
                      const isActive = item.id === activeTocItem?.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveTocId(item.id)}
                          className={`flex items-center gap-3 rounded-[12px] px-[12px] py-[13px] text-left transition-colors duration-200 ${
                            isActive ? "bg-[var(--course-detail-toc-item-active)]" : "hover:bg-[var(--course-detail-toc-item-bg)]"
                          }`}
                        >
                          <span
                            className={`grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full ${
                              isActive ? "bg-[var(--course-detail-primary)]" : "bg-[var(--course-detail-toc-item-bg)]"
                            }`}
                          >
                            <span
                              className={`block h-[10px] w-[10px] rounded-full ${isActive ? "bg-white" : "bg-[var(--course-detail-toc-dot)]"}`}
                            />
                          </span>
                          <span
                            className={`text-[13.5px] leading-[1.3] sm:text-[14.5px] ${
                              isActive ? "font-bold text-[var(--course-detail-primary)]" : "font-semibold text-[var(--course-detail-heading)]"
                            }`}
                          >
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </aside>

              {/* Active section only — content swaps when a TOC item is selected */}
              {activeSection && (
                <article key={activeSection.id}>
                  <div className="flex items-start gap-[18px]">
                    <span className="mt-[6px] h-[46px] w-[46px] shrink-0 rounded-full bg-[var(--course-detail-section-dot)]" />
                    <h3 className="text-[26px] font-bold leading-[1.15] tracking-[-0.018em] text-[var(--course-detail-section-heading)] sm:text-[30px] lg:text-[34px]">
                      {activeSection.heading}
                    </h3>
                  </div>
                  <div className="mt-[22px] space-y-[18px] pl-[64px] sm:pl-[66px]">
                    {activeSection.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-[13.5px] leading-[1.8] text-[var(--course-detail-body-strong)] sm:text-[14.5px] lg:text-[15.5px]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              )}
            </div>
          </div>
        </section>

       
        {/* FAQs */}
        <section className="relative overflow-hidden bg-white pb-[82px] pt-[10px] sm:pb-[92px] sm:pt-[20px] lg:pb-[104px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="grid gap-[44px] lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-start lg:gap-[60px] xl:gap-[72px]">
              <div>
                <p className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-[var(--course-detail-label)]">FAQS</p>
                <h2 className="mt-[6px] text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--course-detail-heading)] sm:text-[36px] lg:text-[40px] xl:text-[44px]">
                  {course.eyebrow.split(" ")[0]} FAQs
                </h2>

                <div className="mt-[30px] flex flex-col gap-[14px] sm:mt-[36px] sm:gap-[16px]">
                  {course.faqs.map((faq, i) => (
                    <FAQAccordionItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFaq === i}
                      onToggle={() => setOpenFaq((current) => (current === i ? null : i))}
                    />
                  ))}
                </div>
              </div>

              {course.faqCta && (
                <div className="lg:sticky lg:top-[calc(var(--header-height)+30px)]">
                  <div className="rounded-[28px] bg-[var(--course-detail-faq-cta-bg)] px-[30px] py-[40px] sm:px-[38px] sm:py-[46px]">
                    <h3 className="text-[22px] font-bold leading-[1.15] tracking-[-0.014em] text-[var(--course-detail-heading)] sm:text-[24px] lg:text-[26px]">
                      {course.faqCta.title}
                    </h3>
                    <p className="mt-[14px] text-[13px] leading-[1.65] text-[var(--course-detail-copy)] sm:text-[14px]">
                      {course.faqCta.text}
                    </p>
                    <SubscribeButton href={plansHref} className="mt-[22px] h-[48px] rounded-[10px] px-[24px]">
                      {course.faqCta.buttonLabel}
                    </SubscribeButton>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Comparison */}
        {course.comparison && (
          <section className="relative overflow-hidden bg-[var(--course-detail-comparison-section-bg)] pb-[82px] pt-[70px] sm:pb-[100px] sm:pt-[84px] lg:pb-[112px] lg:pt-[96px]">
            <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-[var(--course-detail-label)]">COMPARISON</p>
              <h2 className="mt-[6px] text-[28px] font-bold leading-[1.12] tracking-[-0.018em] text-[var(--course-detail-heading)] sm:text-[34px] lg:text-[38px] xl:text-[42px]">
                {course.comparison.heading}
              </h2>

              {course.comparison.noteHeading && (
                <div className="mt-[28px] rounded-[22px] border border-[#dbe7ff] bg-[var(--course-detail-comparison-note-bg)] px-[26px] py-[24px] sm:mt-[34px] sm:px-[32px] sm:py-[28px]">
                  <p className="text-[12.5px] font-semibold leading-[1.4] text-[var(--course-detail-comparison-note-text)] sm:text-[13.5px]">
                    {course.comparison.noteHeading}
                  </p>
                  {course.comparison.noteBullets && course.comparison.noteBullets.length > 0 && (
                    <ul className="mt-[14px] space-y-[10px] pl-[20px] sm:mt-[16px] sm:pl-[22px]">
                      {course.comparison.noteBullets.map((b, i) => (
                        <li key={i} className="list-disc text-[12.5px] leading-[1.65] text-[#39415a] sm:text-[13.5px] [&::marker]:text-[var(--course-detail-comparison-note-text)]">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              <div className="mt-[44px] overflow-hidden rounded-[18px] border border-[var(--course-detail-comparison-table-border)] bg-white shadow-[0_18px_42px_rgba(23,36,90,0.10)] sm:mt-[50px] sm:rounded-[22px]">
                <div className="grid grid-cols-3">
                  <div className="bg-[var(--course-detail-comparison-feature-header)] px-[20px] py-[20px] sm:px-[26px] sm:py-[22px]">
                    <p className="text-[14px] font-bold tracking-[0.02em] text-[#303030] sm:text-[16px]">FEATURE</p>
                  </div>
                  <div
                    className="px-[20px] py-[20px] sm:px-[26px] sm:py-[22px]"
                    style={{ backgroundColor: course.comparison.colAColor ?? "var(--course-detail-comparison-plab1-header)" }}
                  >
                    <p className="text-[15px] font-bold text-white sm:text-[17px]">{course.comparison.colAHeader}</p>
                  </div>
                  <div
                    className="px-[20px] py-[20px] sm:px-[26px] sm:py-[22px]"
                    style={{ backgroundColor: course.comparison.colBColor ?? "var(--course-detail-comparison-pres2-header)" }}
                  >
                    <p className="text-[15px] font-bold text-white sm:text-[17px]">{course.comparison.colBHeader}</p>
                  </div>
                </div>

                {course.comparison.rows.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-3 border-t border-[var(--course-detail-comparison-table-border)] ${i % 2 === 1 ? "bg-[var(--course-detail-comparison-row-even)]" : "bg-white"}`}
                  >
                    <div className="px-[20px] py-[20px] sm:px-[26px] sm:py-[22px]">
                      <p className="text-[13px] font-semibold leading-[1.55] text-[#142452] sm:text-[14.5px]">{row.feature}</p>
                    </div>
                    <div className="border-l border-[var(--course-detail-comparison-table-border)] px-[20px] py-[20px] sm:px-[26px] sm:py-[22px]">
                      <p className="text-[13px] leading-[1.6] text-[#39415a] sm:text-[14.5px]">{row.colA}</p>
                    </div>
                    <div className="border-l border-[var(--course-detail-comparison-table-border)] px-[20px] py-[20px] sm:px-[26px] sm:py-[22px]">
                      <p className="text-[13px] leading-[1.6] text-[#39415a] sm:text-[14.5px]">{row.colB}</p>
                    </div>
                  </div>
                ))}
              </div>

              {course.comparison.footerText && (
                <p className="mt-[28px] max-w-[1100px] text-[12px] leading-[1.65] text-[#8a8a8a] sm:mt-[32px] sm:text-[13px]">
                  {course.comparison.footerText}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Related Exams */}
        <section className="relative overflow-hidden bg-white pb-[92px] pt-[10px] sm:pb-[110px] sm:pt-[20px] lg:pb-[120px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-[var(--course-detail-label)]">EXAMS</p>
            <h2 className="mt-[6px] text-[28px] font-bold leading-[1.12] tracking-[-0.018em] text-[var(--course-detail-heading)] sm:text-[34px] lg:text-[38px] xl:text-[42px]">
              Related Exams
            </h2>
            <p className="mt-[14px] max-w-[620px] text-[12.5px] leading-[1.55] text-[var(--course-detail-copy)] sm:mt-[16px] sm:text-[13.5px]">
              Link only to the genuine next steps in a candidate&apos;s pathway, woven into prose rather than a bare link list:
            </p>

            <div className="mt-[36px] grid gap-[22px] sm:grid-cols-2 sm:gap-[24px] lg:mt-[42px] lg:grid-cols-3 lg:gap-[26px]">
              {course.relatedExams.map((exam, i) => (
                <RelatedExamCard key={exam.title} exam={exam} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Pathway Visual */}
        <section className="relative overflow-hidden bg-[#f4f5ff] pb-[110px] pt-[74px] sm:pb-[140px] sm:pt-[86px] lg:pb-[160px] lg:pt-[96px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="max-w-[900px]">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[var(--course-detail-label)] sm:text-[12px]">
                YOUR PATHWAY
              </p>
              <h2 className="mt-[10px] text-[32px] font-bold leading-[1.05] tracking-[-0.024em] text-[var(--course-detail-heading)] sm:text-[40px] lg:text-[46px] xl:text-[50px]">
                Pathway Visual
              </h2>
            </div>

            <div className="mt-[44px] h-[520px] min-h-[460px] w-full sm:mt-[54px] sm:h-[560px] lg:mt-[66px] lg:h-[600px] xl:h-[620px]">
              <PathwayVisual steps={course.pathway} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
