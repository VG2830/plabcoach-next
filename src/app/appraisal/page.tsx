"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const services = [
  { icon: "/virtual_icon.svg", title: "Appraisal Services", detail: "(Virtual & In-Person)" },
  { icon: "/Revalidation_icon.svg", title: "Revalidation &", detail: "Compliance Support" },
  { icon: "/interview_prep_icon.svg", title: "1:1 Interview", detail: "Preparation" },
  { icon: "/feedback_collection_icon.svg", title: "Feedback Collection", detail: "(MSF/PSQ)" },
  { icon: "/clinical_icon.svg", title: "Clinical Observership", detail: "Programme" },
  { icon: "/support_services_icon.svg", title: "Career Support", detail: "Services" },
];

const offers = [
  {
    save: "Save £5",
    code: "PREP5COACH",
    title: "Appraisal Advice (Virtual)",
    copy: "Expert guidance to help you prepare for your appraisal, including portfolio review and personalised support.",
  },
  {
    save: "Save £10",
    code: "PREP5COACH",
    title: "Standard Appraisal (Virtual)",
    copy: "Complete GMC-compliant appraisal including portfolio review, appraisal meeting, and documentation (REV12).",
  },
  {
    save: "Save £10",
    code: "APP10COACH",
    title: "Appraisal Advice (Virtual)",
    copy: "Expert guidance to help you prepare for your appraisal, including portfolio review and personalised support.",
  },
  {
    save: "Save £5",
    code: "PREP5COACH",
    title: "Appraisal Advice (Virtual)",
    copy: "Expert guidance to help you prepare for your appraisal, including portfolio review and personalised support.",
  },
  {
    save: "Save £5",
    code: "PREP5COACH",
    title: "Appraisal Advice (Virtual)",
    copy: "Expert guidance to help you prepare for your appraisal, including portfolio review and personalised support.",
  },
  {
    save: "Save £5",
    code: "PREP5COACH",
    title: "Appraisal Advice (Virtual)",
    copy: "Expert guidance to help you prepare for your appraisal, including portfolio review and personalised support.",
  },
];

const benefits = [
  { label: "Exclusive discounted pricing", icon: "cap" },
  { label: "Faster onboarding and priority support", icon: "target" },
  { label: "Tailored services for international doctors", icon: "chart" },
  { label: "Fully GMC-compliant solutions", icon: "chart" },
  { label: "Trusted by doctors across the UK", icon: "chart" },
] as const;

const journey = [
  {
    idle: "/01.svg",
    active: "/01_with_color.svg",
    width: 158,
    title: "Enroll with PLABCoach",
    copy: "Begin by registering with PLABCoach to access a structured support system tailored for your professional development and appraisal readiness",
  },
  {
    idle: "/02.svg",
    active: "/02_with_color.svg",
    width: 197,
    title: "Request access to partnership benefits",
    copy: "Once enrolled, submit a request to unlock exclusive partner benefits, including discounted services and priority support designed for PLABcoach members.",
  },
  {
    idle: "/03.svg",
    active: "/03_with_color.svg",
    width: 199,
    title: "Connect with Dr Appraisals",
    copy: "You will be guided to connect with Dr Appraisals, where you can choose the appropriate service and receive expert assistance aligned with your appraisal needs.",
  },
  {
    idle: "/04.svg",
    active: "/04_with_color.svg",
    width: 213,
    title: "Start Your Appraisal or Compliance Process",
    copy: "Initiate your appraisal or compliance journey with full support, ensuring all requirements are met efficiently and in accordance with professional standards.",
  },
];

