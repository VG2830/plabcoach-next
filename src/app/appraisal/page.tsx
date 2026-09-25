"use client";

import Image from "next/image";
import { useRef, useState } from "react";
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
    <div className={`absolute z-20 flex min-h-[68px] items-center gap-[10px] rounded-[12px] bg-white px-[11px] py-[10px] shadow-[0_12px_30px_rgba(24,38,91,0.17)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(24,38,91,0.22)] sm:min-h-[96px] sm:gap-[16px] sm:rounded-[17px] sm:px-[19px] sm:py-[15px] sm:shadow-[0_18px_46px_rgba(24,38,91,0.19)] xl:min-h-[113px] xl:gap-[18px] xl:px-[22px] xl:py-[17px] ${className}`}>
      <Image src={icon} alt="" aria-hidden="true" width={72} height={72} className="h-[42px] w-[42px] shrink-0 object-contain sm:h-[58px] sm:w-[58px] xl:h-[66px] xl:w-[66px]" />
      <div className="leading-[1.02]">
        <p className="text-[9px] font-semibold text-[var(--appraisal-accent)] sm:text-[12px] xl:text-[14px]">{kicker}</p>
        <p className="mt-[4px] text-[13px] font-bold text-[var(--appraisal-ink)] sm:mt-[5px] sm:text-[18px] xl:text-[21px]">{title}</p>
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

