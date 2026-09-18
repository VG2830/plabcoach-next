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
  const cls = "h-[55%] w-[55%] text-white";
  switch (icon) {
    case "eligibility":
      return (
        // <svg viewBox="0 0 24 24" fill="none" className={cls} xmlns="http://www.w3.org/2000/svg">
        //   <rect x="5" y="4" width="14" height="17" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
        //   <rect x="9" y="2.4" width="6" height="3.2" rx="1" fill="currentColor" />
        //   <circle cx="10.4" cy="11" r="1.7" stroke="currentColor" strokeWidth="1.4" />
        //   <path d="M8 16.3c.4-1.6 1.8-2.4 3.1-2.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        //   <circle cx="16.2" cy="16.3" r="2.9" fill="currentColor" />
        //   <path d="M14.9 16.3l.9.9 1.6-1.8" stroke="#151f52" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        // </svg>
        <Image src="/pathway_1.svg" alt=""  width={56} height={56}></Image> 
      );
    case "pass-plab1":
    case "pass-pres2":
    case "pass-pres3":
    case "pass-plab2":
    case "pass-nca":
    case "pass-psa":
      return (
        // <svg viewBox="0 0 24 24" fill="none" className={cls} xmlns="http://www.w3.org/2000/svg">
        //   <rect x="3.2" y="4.5" width="17.6" height="12.2" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
        //   <path d="M9 20h6M12 16.7V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        //   <circle cx="12" cy="10.6" r="3.3" stroke="currentColor" strokeWidth="1.4" />
        //   <path d="M10.6 10.6l1 1 2-2.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        // </svg>
        <Image src="/pathway_2.svg" alt=""  width={56} height={56}></Image>
      );
    case "prepare-plab2":
    case "prepare-pres3":
    case "prepare-nca":
    case "prepare-psa":
      return (
        <Image src="/pathway_3.svg" alt=""  width={56} height={56}></Image>
      );
    case "apply-registration":
    case "apply-imc":
    case "apply-fp":
      return (
        // <svg viewBox="0 0 24 24" fill="none" className={cls} xmlns="http://www.w3.org/2000/svg">
        //   <path
        //     d="M12 5.2c-1.7-1-4-1.3-5.8-.7v13.3c1.8-.6 4.1-.3 5.8.7 1.7-1 4-1.3 5.8-.7V4.5c-1.8-.6-4.1-.3-5.8.7Z"
        //     stroke="currentColor"
        //     strokeWidth="1.4"
        //     strokeLinejoin="round"
        //   />
        //   <path d="M12 5.2v13.3" stroke="currentColor" strokeWidth="1.3" />
        //   <path d="M10.9 10h2.2M12 8.9v2.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        // </svg>
        <Image src="/pathway_4.svg" alt=""  width={56} height={56}></Image>
      );
    case "apply-registration":
    case "apply-imc":
    case "apply-fp":
      return (
        // <svg viewBox="0 0 24 24" fill="none" className={cls} xmlns="http://www.w3.org/2000/svg">
        //   <rect x="3.2" y="5.2" width="14.4" height="13.6" rx="2" stroke="currentColor" strokeWidth="1.5" />
        //   <circle cx="7.5" cy="9.8" r="1.6" stroke="currentColor" strokeWidth="1.3" />
        //   <path d="M5.6 15c.4-1.4 1.6-2.1 2.8-2.1M12.4 8.6h3.4M12.4 11.4h2.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        //   <path d="M15.8 15.6l3.5-3.5 1.6 1.6-3.5 3.5-2 .4.4-2Z" fill="currentColor" />
        // </svg>
        <Image src="/pathway_5.svg" alt=""  width={56} height={56}></Image>
      );
    case "start-career":
      return (
        // <svg viewBox="0 0 24 24" fill="none" className={cls} xmlns="http://www.w3.org/2000/svg">
        //   <path d="M9 7.4V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        //   <rect x="3.4" y="7.4" width="17.2" height="11.4" rx="2" stroke="currentColor" strokeWidth="1.5" />
        //   <path d="M3.4 12.4h17.2" stroke="currentColor" strokeWidth="1.3" />
        //   <path d="M12 10.4v4M10 12.4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        // </svg>
        <Image src="/pathway_6.svg" alt=""  width={56} height={56}></Image>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 12.3l2.1 2.1L15.4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

/**
 * Wave geometry: for the standard 6-step pathway (the one in the reference
 * design) we use hand-placed points/curve control values that reproduce that
 * exact layout at any width, since the SVG scales via viewBox + width:100%.
 * For any other step count we fall back to a generated smooth wave so the
 * component keeps working for shorter/longer pathways elsewhere on the site.
 */
function PathwayVisual({ steps }: { steps: PathwayStep[] }) {
  const curve = useMemo(() => {
    const n = steps.length;
    if (n === 0) return null;

    const viewMinX = 100;
    const viewMinY = 120;
    const viewW = 1300;
    const viewH = 560;

    let pts: { x: number; y: number }[];
    let entry: { x: number; y: number };
    let exit: { x: number; y: number };

    if (n === 6) {
      pts = [
        { x: 259, y: 533 },
        { x: 461, y: 421 },
        { x: 659, y: 366 },
        { x: 856, y: 346 },
        { x: 1054, y: 255 },
        { x: 1253, y: 255 },
      ];
      entry = { x: 133, y: 548 };
      exit = { x: 1345, y: 186 };
    } else {
      const startX = 190;
      const endX = viewMinX + viewW - 190;
      const topY = viewMinY + viewH * 0.28;
      const bottomY = viewMinY + viewH * 0.82;
      pts = Array.from({ length: n }, (_, i) => {
        const t = n === 1 ? 0 : i / (n - 1);
        return { x: startX + t * (endX - startX), y: bottomY - t * (bottomY - topY) };
      });
      entry = { x: pts[0].x - 95, y: pts[0].y + 16 };
      exit = { x: pts[n - 1].x + 95, y: pts[n - 1].y - 66 };
    }

    const all = [entry, ...pts, exit];
    let d = `M ${all[0].x} ${all[0].y}`;
    for (let i = 0; i < all.length - 1; i++) {
      const a = all[i];
      const b = all[i + 1];
      const dx = b.x - a.x;
      const cx1 = a.x + dx * 0.42;
      const cy1 = a.y - (a.y - b.y) * 0.12;
      const cx2 = a.x + dx * 0.58;
      const cy2 = b.y + (a.y - b.y) * 0.12;
      d += ` C ${cx1.toFixed(1)} ${cy1.toFixed(1)}, ${cx2.toFixed(1)} ${cy2.toFixed(1)}, ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
    }

    return {
      path: d,
      pts,
      viewBox: `${viewMinX} ${viewMinY} ${viewW} ${viewH}`,
      minX: viewMinX,
      minY: viewMinY,
      width: viewW,
      height: viewH,
    };
  }, [steps]);

  if (!curve) return null;

  return (
    <>
      {/* Tablet / desktop — reproduces the reference wave layout, fully fluid via viewBox scaling */}
      <div className="relative hidden w-full overflow-hidden sm:block">
        <svg viewBox={curve.viewBox} preserveAspectRatio="xMidYMid meet" className="h-auto w-full" aria-hidden="true">
          <defs>
            <linearGradient id="pathwayLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c3cbfd" />
              <stop offset="50%" stopColor="#a3b0fb" />
              <stop offset="100%" stopColor="#8a9af9" />
            </linearGradient>
          </defs>
          <path d={curve.path} fill="none" stroke="url(#pathwayLine)" strokeWidth="11" strokeLinecap="round" />
        </svg>

        <ol className="pointer-events-none absolute inset-0">
          {curve.pts.map((pt, i) => {
            const step = steps[i];
            if (!step) return null;
            const leftPct = ((pt.x - curve.minX) / curve.width) * 100;
            const topPct = ((pt.y - curve.minY) / curve.height) * 100;
            return (
              <li key={step.id} className="absolute -translate-x-1/2" style={{ left: `${leftPct}%`, top: `${topPct}%` }}>
                <div className="pointer-events-auto relative grid -translate-y-1/2 place-items-center">
                  <span className="relative grid h-[74px] w-[74px] place-items-center rounded-full bg-[#dee3fb] md:h-[86px] md:w-[86px] lg:h-[96px] lg:w-[96px] xl:h-[104px] xl:w-[104px]">
                    <span className="grid h-[54px] w-[54px] place-items-center rounded-[15px]  md:h-[50px] md:w-[50px] lg:h-[56px] lg:w-[56px] xl:h-[60px] xl:w-[60px]">
                      <PathwayIcon icon={step.icon} />
                    </span>
                  </span>

                  <span className="absolute -left-[24px] -top-[2px] text-[24px] font-extrabold tracking-[-0.01em] text-[#17225c] md:-left-[28px] md:text-[27px] lg:-left-[32px] lg:text-[30px] xl:-left-[36px] xl:text-[32px]">
                    {step.number}
                  </span>

                  <div className="absolute top-[108%] mt-[12px] w-[150px] max-w-[38vw] text-center md:w-[160px] lg:w-[170px]">
                    <p className="whitespace-pre-wrap text-[13.5px] font-bold leading-[1.3] tracking-[-0.006em] text-[#17225c] md:text-[15px] lg:text-[16px]">
                      {step.label}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile — vertical timeline so every step stays fully readable on narrow screens */}
      <ol className="flex flex-col sm:hidden">
        {steps.map((step, i) => (
          <li key={step.id} className="relative flex gap-4 pb-8 last:pb-0">
            {i < steps.length - 1 && (
              <span className="absolute left-[27px] top-[56px] h-[calc(100%-40px)] w-[3px] rounded-full bg-gradient-to-b from-[#c3cbfd] to-[#8a9af9]" />
            )}
            <div className="relative z-10 grid h-[56px] w-[56px] shrink-0 place-items-center rounded-full bg-[#dee3fb]">
              <span className="grid h-[34px] w-[34px] place-items-center rounded-[11px] bg-[#151f52]">
                <PathwayIcon icon={step.icon} />
              </span>
              <span className="absolute -left-[6px] -top-[6px] text-[15px] font-extrabold text-[#17225c]">{step.number}</span>
            </div>
            <p className="pt-[14px] text-[14.5px] font-bold leading-[1.35] text-[#17225c]">{step.label}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

export default function CourseDetail({ course }: { course: CourseDetailData }) {
  const plansHref = course.subscribeHref ?? `/course-plan?course=${encodeURIComponent(course.slug)}`;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTocId, setActiveTocId] = useState<string>(course.toc[0]?.id ?? "");

  const activeTocItem = course.toc.find((t) => t.id === activeTocId) ?? course.toc[0];
  const activeSection =
    course.sections.find((s) => s.id === activeTocId) ?? course.sections[0];

  // const subscribeSection = (
  //   <div className="mt-[34px] flex flex-col gap-[14px] sm:flex-row sm:gap-[20px] lg:mt-[40px]">
  //     <SubscribeButton href={plansHref} />
  //     {/* <a
  //       href="#course-sections"
  //       className="inline-flex h-[50px] min-w-[186px] items-center justify-center rounded-[10px] border-[1.5px] border-[var(--course-detail-button-border)] px-[26px] text-[13px] font-bold text-[var(--course-detail-button-muted)] transition-colors duration-200 hover:border-[var(--course-detail-primary)] hover:text-[var(--course-detail-primary)]"
  //     >
  //       Learn More
  //     </a> */}
  //   </div>
  // );

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

                {/* {subscribeSection} */}

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
        <section id="course-sections" className="relative overflow-hidden bg-[var(--course-detail-content-bg)] pb-[70px] pt-[70px] sm:pb-[90px] sm:pt-[84px] lg:pb-[40px] lg:pt-[37px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="grid gap-[30px] lg:grid-cols-[454px_minmax(0,1fr)] lg:items-start lg:gap-[26px]">
              {/* TOC — shows only the currently active section */}
              <aside className="max-h-none overflow-visible lg:sticky lg:top-[calc(var(--header-height)+24px)] lg:ml-[-15px] lg:max-h-[calc(100vh-var(--header-height)-24px)] lg:overflow-x-hidden lg:overflow-y-auto">
                <div className="relative overflow-hidden rounded-r-[36px] bg-[var(--course-detail-toc-bg)] px-[28px] py-[34px] shadow-[0_18px_40px_rgba(23,36,90,0.06)] sm:px-[32px] sm:py-[40px] lg:w-[454px] lg:rounded-l-none lg:px-0 lg:py-[44px]">
                  <div className="lg:pl-[143px]">
                  <p className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-[var(--course-detail-label)]">TOC</p>
                  <h2 className="mt-[6px] text-[26px] font-bold leading-[1.1] tracking-[-0.016em] text-[var(--course-detail-heading)] sm:text-[30px] lg:text-[34px]">
                    Table of Contents
                  </h2>

                  <nav className="mt-[22px] flex flex-col gap-[10px]">
                    {course.toc.map((item) => {
                      const isActive = item.id === activeTocItem?.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveTocId(item.id)}
                          className={`flex min-h-[44px] items-center gap-2 rounded-[10px] px-[8px] py-[9px] text-left transition-colors duration-200 ${
                            isActive ? "bg-[var(--course-detail-toc-item-active)]" : "hover:bg-[var(--course-detail-toc-item-bg)]"
                          }`}
                        >
                          <span
                            className="block h-[26px] w-[26px] shrink-0 rounded-full bg-[var(--course-detail-toc-dot)]"
                          />
                          <span
                            className={`text-[16px] leading-[1.2] ${
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
                </div>
              </aside>

              {/* Active section only — content swaps when a TOC item is selected */}
              {activeSection && (
                <article key={activeSection.id} className="lg:pt-[110px]">
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
                    {activeSection.id === "what-is" && (
                      <SubscribeButton href={plansHref} className="mt-[8px] h-[48px] px-[24px]">
                        {course.subscribeButtonLabel}
                      </SubscribeButton>
                    )}
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

              <div className="mt-[44px] overflow-hidden rounded-[18px] border border-[var(--course-detail-comparison-table-border)] bg-[#eeeeee] shadow-[0_18px_42px_rgba(23,36,90,0.10)] sm:mt-[50px] sm:rounded-[22px]">
                <div className="grid grid-cols-3">
                  <div className="bg-[var(--course-detail-comparison-feature-header)] px-[20px] py-[20px] sm:px-[26px] sm:py-[22px]">
                    <p className="text-[14px] font-bold tracking-[0.02em] text-[#303030] sm:text-[16px]">FEATURE</p>
                  </div>
                  <div
                    className="px-[20px] py-[20px] sm:px-[26px] sm:py-[22px] rounded-[20px] lg: mr-[2px] "
                    style={{ backgroundColor: course.comparison.colAColor ?? "var(--course-detail-comparison-plab1-header)" }}
                  >
                    <p className="text-[15px] font-bold text-white sm:text-[17px]">{course.comparison.colAHeader}</p>
                  </div>
                  <div
                    className="px-[20px] py-[20px] sm:px-[26px] sm:py-[22px] rounded-[20px] lg: ml-[2px] "
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

            <div className="mt-[50px] w-full sm:mt-[60px] lg:mt-[74px]">
              <PathwayVisual steps={course.pathway} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}