const reviews = [
  {
    name: "Safia Abdulla",
    role: "Doctor",
    country: "IRELAND",
    image: "/gmc_hero_image.webp",
    text: "Great course. The videos were great help. Dr Karam was very kind and helpful. He helped us and gave us tips whenever he was around. He knew us by name even before had met us in person. Dr Anjum’s advice and notes were also very useful. The timing of the course was good. It allowed for enough practice time before the exam. The environment at the center was well-suited for practicing and studying. Very grateful for the opportunity to perform procedures and the large number of needles available at the center. Was also grateful for being able to practice on the breast mannequin which was one of my exam stations. However, a few of the mannequins require replacement like the one for rectal exam. The otoscopes and fundoscopes were not working.",
  },
  {
    name: "Nadia Rahman",
    role: "Doctor",
    country: "UNITED KINGDOM",
    image: "/karam_image.webp",
    text: "The guidance was practical, clear and very focused on what doctors actually need. The support made the whole preparation process feel organised and manageable, with useful feedback at every stage.",
  },
  {
    name: "David Mensah",
    role: "Doctor",
    country: "IRELAND",
    image: "/third_section_dr_img.webp",
    text: "A very supportive learning experience. The teaching was structured, the practice sessions were useful and the team was always approachable when we needed clarification or extra guidance.",
  },
  {
    name: "Aisha Khan",
    role: "Doctor",
    country: "UNITED KINGDOM",
    image: "/about_doctor_appraisal-iamge.webp",
    text: "The course helped me understand the process and prepare with much more confidence. I especially valued the practical advice, focused resources and the responsive support from the team.",
  },
  {
    name: "Michael Osei",
    role: "Doctor",
    country: "UNITED KINGDOM",
    image: "/anjum_image.webp",
    text: "Well organised, professional and genuinely helpful. The combination of structured learning, practical examples and individual support made a real difference to my preparation.",
  },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`h-5 w-5 ${direction === "left" ? "rotate-180" : ""}`} fill="none">
      <path d="M5 12h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeroBadge({ icon, kicker, title, className = "" }: { icon: string; kicker: string; title: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute z-20 flex min-h-[96px] items-center gap-[16px] rounded-[17px] bg-white px-[19px] py-[15px] shadow-[0_18px_46px_rgba(24,38,91,0.19)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(24,38,91,0.24)] xl:min-h-[113px] xl:gap-[18px] xl:px-[22px] xl:py-[17px] ${className}`}>
      <Image src={icon} alt="" aria-hidden="true" width={72} height={72} className="h-[58px] w-[58px] shrink-0 object-contain xl:h-[66px] xl:w-[66px]" />
      <div className="leading-[1.02]">
        <p className="text-[12px] font-semibold text-[var(--appraisal-accent)] xl:text-[14px]">{kicker}</p>
        <p className="mt-[5px] text-[18px] font-bold text-[var(--appraisal-ink)] xl:text-[21px]">{title}</p>
      </div>
    </div>
  );
}