export default function AppraisalPage() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const swipeStartX = useRef<number | null>(null);
  const swipeCurrentX = useRef<number | null>(null);

  const moveReview = (direction: -1 | 1) => {
    setReviewIndex((current) => (current + direction + reviews.length) % reviews.length);
  };

  const handleSwipeStart = (clientX: number) => {
    swipeStartX.current = clientX;
    swipeCurrentX.current = clientX;
  };

  const handleSwipeMove = (clientX: number) => {
    if (swipeStartX.current !== null) swipeCurrentX.current = clientX;
  };

  const handleSwipeEnd = () => {
    if (swipeStartX.current === null || swipeCurrentX.current === null) return;
    const distance = swipeCurrentX.current - swipeStartX.current;
    if (Math.abs(distance) > 55) moveReview(distance > 0 ? -1 : 1);
    swipeStartX.current = null;
    swipeCurrentX.current = null;
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[var(--appraisal-ink)]">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[var(--appraisal-hero-bg)]">
          <div className="relative mx-auto grid w-[var(--site-width)] max-w-[var(--container-max)] items-center gap-[28px] py-[44px] sm:min-h-[650px] sm:gap-8 sm:py-[70px] lg:min-h-[745px] lg:grid-cols-[0.89fr_1.11fr] lg:gap-0 lg:py-0">
            <div className="relative z-20 mx-auto w-full max-w-[670px] text-center sm:text-left lg:mx-0 lg:-translate-y-[18px] lg:self-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.025em] text-[var(--appraisal-accent)] sm:text-[12px] lg:text-[13px]">We&apos;re here to help</p>
              <h1 className="mx-auto mt-[11px] max-w-[360px] text-[36px] font-bold leading-[1.04] tracking-[-0.034em] text-[var(--appraisal-ink)] min-[420px]:max-w-[400px] min-[420px]:text-[40px] sm:mx-0 sm:mt-[13px] sm:max-w-none sm:text-[54px] sm:leading-[1.01] sm:tracking-[-0.038em] lg:text-[64px] xl:text-[66px]">
                Get in Touch With Our Team
              </h1>
              <p className="mx-auto mt-[22px] max-w-[520px] text-[13px] leading-[1.6] text-[var(--appraisal-copy)] sm:mx-0 sm:mt-[35px] sm:max-w-[620px] sm:text-[15px] sm:leading-[1.68] lg:text-[16px]">
                Have questions about courses, subscriptions, or admissions? Connect with our team for quick assistance and expert guidance.
              </p>
              <button type="button" className="mt-[30px] h-[54px] w-full max-w-[260px] rounded-[9px] bg-[var(--appraisal-hero-button)] px-[20px] text-[13px] font-bold text-white shadow-[0_12px_28px_rgba(56,73,226,0.18)] transition duration-300 hover:-translate-y-1 hover:brightness-105 sm:mt-[50px] sm:h-[60px] sm:w-[226px]">
                Get Exclusive Access
              </button>
              <p className="mt-[18px] text-[12px] font-bold text-[var(--appraisal-primary)] sm:mt-[24px]">We&apos;re Here to Help</p>
            </div>

            <div className="relative z-10 mx-auto mt-0 h-[335px] w-full max-w-[430px] min-[420px]:h-[370px] min-[420px]:max-w-[500px] sm:mt-8 sm:h-[520px] sm:max-w-[760px] lg:mt-0 lg:h-[720px] lg:max-w-[860px] lg:translate-x-[60px] lg:self-center">
              <Image src="/gmc_hero_image.webp" alt="Medical professionals" fill priority sizes="(max-width: 1023px) 94vw, 860px" className="object-contain object-center lg:-translate-y-[52px] lg:object-right" />
              <HeroBadge icon="/trusted_doctor_icon.svg" kicker="Trusted by" title="UK Doctors" className="bottom-[34px] left-[0px] min-w-[166px] sm:bottom-[72px] sm:left-[22px] sm:min-w-[230px] lg:bottom-[197px] lg:left-[-110px] lg:min-w-[258px]" />
              <HeroBadge icon="/gmc_complaint_icon.svg" kicker="GMC-Compliant" title="Services" className="right-[0px] top-[14px] min-w-[164px] sm:right-[16px] sm:top-[30px] sm:min-w-[224px] lg:right-[4px] lg:top-[150px] lg:min-w-[245px]" />
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

        <section className="relative overflow-hidden bg-white pt-[24px] sm:pt-[34px] lg:pt-[46px] xl:pt-[54px]">
          <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="mx-auto grid max-w-[1220px] items-center gap-[42px] lg:min-h-[470px] lg:grid-cols-[0.96fr_1.04fr] lg:gap-[64px] xl:min-h-[500px] xl:gap-[76px]">
              <div className="relative mx-auto w-full max-w-[545px] lg:mx-0 lg:justify-self-end">
                <div className="relative aspect-[604/383] w-full overflow-visible">
                  <Image
                    src="/about_doctor_appraisal-iamge.webp"
                    alt="Doctor appraisal specialist"
                    fill
                    sizes="(max-width: 1023px) 86vw, 545px"
                    className="object-contain object-center"
                  />
                  <Image
                    src="/complaint_assist_image.svg"
                    alt="GMC compliant appraisal support"
                    width={187}
                    height={188}
                    className="absolute bottom-[-18px] right-[-8px] z-20 h-auto w-[118px] object-contain sm:w-[134px] lg:bottom-[-22px] lg:right-[-16px] lg:w-[145px]"
                  />
                </div>
              </div>

              <div className="mx-auto w-full max-w-[590px] text-center lg:mx-0 lg:justify-self-start lg:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--appraisal-accent)] sm:text-[11px] xl:text-[12px]">
                  About Dr Appraisals
                </p>
                <h2 className="mt-[10px] text-[32px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--appraisal-ink)] sm:text-[38px] lg:text-[42px] xl:text-[44px]">
                  Trusted UK Compliance Partner
                </h2>

                <div className="mt-[28px] space-y-[18px] text-[12px] leading-[1.75] text-[var(--appraisal-copy)] sm:text-[13px] lg:mt-[30px] lg:space-y-[20px] lg:text-[14px]">
                  <p>Dr Christopher Boyson is a UK-based General Practitioner, medical appraiser, and educator with significant expertise in clinical practice and professional development.</p>
                  <p>He serves as a Training Programme Director for postgraduate GP training, an examiner, and an NHS appraiser.</p>
                  <p>He has supported doctors across all career stages, from international medical graduates joining the NHS to experienced clinicians preparing for revalidation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-[96px] w-[var(--site-width)] max-w-[var(--container-max)] sm:mt-[112px] lg:mt-[132px] xl:mt-[148px]">
            <div className="mx-auto w-full max-w-[1010px]">
              <h2 className="text-[24px] font-bold uppercase leading-none tracking-[-0.02em] text-[var(--appraisal-ink)] sm:text-[27px] lg:text-[28px] xl:text-[30px]">
                Services Overview
              </h2>

              <div className="mt-[14px] grid gap-[14px] rounded-[24px] bg-[var(--appraisal-services-panel)] p-[16px] shadow-[0_8px_22px_rgba(33,56,111,0.05)] sm:grid-cols-2 sm:p-[18px] lg:grid-cols-3 lg:gap-[16px] lg:p-[18px] xl:gap-[18px] xl:p-[20px]">
                {services.map((service) => (
                  <article
                    key={`${service.title}-${service.detail}`}
                    className="group flex min-h-[86px] items-center gap-[12px] rounded-[20px] bg-white px-[14px] py-[12px] transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(24,38,91,0.09)] lg:min-h-[88px] lg:px-[15px] xl:min-h-[92px] xl:gap-[14px] xl:px-[16px]"
                  >
                    <span className="grid h-[54px] w-[54px] shrink-0 place-items-center rounded-[11px] bg-[var(--appraisal-icon-bg)] transition duration-300 group-hover:scale-[1.04] xl:h-[58px] xl:w-[58px]">
                      <Image src={service.icon} alt="" aria-hidden="true" width={42} height={42} className="h-[40px] w-[40px] object-contain xl:h-[43px] xl:w-[43px]" />
                    </span>
                    <h3 className="text-[14px] font-bold leading-[1.08] tracking-[-0.015em] text-black sm:text-[15px] lg:text-[15px] xl:text-[16px]">
                      {service.title}<br />{service.detail}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-0 mt-[-116px] h-[214px] w-full sm:mt-[-118px] sm:h-[230px] lg:mt-[-122px] lg:h-[242px] xl:mt-[-128px] xl:h-[258px]">
            <Image
              src="/hospital-building-building-medical-red-cross-symbolizing.webp"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className=" pointer-events-none hidden min-[426px]:block object-cover object-center"
            />
            <Image
              src="/hospital-building-mobile.webp"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className=" pointer-events-none block min-[426px]:hidden object-cover object-center"
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

        <section className="bg-white py-[78px] sm:py-[96px] lg:pb-[110px] lg:pt-[120px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="mx-auto max-w-[1480px]">
              <div className="text-center lg:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.04em] text-[var(--appraisal-accent)] sm:text-[11px] lg:text-[12px]">How it works</p>
                <h2 className="mt-[14px] text-[37px] font-bold leading-[1.05] tracking-[-0.027em] text-[var(--appraisal-ink)] sm:text-[44px] lg:text-[48px]">Your Journey to Success</h2>
              </div>

              <div className="mt-[64px] grid gap-[34px] sm:grid-cols-2 lg:mt-[94px] lg:grid-cols-4 lg:gap-0">
                {journey.map((step, index) => (
                  <article
                    key={step.title}
                    className="group relative min-h-[315px] rounded-[22px] bg-white px-[20px] py-[24px] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(31,48,102,0.08)] sm:px-[24px] lg:min-h-[345px] lg:rounded-none lg:bg-transparent lg:px-[28px] lg:py-0 lg:shadow-none lg:hover:translate-y-0 lg:hover:shadow-none xl:px-[34px]"
                  >
                    {index < journey.length - 1 ? (
                      <Image
                        src="/fourth_sec_side_support.svg"
                        alt=""
                        aria-hidden="true"
                        width={97}
                        height={289}
                        className="pointer-events-none absolute right-[-43px] top-[-36px] z-0 hidden h-[270px] w-[91px] object-contain lg:block xl:right-[-46px] xl:h-[286px] xl:w-[96px]"
                      />
                    ) : null}

                    <div className="relative z-10 h-[92px] w-full">
                      <Image src={step.idle} alt={`Step ${index + 1}`} width={step.width} height={90} className="absolute left-0 top-0 h-[88px] w-auto max-w-none object-contain object-left transition-opacity duration-300 group-hover:opacity-0" />
                      <Image src={step.active} alt="" aria-hidden="true" width={step.width} height={90} className="absolute left-0 top-0 h-[88px] w-auto max-w-none object-contain object-left opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <h3 className="relative z-10 mt-[32px] max-w-[265px] text-[19px] font-bold leading-[1.15] text-[var(--appraisal-journey-muted)] transition-colors duration-300 group-hover:text-[var(--appraisal-ink)] sm:text-[21px] lg:text-[22px] xl:text-[23px]">
                      {step.title}
                    </h3>
                    <p className="relative z-10 mt-[16px] max-w-[275px] text-[12px] leading-[1.72] text-[var(--appraisal-copy)] sm:text-[13px] lg:text-[14px] xl:text-[15px]">{step.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[var(--appraisal-reviews-bg)] py-[78px] sm:py-[98px] lg:pb-[120px] lg:pt-[120px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="mx-auto max-w-[1480px]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.02em] text-[var(--appraisal-accent)] sm:text-[11px] lg:text-[12px]">Testimonials</p>
                <h2 className="mt-[10px] max-w-[690px] text-[34px] font-bold uppercase leading-[1.03] tracking-[-0.024em] text-[var(--appraisal-ink)] sm:text-[43px] lg:text-[50px]">
                  What Do People Praise About PLABcoach?
                </h2>
              </div>

              <div
                className="relative mx-auto mt-[62px] max-w-[1320px] select-none touch-pan-y sm:mt-[78px] lg:mt-[92px]"
                onTouchStart={(event) => handleSwipeStart(event.touches[0].clientX)}
                onTouchMove={(event) => handleSwipeMove(event.touches[0].clientX)}
                onTouchEnd={handleSwipeEnd}
                onPointerDown={(event) => {
                  if (event.pointerType === "mouse") handleSwipeStart(event.clientX);
                }}
                onPointerMove={(event) => {
                  if (event.pointerType === "mouse" && swipeStartX.current !== null) handleSwipeMove(event.clientX);
                }}
                onPointerUp={(event) => {
                  if (event.pointerType === "mouse") handleSwipeEnd();
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType === "mouse" && swipeStartX.current !== null) handleSwipeEnd();
                }}
              >
                <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden px-[8px] py-[22px] sm:min-h-[590px] lg:min-h-[620px] lg:px-[54px]">
                  {reviews.map((review, index) => {
                    const rawOffset = index - reviewIndex;
                    const half = Math.floor(reviews.length / 2);
                    let offset = rawOffset;
                    if (offset > half) offset -= reviews.length;
                    if (offset < -half) offset += reviews.length;

                    const isActive = offset === 0;
                    const isNear = Math.abs(offset) === 1;
                    const isVisible = Math.abs(offset) <= 1;

                    return (
                      <article
                        key={review.name}
                        className={`absolute left-1/2 top-1/2 w-[86%] max-w-[760px] rounded-[26px] bg-[var(--appraisal-review-card)] px-[22px] pb-[30px] pt-[76px] shadow-[0_24px_64px_rgba(29,48,97,0.13)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[72%] sm:px-[38px] sm:pb-[38px] sm:pt-[86px] lg:w-[58%] lg:max-w-[720px] lg:px-[48px] lg:pb-[44px] lg:pt-[92px] ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
                        style={{
                          transform: `translate(-50%, -50%) translateX(${offset * 72}%) scale(${isActive ? 1 : isNear ? 0.82 : 0.7})`,
                          opacity: isActive ? 1 : isNear ? 0.52 : 0,
                          zIndex: isActive ? 30 : isNear ? 20 : 10,
                        }}
                      >
                        <div className="absolute left-[22px] top-[-46px] h-[106px] w-[106px] overflow-hidden rounded-full bg-white shadow-[0_8px_22px_rgba(29,48,97,0.12)] sm:left-[38px] sm:top-[-52px] sm:h-[122px] sm:w-[122px] lg:left-[48px] lg:h-[128px] lg:w-[128px]">
                          <Image src={review.image} alt={review.name} fill sizes="128px" className="object-cover object-top" />
                        </div>

                        <div className="absolute right-[18px] top-[18px] flex gap-[4px] rounded-full bg-[var(--appraisal-review-stars-bg)] px-[12px] py-[8px] sm:right-[28px] sm:top-[24px] sm:gap-[6px] sm:px-[16px]" aria-label="5 star review">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <span key={starIndex} className="text-[17px] leading-none text-[var(--appraisal-star)] sm:text-[21px]">★</span>
                          ))}
                        </div>

                        <div className="mb-[26px] ml-[118px] min-h-[42px] sm:mb-[30px] sm:ml-[140px] lg:ml-[148px]">
                          <p className="text-[17px] font-bold leading-none text-[var(--appraisal-ink)] sm:text-[20px]">{review.name}</p>
                          <p className="mt-[7px] text-[11px] font-semibold text-[var(--appraisal-card-copy)] sm:text-[13px]">{review.role}</p>
                        </div>

                        <p className={`text-[12px] leading-[1.72] text-[var(--appraisal-review-copy)] transition-opacity duration-300 sm:text-[13px] lg:text-[14px] ${isActive ? "opacity-100" : "opacity-70"}`}>{review.text}</p>
                        <p className="mt-[26px] text-[11px] font-bold text-[var(--appraisal-ink)] sm:text-[12px]">Country: {review.country}</p>
                      </article>
                    );
                  })}
                </div>

                <button type="button" aria-label="Previous review" onClick={() => moveReview(-1)} className="absolute left-[0px] top-1/2 z-40 hidden h-[50px] w-[50px] -translate-y-1/2 place-items-center rounded-full bg-[var(--appraisal-slider-arrow)] text-white shadow-[0_10px_24px_rgba(125,195,255,0.28)] transition hover:-translate-y-[55%] hover:brightness-105 sm:grid lg:left-[10px]">
                  <ArrowIcon direction="left" />
                </button>
                <button type="button" aria-label="Next review" onClick={() => moveReview(1)} className="absolute right-[0px] top-1/2 z-40 hidden h-[50px] w-[50px] -translate-y-1/2 place-items-center rounded-full bg-[var(--appraisal-slider-arrow)] text-white shadow-[0_10px_24px_rgba(125,195,255,0.28)] transition hover:-translate-y-[55%] hover:brightness-105 sm:grid lg:right-[10px]">
                  <ArrowIcon direction="right" />
                </button>

                <div className="mt-[4px] flex items-center justify-center gap-[14px] sm:mt-[10px]">
                  <button type="button" aria-label="Previous review" onClick={() => moveReview(-1)} className="grid h-[44px] w-[44px] place-items-center rounded-full bg-[var(--appraisal-slider-arrow)] text-white sm:hidden">
                    <ArrowIcon direction="left" />
                  </button>
                  <div className="flex items-center gap-[8px]">
                    {reviews.map((review, index) => (
                      <button
                        key={review.name}
                        type="button"
                        aria-label={`Go to review ${index + 1}`}
                        onClick={() => setReviewIndex(index)}
                        className={`h-[8px] rounded-full transition-all duration-300 ${index === reviewIndex ? "w-[26px] bg-[var(--appraisal-slider-arrow)]" : "w-[8px] bg-[var(--appraisal-journey-line)]/45"}`}
                      />
                    ))}
                  </div>
                  <button type="button" aria-label="Next review" onClick={() => moveReview(1)} className="grid h-[44px] w-[44px] place-items-center rounded-full bg-[var(--appraisal-slider-arrow)] text-white sm:hidden">
                    <ArrowIcon direction="right" />
                  </button>
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