function BenefitIcon({ type }: { type: (typeof benefits)[number]["icon"] }) {
  if (type === "cap") {
    return (
      <svg viewBox="0 0 28 28" aria-hidden="true" className="h-[22px] w-[22px] fill-[var(--appraisal-accent)]">
        <path d="M2.8 10.6 14 5l11.2 5.6L14 16.2 2.8 10.6Zm4.1 3.3 7.1 3.6 7.1-3.6v5c0 2.4-3.2 4.4-7.1 4.4s-7.1-2-7.1-4.4v-5Zm17.3-.7v7.1h-1.8v-6.2l1.8-.9Z" />
      </svg>
    );
  }
  if (type === "target") {
    return (
      <svg viewBox="0 0 28 28" aria-hidden="true" className="h-[22px] w-[22px] fill-none stroke-[var(--appraisal-accent)]">
        <circle cx="13" cy="15" r="8" strokeWidth="2.3" />
        <circle cx="13" cy="15" r="3.7" strokeWidth="2.3" />
        <path d="m14.7 13.3 7.1-7.1M18.7 6.2h3.1v3.1" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true" className="h-[22px] w-[22px] fill-[var(--appraisal-accent)]">
      <path d="M5 20.5h3.5V15H5v5.5Zm5.5 0H14V10h-3.5v10.5Zm5.5 0h3.5V6H16v14.5Zm5.5 0H25V3h-3.5v17.5Z" />
    </svg>
  );
}
function OfferCard({ offer }: { offer: (typeof offers)[number] }) {
  return (
    <article className="group rounded-[23px] bg-white p-[18px] shadow-[0_1px_0_rgba(21,33,79,0.02)] transition-[transform,box-shadow] duration-300 hover:-translate-y-[6px] hover:shadow-[0_16px_38px_rgba(24,38,91,0.12)] sm:p-[20px]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold text-[var(--appraisal-offer-red)]">Offer:</p>
          <p className="mt-1 text-[28px] font-bold leading-none tracking-[-0.03em] text-black sm:text-[30px]">{offer.save}</p>
          <Image src="/new_plabcoach.webp" alt="PLABCOACH" width={212} height={57} className="mt-2 h-auto w-[82px] object-contain" />
        </div>
        <div className="pt-0.5 text-right">
          <p className="text-[9px] text-[var(--appraisal-card-copy)]">Use Code:</p>
          <span className="mt-2 inline-flex rounded-full border border-dashed border-[var(--appraisal-code-border)] px-3 py-1 text-[10px] font-bold text-[var(--appraisal-card-copy)] transition-colors duration-300 group-hover:bg-[var(--appraisal-code-hover)]">
            {offer.code}
          </span>
        </div>
      </div>
      <div className="my-[18px] h-px bg-[var(--appraisal-divider)]" />
      <h3 className="text-[17px] font-bold leading-tight text-[var(--appraisal-primary)]">{offer.title}</h3>
      <p className="mt-3 min-h-[60px] text-[12px] leading-[1.55] text-[var(--appraisal-card-copy)]">{offer.copy}</p>
      <button type="button" className="mt-[19px] h-[43px] w-full rounded-[8px] bg-[var(--appraisal-button)] text-[11px] font-bold text-white transition-[transform,filter] duration-200 group-hover:brightness-105 hover:-translate-y-[1px]">
        Buy Now
      </button>
    </article>
  );
}

function ReviewCard({
  review,
  position,
}: {
  review: (typeof reviews)[number];
  position: -2 | -1 | 0 | 1 | 2;
}) {
  const active = position === 0;
  const positionClass =
    position === 0
      ? "z-30 w-[728px] translate-x-[-50%] translate-y-0 opacity-100"
      : position === -1
        ? "z-20 w-[440px] translate-x-[calc(-50%_-_550px)] translate-y-[45px] scale-[0.90] opacity-[0.48]"
        : position === 1
          ? "z-20 w-[440px] translate-x-[calc(-50%_+_550px)] translate-y-[45px] scale-[0.90] opacity-[0.48]"
          : position === -2
            ? "z-0 w-[520px] translate-x-[calc(-50%_-_930px)] translate-y-[95px] scale-[0.82] opacity-0"
            : "z-0 w-[520px] translate-x-[calc(-50%_+_930px)] translate-y-[95px] scale-[0.82] opacity-0";

  return (
    <article
      className={`absolute left-1/2 top-0 transition-[transform,width,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${positionClass}`}
      aria-hidden={!active}
    >
      <div
        className={`relative bg-transparent transition-[height] duration-700 ${active ? "h-[467px]" : "h-[310px]"}`}
      >
        <div className={`absolute inset-x-0 bottom-0 rounded-[22px] bg-[var(--appraisal-review-card)] ${active ? "top-[35px] shadow-[0_28px_66px_rgba(29,48,97,0.14)]" : "top-[24px]"}`} />
        <div className={`absolute bg-[var(--appraisal-review-card)] ${active ? "left-0 top-0 h-[126px] w-[138px] rounded-full" : "left-[12px] top-[2px] h-[86px] w-[94px] rounded-full"}`} />
        <div className={`absolute right-0 bg-[var(--appraisal-review-stars-bg)] ${active ? "top-0 h-[82px] w-[315px] rounded-bl-[45px] rounded-tl-[45px] rounded-tr-[22px]" : "top-[2px] h-[58px] w-[215px] rounded-bl-[32px] rounded-tl-[32px] rounded-tr-[18px]"}`} />

        <div className={`absolute overflow-hidden rounded-full bg-white shadow-[0_7px_20px_rgba(29,48,97,0.10)] ${active ? "left-[38px] top-[-47px] h-[140px] w-[140px]" : "left-[24px] top-[-22px] h-[88px] w-[88px]"}`}>
          <Image src={review.image} alt={review.name} fill sizes={active ? "140px" : "88px"} className="object-cover object-top" />
        </div>

        <div className={`absolute flex items-center justify-center ${active ? "right-[24px] top-[20px] w-[270px] gap-[12px]" : "right-[17px] top-[17px] w-[180px] gap-[7px]"}`} aria-label="5 star review">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className={`${active ? "text-[38px]" : "text-[24px]"} leading-none text-[var(--appraisal-star)]`}>★</span>
          ))}
        </div>

        <div className={`absolute ${active ? "left-[200px] top-[24px]" : "left-[122px] top-[31px]"}`}>
          <p className={`${active ? "text-[22px]" : "text-[15px]"} font-bold leading-none text-[var(--appraisal-ink)]`}>{review.name}</p>
          <p className={`${active ? "mt-[10px] text-[14px]" : "mt-[6px] text-[10px]"} font-semibold text-[var(--appraisal-card-copy)]`}>{review.role}</p>
        </div>

        <div className={`absolute ${active ? "left-[31px] right-[31px] top-[125px]" : "left-[22px] right-[22px] top-[101px]"}`}>
          <p className={`${active ? "text-[14px] leading-[1.62]" : "text-[9px] leading-[1.58]"} text-[var(--appraisal-review-copy)]`}>{review.text}</p>
          <p className={`${active ? "mt-[52px] text-[13px]" : "mt-[22px] text-[9px]"} font-bold text-[var(--appraisal-ink)]`}>Country: {review.country}</p>
        </div>
      </div>
    </article>
  );
}

function getCircularPosition(index: number, activeIndex: number): -2 | -1 | 0 | 1 | 2 {
  let delta = index - activeIndex;
  if (delta > 2) delta -= reviews.length;
  if (delta < -2) delta += reviews.length;
  return delta as -2 | -1 | 0 | 1 | 2;
}
export default function AppraisalPage() {
  const [reviewIndex, setReviewIndex] = useState(0);

  const moveReview = (direction: -1 | 1) => {
    setReviewIndex((current) => (current + direction + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[var(--appraisal-ink)]">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[var(--appraisal-hero-bg)]">
          <div className="relative mx-auto grid min-h-[600px] w-[var(--site-width)] max-w-[var(--container-max)] items-center gap-8 py-[70px] sm:min-h-[650px] lg:min-h-[745px] lg:grid-cols-[0.89fr_1.11fr] lg:gap-0 lg:py-0">
            <div className="relative z-20 max-w-[670px] lg:-translate-y-[18px] lg:self-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.025em] text-[var(--appraisal-accent)] sm:text-[12px] lg:text-[13px]">We&apos;re here to help</p>
              <h1 className="mt-[13px] text-[43px] font-bold leading-[1.01] tracking-[-0.038em] text-[var(--appraisal-ink)] sm:text-[54px] lg:text-[64px] xl:text-[66px]">
                Get in Touch With Our Team
              </h1>
              <p className="mt-[35px] max-w-[620px] text-[13px] leading-[1.68] text-[var(--appraisal-copy)] sm:text-[15px] lg:text-[16px]">
                Have questions about courses, subscriptions, or admissions? Connect with our team for quick assistance and expert guidance.
              </p>
              <button type="button" className="mt-[50px] h-[60px] w-[226px] rounded-[9px] bg-[var(--appraisal-hero-button)] px-[20px] text-[13px] font-bold text-white shadow-[0_12px_28px_rgba(56,73,226,0.18)] transition duration-300 hover:-translate-y-1 hover:brightness-105">
                Get Exclusive Access
              </button>
              <p className="mt-[24px] text-[12px] font-bold text-[var(--appraisal-primary)]">We&apos;re Here to Help</p>
            </div>

            <div className="relative z-10 mx-auto mt-8 h-[430px] w-full max-w-[760px] sm:h-[520px] lg:mt-0 lg:h-[720px] lg:max-w-[860px] lg:translate-x-[60px] lg:self-center">
              <Image src="/gmc_hero_image.webp" alt="Medical professionals" fill priority sizes="(max-width: 1023px) 94vw, 860px" className="object-contain object-center lg:-translate-y-[52px] lg:object-right" />
              <HeroBadge icon="/trusted_doctor_icon.svg" kicker="Trusted by" title="UK Doctors" className="bottom-[56px] left-[0px] min-w-[230px] sm:bottom-[72px] sm:left-[22px] lg:bottom-[197px] lg:left-[-110px] lg:min-w-[258px]" />
              <HeroBadge icon="/gmc_complaint_icon.svg" kicker="GMC-Compliant" title="Services" className="right-[0px] top-[22px] min-w-[224px] sm:right-[16px] sm:top-[30px] lg:right-[4px] lg:top-[150px] lg:min-w-[245px]" />
              <div className="absolute bottom-[6px] right-[0px] z-20 hidden min-h-[96px] w-[330px] items-center gap-[16px] rounded-[17px] bg-white px-[20px] py-[15px] shadow-[0_18px_46px_rgba(24,38,91,0.19)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(24,38,91,0.24)] sm:flex lg:bottom-[92px] lg:right-[-92px] xl:min-h-[113px] xl:w-[370px] xl:gap-[18px] xl:px-[22px] xl:py-[17px]">
                <Image src="/intr_medical_icon.svg" alt="" aria-hidden="true" width={72} height={72} className="h-[60px] w-[60px] shrink-0 object-contain xl:h-[66px] xl:w-[66px]" />
                <div className="leading-[1.04]">
                  <p className="text-[12px] font-semibold text-[var(--appraisal-accent)] xl:text-[14px]">Designed for</p>
                  <p className="mt-[5px] text-[18px] font-bold text-[var(--appraisal-ink)] xl:text-[21px]">International Medical<br />Graduates (IMGs)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[var(--appraisal-hero-bg)] to-white py-[88px] sm:py-[110px] lg:pb-[116px] lg:pt-[154px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <article className="relative mx-auto min-h-[470px] max-w-[1480px] overflow-visible rounded-[26px] bg-[var(--appraisal-partnership-bg)] px-[28px] py-[42px] sm:min-h-[510px] sm:px-[48px] lg:min-h-[560px] lg:px-[62px] lg:py-[64px]">
              <div className="relative z-10 max-w-[650px]">
                <p className="text-[10px] font-bold uppercase text-[var(--appraisal-ink)] sm:text-[11px] lg:text-[13px]">Expert Guidance &amp; Leadership</p>
                <h2 className="mt-[10px] text-[34px] font-bold leading-[1.06] tracking-[-0.026em] text-[var(--appraisal-ink)] sm:text-[42px] lg:text-[48px]">
                  Your Trusted Partnership for UK Medical Success
                </h2>
                <p className="mt-[36px] max-w-[625px] text-[13px] leading-[1.7] text-[var(--appraisal-ink)]/85 sm:text-[14px] lg:text-[16px]">
                  PLABcoach has partnered with Dr Appraisals to simplify the journey of doctors entering or practicing in the UK.
                </p>
                <p className="mt-[26px] max-w-[630px] text-[13px] leading-[1.7] text-[var(--appraisal-ink)]/85 sm:text-[14px] lg:text-[16px]">
                  Through this collaboration, PLABcoach students and doctors gain access to reliable, cost-effective, and fully GMC-compliant services — all at exclusive discounted rates.
                </p>
              </div>
              <Image src="/trusted_partership.webp" alt="Doctor reviewing appraisal documents" width={793} height={698} className="pointer-events-none relative bottom-[-42px] right-[-10px] mx-auto mt-[28px] h-auto w-[92%] max-w-[780px] object-contain lg:absolute lg:bottom-0 lg:right-[0px] lg:mt-0 lg:w-[52.7%] lg:max-w-none" />
            </article>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white pt-[6px] sm:pt-[14px] lg:pt-[2px]">
          <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="mx-auto grid max-w-[840px] items-start gap-[34px] lg:grid-cols-[395px_1fr] lg:gap-[30px]">
              <div className="relative mx-auto h-[250px] w-full max-w-[395px] sm:h-[262px] lg:mx-0 lg:h-[250px]">
                <div className="relative h-full w-full overflow-visible">
                  <Image
                    src="/about_doctor_appraisal-iamge.webp"
                    alt="Doctor appraisal specialist"
                    fill
                    sizes="(max-width: 1023px) 92vw, 395px"
                    className="object-contain object-left-top"
                  />
                  <Image
                    src="/complaint_assist_image.svg"
                    alt="GMC compliant appraisal support"
                    width={187}
                    height={188}
                    className="absolute bottom-[0px] right-[-2px] z-20 h-auto w-[104px] object-contain sm:w-[110px] lg:bottom-[1px] lg:right-[-3px] lg:w-[104px]"
                  />
                </div>
              </div>

              <div className="pt-[8px] sm:pt-[12px] lg:pt-[37px]">
                <p className="text-[9px] font-bold uppercase tracking-[0.01em] text-[var(--appraisal-accent)] sm:text-[10px] lg:text-[9px]">
                  About Dr Appraisals
                </p>
                <h2 className="mt-[7px] text-[30px] font-bold leading-[1.03] tracking-[-0.025em] text-[var(--appraisal-ink)] sm:text-[34px] lg:text-[29px]">
                  Trusted UK Compliance Partner
                </h2>
                <div className="mt-[24px] max-w-[440px] space-y-[17px] text-[11px] leading-[1.62] text-[var(--appraisal-copy)] sm:text-[12px] lg:mt-[22px] lg:space-y-[16px] lg:text-[10px] lg:leading-[1.62]">
                  <p>Dr Christopher Boyson is a UK-based General Practitioner, medical appraiser, and educator with significant expertise in clinical practice and professional development.</p>
                  <p>He serves as a Training Programme Director for postgraduate GP training, an examiner, and an NHS appraiser.</p>
                  <p>He has supported doctors across all career stages, from international medical graduates joining the NHS to experienced clinicians preparing for revalidation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-[92px] w-[var(--site-width)] max-w-[var(--container-max)] sm:mt-[112px] lg:mt-[120px]">
            <div className="mx-auto max-w-[1230px]">
              <h2 className="text-[24px] font-bold uppercase leading-none tracking-[-0.02em] text-[var(--appraisal-ink)] sm:text-[26px] lg:text-[24px]">
                Services Overview
              </h2>

              <div className="mt-[12px] grid gap-x-[12px] gap-y-[14px] rounded-[19px] bg-[var(--appraisal-services-panel)] p-[13px] shadow-[0_8px_22px_rgba(33,56,111,0.05)] sm:grid-cols-2 sm:p-[14px] lg:grid-cols-3 lg:p-[13px]">
                {services.map((service) => (
                  <article
                    key={`${service.title}-${service.detail}`}
                    className="group flex min-h-[74px] items-center gap-[10px] rounded-[18px] bg-white px-[12px] py-[10px] transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(24,38,91,0.09)] lg:min-h-[74px] lg:px-[12px]"
                  >
                    <span className="grid h-[48px] w-[48px] shrink-0 place-items-center rounded-[10px] bg-[var(--appraisal-icon-bg)] transition duration-300 group-hover:scale-[1.04]">
                      <Image src={service.icon} alt="" aria-hidden="true" width={38} height={38} className="h-[36px] w-[36px] object-contain" />
                    </span>
                    <h3 className="text-[14px] font-bold leading-[1.06] tracking-[-0.015em] text-black sm:text-[15px] lg:text-[14px]">
                      {service.title}<br />{service.detail}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-0 mt-[-96px] h-[174px] w-full sm:mt-[-98px] sm:h-[190px] lg:mt-[-97px] lg:h-[174px]">
            <Image
              src="/hospital-building-building-medical-red-cross-symbolizing.webp"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="pointer-events-none object-cover object-center"
            />
          </div>
        </section>

        <section className="bg-[var(--appraisal-offers-bg)] py-[76px] sm:py-[94px] lg:py-[104px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="mx-auto max-w-[1480px]">
              <p className="text-[10px] font-bold uppercase text-[var(--appraisal-accent)]">Services</p>
              <h2 className="mt-2 max-w-[728px] text-[36px] font-bold leading-[1.08] tracking-[-0.025em] text-[var(--appraisal-ink)] sm:text-[44px] lg:text-[48px]">
                Unlock Professional Services with PLABcoach Benefits
              </h2>
              <p className="mt-7 max-w-[610px] text-[13px] leading-[1.6] text-[var(--appraisal-copy)] sm:text-[14px]">
                Get expert UK appraisal and compliance services with exclusive PLABcoach discounts—fast, reliable, and cost-effective.
              </p>

              <div className="mt-[42px] grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
                {offers.map((offer, index) => <OfferCard key={`${offer.code}-${index}`} offer={offer} />)}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white py-[78px] sm:py-[92px] lg:h-[655px] lg:py-0">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)] lg:h-full">
            <div className="mx-auto grid max-w-[1480px] items-center gap-[54px] lg:h-full lg:grid-cols-[0.93fr_1.07fr] lg:gap-[40px]">
              <div className="relative z-10 lg:translate-y-[10px]">
                <h2 className="text-[35px] font-bold uppercase leading-[1.04] tracking-[-0.024em] text-[var(--appraisal-ink)] sm:text-[42px] lg:text-[46px]">Why This Is Beneficial</h2>
                <ul className="mt-[38px] space-y-[20px] sm:space-y-[24px] lg:mt-[42px] lg:space-y-[24px]">
                  {benefits.map((benefit) => (
                    <li key={benefit.label} className="group flex min-h-[46px] items-center gap-[12px] text-[17px] font-bold leading-[1.2] text-[var(--appraisal-benefit-text)] sm:text-[19px] lg:text-[28px]">
                      <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-[var(--appraisal-benefit-icon-bg)] transition duration-300 group-hover:scale-110 group-hover:bg-[var(--appraisal-benefit-icon-hover)] lg:h-[46px] lg:w-[46px]">
                        <BenefitIcon type={benefit.icon} />
                      </span>
                      {benefit.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mx-auto h-[500px] w-full max-w-[730px] lg:h-[555px] lg:max-w-[730px] lg:translate-x-[18px] lg:translate-y-[32px]">
                <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-[370px] w-[455px] bg-[var(--appraisal-benefit-shape-light)] [clip-path:polygon(0_18%,31%_0,100%_0,100%_88%,38%_80%)]" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-[18px] left-0 h-[330px] w-[360px] bg-[var(--appraisal-benefit-shape-lavender)] [clip-path:polygon(0_0,56%_32%,100%_55%,66%_85%,22%_100%,0_82%)]" />
                <div aria-hidden="true" className="pointer-events-none absolute right-0 top-[14px] h-[445px] w-[420px] bg-[var(--appraisal-benefit-shape-blue)] [clip-path:polygon(28%_8%,100%_0,100%_75%,18%_100%,0_62%,34%_45%)]" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-[115px] w-[290px] bg-[var(--appraisal-benefit-shape-pale)] [clip-path:polygon(0_0,100%_20%,100%_100%,35%_100%)]" />
                <div className="absolute left-1/2 top-[32px] z-10 w-[438px] max-w-[68%] -translate-x-1/2 overflow-hidden rounded-[18px] sm:max-w-none lg:left-[165px] lg:top-0 lg:translate-x-0">
                  <Image src="/appraisal_beneficial_image.webp" alt="GMC compliant appraisal benefits" width={438} height={495} className="h-auto w-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-[78px] sm:py-[96px] lg:h-[747px] lg:pb-0 lg:pt-[120px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="mx-auto max-w-[1480px]">
              <p className="text-[10px] font-bold uppercase tracking-[0.02em] text-[var(--appraisal-accent)] sm:text-[11px] lg:text-[12px]">How it works</p>
              <h2 className="mt-[16px] text-[37px] font-bold leading-[1.05] tracking-[-0.027em] text-[var(--appraisal-ink)] sm:text-[44px] lg:text-[48px]">Your Journey to Success</h2>

              <div className="mt-[72px] grid gap-[44px] sm:grid-cols-2 lg:mt-[110px] lg:grid-cols-4 lg:gap-0">
                {journey.map((step, index) => (
                  <article key={step.title} className="group relative min-h-[330px] px-1 sm:px-[18px] lg:min-h-[360px] lg:px-[0px] lg:pr-[42px] xl:pr-[48px]">
                    {index > 0 ? (
                      <div aria-hidden="true" className="pointer-events-none absolute left-[-18px] top-[-46px] hidden h-[360px] w-[38px] lg:block">
                        <span className="absolute left-[3px] top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-transparent via-[var(--appraisal-journey-line)] to-transparent opacity-80" />
                        <span className="absolute left-[-7px] top-[109px] h-[30px] w-[30px] rotate-45 border-r-[5px] border-t-[5px] border-[var(--appraisal-journey-line)]" />
                      </div>
                    ) : null}

                    <div className="relative h-[90px] w-full">
                      <Image src={step.idle} alt={`Step ${index + 1}`} width={step.width} height={90} className="absolute left-0 top-0 h-[88px] w-auto max-w-none object-contain object-left transition-opacity duration-300 group-hover:opacity-0" />
                      <Image src={step.active} alt="" aria-hidden="true" width={step.width} height={90} className="absolute left-0 top-0 h-[88px] w-auto max-w-none object-contain object-left opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <h3 className="mt-[37px] max-w-[275px] text-[19px] font-bold leading-[1.12] text-[var(--appraisal-journey-muted)] transition-colors duration-300 group-hover:text-[var(--appraisal-ink)] sm:text-[21px] lg:text-[23px]">
                      {step.title}
                    </h3>
                    <p className="mt-[18px] max-w-[275px] text-[12px] leading-[1.72] text-[var(--appraisal-copy)] sm:text-[13px] lg:text-[15px]">{step.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[var(--appraisal-reviews-bg)] py-[78px] sm:py-[98px] lg:h-[1038px] lg:pb-[120px] lg:pt-[120px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="mx-auto max-w-[1480px]">
              <p className="text-[10px] font-bold uppercase tracking-[0.02em] text-[var(--appraisal-accent)] sm:text-[11px] lg:text-[12px]">Testimonials</p>
              <h2 className="mt-[10px] max-w-[690px] text-[34px] font-bold uppercase leading-[1.03] tracking-[-0.024em] text-[var(--appraisal-ink)] sm:text-[43px] lg:text-[50px]">
                What Do People Praise About PLABcoach?
              </h2>

              <div className="relative mt-[94px] hidden h-[542px] md:block lg:mt-[126px]">
                {reviews.map((review, index) => (
                  <ReviewCard key={review.name} review={review} position={getCircularPosition(index, reviewIndex)} />
                ))}

                <div className="absolute bottom-[0px] left-1/2 z-40 flex -translate-x-1/2 gap-[56px]">
                  <button type="button" aria-label="Previous review" onClick={() => moveReview(-1)} className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[var(--appraisal-slider-arrow)] text-white shadow-[0_8px_18px_rgba(125,195,255,0.24)] transition duration-200 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--appraisal-slider-arrow)] focus-visible:ring-offset-2">
                    <ArrowIcon direction="left" />
                  </button>
                  <button type="button" aria-label="Next review" onClick={() => moveReview(1)} className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[var(--appraisal-slider-arrow)] text-white shadow-[0_8px_18px_rgba(125,195,255,0.24)] transition duration-200 hover:-translate-y-1 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--appraisal-slider-arrow)] focus-visible:ring-offset-2">
                    <ArrowIcon direction="right" />
                  </button>
                </div>
              </div>

              <div className="mt-[70px] md:hidden">
                <div className="relative mx-auto max-w-[520px] rounded-[20px] bg-[var(--appraisal-review-card)] px-[20px] pb-[26px] pt-[78px] shadow-[0_18px_42px_rgba(29,48,97,0.12)]">
                  <div className="absolute left-[20px] top-[-42px] h-[105px] w-[105px] overflow-hidden rounded-full bg-white shadow-sm">
                    <Image src={reviews[reviewIndex].image} alt={reviews[reviewIndex].name} fill sizes="105px" className="object-cover object-top" />
                  </div>
                  <div className="absolute right-[14px] top-[16px] flex gap-[5px] rounded-full bg-[var(--appraisal-review-stars-bg)] px-[12px] py-[7px]">
                    {Array.from({ length: 5 }).map((_, index) => <span key={index} className="text-[18px] leading-none text-[var(--appraisal-star)]">★</span>)}
                  </div>
                  <div className="ml-[110px] -mt-[45px] mb-[34px]">
                    <p className="text-[16px] font-bold text-[var(--appraisal-ink)]">{reviews[reviewIndex].name}</p>
                    <p className="mt-[5px] text-[10px] font-semibold text-[var(--appraisal-card-copy)]">{reviews[reviewIndex].role}</p>
                  </div>
                  <p className="text-[12px] leading-[1.7] text-[var(--appraisal-review-copy)]">{reviews[reviewIndex].text}</p>
                  <p className="mt-[24px] text-[10px] font-bold text-[var(--appraisal-ink)]">Country: {reviews[reviewIndex].country}</p>
                </div>
                <div className="mt-[32px] flex justify-center gap-[18px]">
                  <button type="button" aria-label="Previous review" onClick={() => moveReview(-1)} className="grid h-[44px] w-[44px] place-items-center rounded-full bg-[var(--appraisal-slider-arrow)] text-white"><ArrowIcon direction="left" /></button>
                  <button type="button" aria-label="Next review" onClick={() => moveReview(1)} className="grid h-[44px] w-[44px] place-items-center rounded-full bg-[var(--appraisal-slider-arrow)] text-white"><ArrowIcon direction="right" /></button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
