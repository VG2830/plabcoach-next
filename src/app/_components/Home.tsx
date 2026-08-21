"use client";

import Image from "next/image";
import { useState } from "react";

const stats = [
  { value: "10K+", label: "Students", icon: "/hero_sec_students_icon_1.svg" },
  { value: "95%", label: "Success Rate", icon: "/hero_sec_success_icon_1.svg" },
  { value: "100+", label: "Expert Sessions", icon: "/hero_sec_expert_icon_1.svg" },
  { value: "24/7", label: "Learning Access", icon: "/hero_sec_time_icon_1.svg" },
];

const offerTop = [
  {
    title: "Video Courses",
    description: "High-quality video lessons covering all topics in detail",
    icon: "/second_sec_video_icon_2.png",
  },
  {
    title: "Live Coaching",
    description: "Interactive live classes with expert doctors and real-time doubt solving.",
    icon: "/second_sec_live_icon_2.svg",
  },
];

const offerBottom = [
  {
    title: "Mock Exams",
    description: "Realistic mock tests that simulate the actual exam environment.",
    icon: "/second_sec_exam_icon_2.svg",
  },
  {
    title: "Smart Tools",
    description: "Performance tracking, notes, flashcards and personalized study plans.",
    icon: "/second_sec_setting_icon_2.svg",
  },
];

const offerTall = [
  {
    title: "Question Bank",
    description: "High-yield questions with detailed explanations and exam-style practice",
    icon: "/second_sec_question_icon_2.svg",
  },
  {
    title: "Mentor Support",
    description: "One-to-one guidance from UK-based medical professionals.",
    icon: "/second_sec_mentor_icon_2.svg",
  },
];

const trustPoints = [
  "Created by UK doctors with real NHS experience",
  "Structured curriculum aligned with GMC standards",
  "Supports PLAB 1, PLAB 2 & MRCP (PACES & Part 1)",
  "High-quality resources and exam-focused content",
  "Flexible learning to fit your schedule",
  "Trusted by thousands of international doctors",
];

const journey = [
  { number: "01", title: "Join", text: "Create your account in minutes" },
  { number: "02", title: "Learn", text: "Access structured courses & resources" },
  { number: "03", title: "Practice", text: "Solve questions & improve continuously" },
  { number: "04", title: "Mock Tests", text: "Take mock exams & track performance" },
  { number: "05", title: "Pass Exam", text: "Build confidence & achieve your dream" },
];

const featuredCourses = ["PLAB 1", "PLAB 1", "PLAB 1", "PLAB 1"];

const videoBenefits = [
  {
    title: "Expert-Led Learning",
    text: "Learn complex medical concepts with clear, structured explanations.",
    icon: "/video_expert_icon.svg",
  },
  {
    title: "Exam-Focused Strategies",
    text: "Discover practical approaches to tackle questions and manage your preparation.",
    icon: "/video_strategy_icon.svg",
  },
  {
    title: "Clinical Concepts Explained",
    text: "Build stronger understanding through concise, easy-to-follow lessons.",
    icon: "/video_clinical_icon.svg",
  },
  {
    title: "PLAB Preparation Tips",
    text: "Get useful guidance to prepare smarter and approach your exam with confidence",
    icon: "/video_tip_icon.svg",
  },
  {
    title: "Study & Success Insights",
    text: "Learn proven ways to organise your preparation and stay on track.",
    icon: "/video_insight_icon.svg",
  },
];

const subscriptionCourses = [
  "01 UK PLAB/UKMLA Courses",
  "01 UK PLAB/UKMLA Courses",
  "01 UK PLAB/UKMLA Courses",
];

const testimonials = [
  {
    name: "Dr. Adeel Khan",
    image: "/third_section_dr_img.png",
    exam: "PLAB 2",
    location: "United Kingdom",
    quote: "PLABcoach question bank and mocks were extremely helpful. I cleared PLAB 2 in my first attempt! PLABcoach question bank and mocks were extremely helpful. I cleared PLAB 2 in my first attempt! PLABcoach question bank and mocks were extremely helpful. I cleared PLAB 2 in my first attempt!",
  },
  {
    name: "Dr. Priya Sharma",
    image: "/fifth_sec_card_img.png",
    exam: "PLAB 1",
    location: "India",
    quote: "The course gave me a clear plan instead of leaving me to figure everything out alone. I could revise at my own pace and use the mocks to understand exactly where I needed to improve.",
  },
  {
    name: "Dr. Mohammed Ali",
    image: "/offer_section_image.png",
    exam: "UKMLA",
    location: "UAE",
    quote: "I found the combination of concise teaching, practical questions and mentor guidance very useful. It kept my preparation focused and helped me build consistency week after week.",
  },
  {
    name: "Dr. Sara Wilson",
    image: "/hero_banner_image.png",
    exam: "PRES",
    location: "Ireland",
    quote: "The platform made a difficult syllabus feel manageable. The learning path was easy to follow and the practice resources helped me turn weak areas into strengths before the exam.",
  },
];

const faqs = [
  {
    question: "What exams does PLABCoach provide preparation for?",
    answer: "PLABCoach supports preparation for UK PLAB / UKMLA pathways, PLAB 1, PLAB 2, PRES and selected MRCP-focused learning programmes. Course availability may vary by exam cycle.",
  },
  {
    question: "Does PLABCoach offer live coaching?",
    answer: "Yes. Selected programmes include live expert-led sessions, guided revision and opportunities to ask questions alongside self-paced learning resources.",
  },
  {
    question: "Is there a mobile app available?",
    answer: "The learning experience is designed to work smoothly across modern browsers and mobile screens, so you can continue studying when you are away from your laptop.",
  },
  {
    question: "Are the mock exams similar to the real exam?",
    answer: "Mocks are built to reflect exam-style timing, question patterns and decision-making pressure so you can practise in a focused, realistic environment.",
  },
  {
    question: "Can I get mentor support?",
    answer: "Mentor support is available with selected courses and coaching plans, including guidance from experienced medical educators and UK-based professionals.",
  },
  {
    question: "How can I get started?",
    answer: "Choose the course that matches your target exam, create your account and begin with the recommended learning path. You can explore the course catalogue before enrolling.",
  },
];

const socialLabels = ["facebook", "linkedin", "instagram", "x", "whatsapp"];

function OfferCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <article className="group flex h-full flex-col justify-start rounded-[28px] border border-white/55 bg-[var(--soft-blue)] px-6 py-7 shadow-[0_10px_30px_rgba(36,70,128,0.035)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-[#e6efff]/90 hover:shadow-[0_20px_42px_rgba(36,70,128,0.10)] lg:px-7 lg:py-8">
      <Image src={icon} alt="" width={60} height={60} className="mb-5 h-[54px] w-[54px] transition-transform duration-300 group-hover:scale-[1.06]" />
      <h3 className="text-[22px] font-bold leading-tight text-[var(--ink)]">{title}</h3>
      <p className="mt-3 max-w-[310px] text-[15px] leading-7 text-[var(--body-muted)]">{description}</p>
    </article>
  );
}

function CourseCard({ title }: { title: string }) {
  return (
    <article className="group relative min-h-[492px] overflow-hidden rounded-[30px] bg-black shadow-[0_14px_34px_rgba(15,34,68,0.10)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_26px_54px_rgba(15,34,68,0.18)]">
      <Image
        src="/fifth_sec_card_img.png"
        alt="Doctor preparing for a medical exam"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover object-center transition duration-500 group-hover:scale-[1.025]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/5 to-black/95" />
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-5">
        <h3 className="text-[24px] font-bold leading-tight text-white">{title}</h3>
        <p className="mt-2 max-w-[285px] text-[15px] leading-6 text-white/80">
          Complete preparation for PLAB 1 with practice questions &amp; mocks.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-[12px] text-white">
          <span className="rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-sm">120+ Videos</span>
          <span className="rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-sm">5 Mock Tests</span>
        </div>
        <button className="mt-5 h-[58px] w-full rounded-[12px] bg-[var(--accent)] text-[16px] font-semibold text-white transition hover:brightness-105">
          Explore →
        </button>
      </div>
    </article>
  );
}

function SubscriptionCard({ title }: { title: string }) {
  return (
    <article className="group relative min-h-[530px] cursor-pointer overflow-hidden rounded-[30px] bg-black shadow-[0_12px_32px_rgba(15,34,68,0.08)] ring-1 ring-black/[0.02] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_28px_64px_rgba(15,54,104,0.22)] hover:ring-[#3c8ee8]/25">
      <Image
        src="/woman-teaching-her-student-english.png"
        alt="Medical course"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.055]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/95 transition-colors duration-500 group-hover:via-black/5 group-hover:to-black" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18),transparent_34%,transparent_68%,rgba(71,151,255,0.15))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute left-5 top-5 z-10 flex items-center gap-2 text-[12px] font-semibold text-[var(--primary)] transition-transform duration-500 group-hover:translate-x-1">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white/90 shadow-[0_5px_16px_rgba(0,0,0,0.08)]">●</span>
        <span>2 Courses</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-6 transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
        <h3 className="max-w-[270px] text-[22px] font-semibold leading-[1.05] text-white">{title}</h3>
        <p className="mt-3 text-[14px] leading-6 text-white/75 transition-colors duration-500 group-hover:text-white/90">
          Comprehensive preparation for PLAB and UKMLA exams with expert-designed study modules, practice questions, and video lessons.
        </p>
        <button className="mt-6 h-[52px] w-full rounded-[10px] bg-[var(--primary)] text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(0,86,168,0.18)] transition-all duration-300 group-hover:bg-[#0872d0] group-hover:shadow-[0_14px_30px_rgba(0,86,168,0.30)]">
          View Courses
        </button>
      </div>
    </article>
  );
}

function SocialIcon({ label }: { label: string }) {
  const common = "h-[18px] w-[18px] fill-white";
  if (label === "facebook") {
    return <svg className={common} viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.2l.8-4H13V9c0-.7.3-1 1-1Z" /></svg>;
  }
  if (label === "linkedin") {
    return <svg className={common} viewBox="0 0 24 24"><path d="M5 8.2H1.8V22H5V8.2ZM3.4 2A2 2 0 1 0 3.4 6 2 2 0 0 0 3.4 2ZM22 14c0-4.2-2.2-6.1-5.2-6.1-2.4 0-3.5 1.3-4.1 2.2V8.2H9.5V22h3.2v-6.8c0-1.8.3-3.6 2.7-3.6 2.3 0 2.4 2.2 2.4 3.7V22H22V14Z" /></svg>;
  }
  if (label === "instagram") {
    return <svg className={common} viewBox="0 0 24 24"><path fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM17.7 6.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" clipRule="evenodd" /></svg>;
  }
  if (label === "x") {
    return <svg className={common} viewBox="0 0 24 24"><path d="M18.8 2H22l-7 8 8.2 12h-6.4l-5-6.6L6 22H2.8l7.5-8.6L2.4 2H9l4.5 6 5.3-6Zm-1.1 17.9h1.8L8 4H6.1l11.6 15.9Z" /></svg>;
  }
  return <svg className={common} viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 17.8a7.8 7.8 0 0 1-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3A7.8 7.8 0 1 1 12 19.8Zm4.3-5.8c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.6.1a6.2 6.2 0 0 1-3-2.6c-.2-.4.2-.4.7-1.2.1-.2.1-.4 0-.6l-.8-1.9c-.2-.5-.5-.4-.7-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.2-.6-.4Z" /></svg>;
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeJourney, setActiveJourney] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);

  const goToTestimonial = (direction: number) => {
    setActiveTestimonial((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-black/[0.05] bg-white/95 backdrop-blur-md">
        <div className="mx-auto grid h-[var(--header-height)] w-[var(--site-width)] max-w-[var(--container-max)] grid-cols-[1fr_auto_1fr] items-center gap-5">
          <nav className="hidden items-center gap-8 text-[14px] font-medium text-[var(--nav-muted)] lg:flex">
            <a href="#courses" className="flex items-center gap-1.5 transition hover:text-[var(--primary)]">
              Courses <span className="text-[11px]"><Image src="/course_header_arrow.svg" alt="Expand question" width={8} height={4}  className="w-2 h-auto" /></span>
            </a>
            <a href="#exam-dates" className="font-semibold text-[var(--accent)]">Important Exam Dates</a>
            <a href="#blogs" className="transition hover:text-[var(--primary)]">Blogs</a>
            <a href="#about-us" className="transition hover:text-[var(--primary)]">About Us</a>
          </nav>

          <a href="#top" aria-label="PLABCOACH home" className="justify-self-center">
            <Image src="/new_plabcoach.png" width={212} height={57} alt="PLABCOACH" className="h-auto w-[145px] sm:w-[190px] lg:w-[212px]" priority />
          </a>

          <div className="flex items-center justify-end gap-7">
            <a href="#sign-in" className="hidden text-[14px] font-medium text-[var(--nav-muted)] sm:inline">Sign in</a>
            <button className="h-[48px] rounded-[12px] bg-[var(--primary)] px-4 text-[13px] font-semibold text-white transition hover:brightness-105 sm:h-[52px] sm:px-7 sm:text-[15px]">
              Login Now
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[var(--hero-bg)]">
          <div className="relative mx-auto min-h-[640px] w-[var(--site-width)] max-w-[var(--container-max)] sm:min-h-[680px] lg:h-[650px] lg:min-h-0 xl:h-[690px] 2xl:h-[700px]">
            <Image
              src="/hero_banner_bg_ellipse.png"
              alt=""
              aria-hidden="true"
              width={1382}
              height={1382}
              className="pointer-events-none absolute hidden h-[1382px] w-[1382px] max-w-none lg:block lg:-right-[385px] lg:-top-[455px]"
              priority
            />

            <div className="relative z-20 max-w-[700px] pt-16 sm:pt-[88px] lg:pt-[92px] xl:pt-[108px] 2xl:pt-[112px]">
              <p className="text-[12px] font-semibold leading-none text-[var(--accent)] sm:text-[13px]">
                Trusted Medical Learning Platform
              </p>
              <h1 className="mt-[14px] max-w-[700px] text-[43px] font-bold leading-[1.07] tracking-[-0.032em] text-[var(--ink)] sm:text-[52px] lg:text-[58px] xl:text-[62px]">
                Prepare for PLAB &amp; UK Medical Exams with Confidence
              </h1>
              <p className="mt-7 max-w-[620px] text-[14px] leading-[1.8] text-[var(--body-muted)] sm:text-[15px] lg:mt-[30px] xl:mt-[34px]">
                Expert-led coaching, question banks, mock exams and structured learning designed to help international doctors succeed.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 lg:mt-[34px] lg:gap-[24px] xl:mt-[42px]">
                <button type="button" className="h-[58px] min-w-[196px] rounded-[9px] bg-[var(--primary)] px-9 text-[14px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-105 xl:h-[61px] xl:min-w-[228px]">Start Learning</button>
                <button type="button" className="h-[58px] min-w-[196px] rounded-[9px] border-[1.5px] border-[var(--button-border)] bg-transparent px-9 text-[14px] font-semibold text-[var(--button-muted)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/45 xl:h-[61px] xl:min-w-[228px]">Explore Courses</button>
              </div>
            </div>

            <Image
              src="/man-woman-wearing-capes.png"
              alt="Doctors preparing international medical learners"
              width={725}
              height={664}
              priority
              className="absolute right-[-18px] top-[28px] z-10 hidden h-auto w-[610px] max-w-none lg:block xl:right-[10px] xl:w-[660px] 2xl:right-[18px] 2xl:w-[690px]"
            />
          </div>
        </section>

        <section className="relative z-30 -mt-[78px] lg:-mt-[88px] xl:-mt-[94px]">
          <div className="relative mx-auto w-[var(--site-width)] max-w-[var(--container-max)] overflow-hidden rounded-[30px] border border-white/55 bg-white/[0.16] shadow-[0_18px_48px_rgba(48,72,128,0.10),inset_0_1px_0_rgba(255,255,255,0.78)] backdrop-blur-[20px] backdrop-saturate-[135%]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.34)_0%,rgba(225,236,255,0.18)_36%,rgba(207,226,255,0.11)_68%,rgba(255,255,255,0.24)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_8%,rgba(255,255,255,0.42),transparent_34%),radial-gradient(circle_at_76%_100%,rgba(205,225,255,0.18),transparent_38%)]" />
            <div className="pointer-events-none absolute -left-[8%] -top-[75%] h-[210%] w-[48%] rotate-[14deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)] blur-2xl" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="relative grid min-h-[170px] grid-cols-2 md:grid-cols-4 lg:min-h-[205px] xl:min-h-[230px]">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`relative flex items-center justify-center gap-4 px-4 py-6 lg:gap-[20px] xl:gap-[22px] ${index < stats.length - 1 ? "border-r border-white/65" : ""}`}>
                  <Image src={stat.icon} alt="" width={82} height={82} className="relative h-[64px] w-[64px] drop-shadow-[0_8px_18px_rgba(78,94,225,0.10)] lg:h-[72px] lg:w-[72px] xl:h-[82px] xl:w-[82px]" />
                  <div className="relative">
                    <div className="text-[32px] font-bold leading-none tracking-[-0.035em] text-[var(--ink)] lg:text-[40px] xl:text-[46px]">{stat.value}</div>
                    <div className="mt-2 text-[13px] font-normal text-[var(--accent)] lg:text-[15px] xl:text-[18px]">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white pb-[118px] pt-[72px] lg:pb-[126px] lg:pt-[78px] xl:pt-[82px]">
          <Image
            src="/ellipse_offer_section.png"
            alt=""
            width={1116}
            height={815}
            aria-hidden="true"
            className="pointer-events-none absolute -right-[210px] -top-[20px] hidden w-[920px] max-w-none  lg:block xl:-right-[175px] xl:-top-[15px] xl:w-[980px] 2xl:-right-[145px] 2xl:w-[1040px]"
          />
          <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="mb-10 lg:mb-12">
              <p className="text-[13px] font-semibold uppercase tracking-[0.01em] text-[var(--accent)]">What We Offer</p>
              <h2 className="mt-1 text-[38px] font-bold leading-tight tracking-[-0.025em] text-[var(--ink)] lg:text-[46px]">Everything You Need to Succeed</h2>
              <p className="mt-3 text-[15px] text-[var(--body-muted)]">Comprehensive resources and expert guidance for your UK medical journey</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.96fr_2fr]">
              <div className="group relative min-h-[420px] overflow-hidden rounded-[28px] shadow-[0_12px_30px_rgba(25,53,96,0.04)] lg:min-h-[560px]">
                <Image src="/offer_section_image.png" alt="Medical learner" fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
              </div>

              <div className="grid gap-5 md:grid-cols-1 xl:grid-cols-[1.75fr_1fr]">
                <div className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-[0.75fr_1.15fr]">
                    {offerTop.map((feature) => <OfferCard key={feature.title} {...feature} />)}
                  </div>
                  <div className="grid gap-5 sm:grid-cols-[1.15fr_0.75fr]">
                    {offerBottom.map((feature) => <OfferCard key={feature.title} {...feature} />)}
                  </div>
                </div>
                <article className="grid overflow-hidden rounded-[28px] border border-white/55 bg-[var(--soft-blue)] shadow-[0_10px_30px_rgba(36,70,128,0.035)] sm:grid-cols-2 xl:grid-cols-1 xl:grid-rows-2">
                  {offerTall.map((feature, index) => (
                    <div key={feature.title} className={`group px-6 py-7 transition-all duration-300 hover:bg-white/28 lg:px-7 lg:py-8 ${index === 0 ? "border-b border-[var(--divider)] sm:border-b-0 sm:border-r xl:border-b xl:border-r-0" : ""}`}>
                      <Image src={feature.icon} alt="" width={60} height={60} className="mb-5 h-[54px] w-[54px] transition-transform duration-300 group-hover:scale-[1.06]" />
                      <h3 className="text-[22px] font-bold leading-tight">{feature.title}</h3>
                      <p className="mt-3 text-[15px] leading-7 text-[var(--body-muted)]">{feature.description}</p>
                    </div>
                  ))}
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="about-us" className="bg-[var(--section-gray)] py-[110px] lg:py-[125px]">
          <div className="mx-auto grid w-[var(--site-width)] max-w-[var(--container-max)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <p className="text-[13px] font-semibold uppercase text-[var(--accent)]">Why PLABCoach</p>
              <h2 className="mt-2 max-w-[660px] text-[42px] font-bold leading-[1.12] tracking-[-0.025em] lg:text-[52px]">Prepared by Doctors. Trusted by Thousands.</h2>
              <div className="mt-10 space-y-7">
                {trustPoints.map((point, index) => (
                  <div key={point} className={`flex items-center gap-4 text-[16px] ${index === 0 ? "font-semibold text-[var(--ink)]" : "text-[var(--body-muted)]"}`}>
                    <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[14px] text-white ${index === 0 ? "bg-[#2f99f0]" : "bg-[#8dccff]"}`}>✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex flex-wrap gap-5">
                <button className="h-[60px] min-w-[220px] rounded-[12px] bg-[var(--primary)] px-9 text-[15px] font-semibold text-white">Start Learning</button>
                <button className="h-[60px] min-w-[220px] rounded-[12px] border-2 border-[#777] bg-transparent px-9 text-[15px] font-semibold text-[#777]">Explore Courses</button>
              </div>
            </div>

            <div className="relative mx-auto h-[520px] w-full max-w-[650px] lg:h-[560px]">
              <Image src="/third_sec_upfront_img.png" alt="" width={728} height={554} aria-hidden="true" className="absolute inset-0 h-full w-full object-contain" />
              <div className="absolute left-[24%] top-[3%] h-[78%] w-[65%] overflow-hidden rounded-[34px]">
                <Image src="/third_section_dr_img.png" alt="Doctor studying on a laptop" fill sizes="(max-width: 1024px) 70vw, 34vw" className="object-cover object-center" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-[104px] lg:min-h-[650px] lg:py-[118px] xl:min-h-[665px] xl:py-[122px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.01em] text-[var(--accent)]">How It Works</p>
            <h2 className="mt-[8px] text-[42px] font-bold tracking-[-0.028em] lg:text-[50px] xl:text-[52px]">Your Journey to Success</h2>

            <div className="mt-[76px] grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-0 lg:mt-[88px] xl:mt-[92px]">
              {journey.map((step, index) => {
                const isActive = activeJourney === index;

                return (
                <button type="button" key={step.number} onClick={() => setActiveJourney(index)} className="group relative flex min-h-[250px] flex-col items-center text-center">
                  <div className={`text-[108px] font-black leading-[0.8] tracking-[-0.055em] transition-all duration-300 lg:text-[116px] xl:text-[122px] ${isActive ? "text-[var(--primary)]" : "text-transparent [-webkit-text-stroke:3px_var(--journey-outline)] group-hover:text-[var(--primary)] group-hover:[-webkit-text-stroke:0px_transparent]"}`}>
                    {step.number}
                  </div>
                  <h3 className={`mt-8 text-[22px] font-bold transition-colors duration-300 ${isActive ? "text-black" : "text-[#777] group-hover:text-black"}`}>{step.title}</h3>
                  <p className="mt-4 max-w-[220px] text-[15px] leading-7 text-[#777] transition-colors duration-300 group-hover:text-[#5e5e5e]">{step.text}</p>
                  {index < journey.length - 1 && (
                    <Image src="/fourth_sec_side_support.svg" alt="" width={97} height={289} aria-hidden="true" className="absolute -right-[48px] top-[-30px] hidden h-[230px] w-[77px] md:block lg:-right-[50px] lg:h-[252px] lg:w-[84px] xl:-right-[51px] xl:h-[262px] xl:w-[88px]" />
                  )}
                </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="courses" className="relative overflow-hidden bg-[var(--courses-bg)] py-[92px] lg:py-[104px] xl:py-[112px]">
          <Image
            src="/featured_courses_ellipse.png"
            alt=""
            width={1332}
            height={689}
            aria-hidden="true"
            className="pointer-events-none absolute -left-[115px] -top-[105px] hidden w-[1040px] max-w-none  lg:block xl:-left-[95px] xl:-top-[92px] xl:w-[1120px] 2xl:-left-[65px] 2xl:w-[1180px]"
          />
          <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <p className="text-[13px] font-semibold uppercase text-[var(--accent)]">Featured Courses</p>
            <h2 className="mt-2 text-[42px] font-bold leading-tight tracking-[-0.025em] lg:text-[50px]">Popular Exam Preparations</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {featuredCourses.map((course, i) => <CourseCard key={`${course}-${i}`} title={course} />)}
            </div>
          </div>
        </section>

        <section className="relative overflow-x-clip overflow-y-visible bg-white py-[82px] lg:py-[98px] xl:py-[105px]">
          <Image
            src="/featured_courses_ellipse.png"
            alt=""
            width={1332}
            height={689}
            aria-hidden="true"
            className="pointer-events-none absolute left-[7%] -top-[115px] hidden w-[1060px] max-w-none  lg:block xl:left-[8%] xl:-top-[105px] xl:w-[1120px] 2xl:left-[9%] 2xl:w-[1190px]"
          />
          <div className="relative z-10 mx-auto grid w-[var(--site-width)] max-w-[var(--container-max)] items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 xl:gap-20">
            <div className="relative min-h-[430px] sm:min-h-[520px] lg:min-h-[575px] xl:min-h-[600px] 2xl:ml-[calc((1480px-100vw)/2)] 2xl:min-h-[625px] 2xl:w-[calc(100%+(100vw-1480px)/2+92px)]">
              <div className="pointer-events-none absolute bottom-[11%] left-[12%] h-[56px] w-[76%] rounded-full bg-[#243f79]/10 blur-3xl" />
              <Image src="/video_learning_laptop.png" alt="PLABCoach video lesson on a laptop" fill sizes="(max-width: 1024px) 100vw, (max-width: 1535px) 50vw, 62vw" className="origin-left object-contain object-left transition-transform duration-500 hover:scale-[1.008] 2xl:scale-[1.10] 2xl:hover:scale-[1.115]" />
            </div>
            <div className="relative z-10 lg:py-4">
              <p className="text-[13px] font-semibold uppercase text-[var(--accent)]">Video Learning</p>
              <h2 className="mt-2 max-w-[620px] text-[42px] font-bold leading-[1.12] tracking-[-0.025em] lg:text-[50px]">Learn From Experts. Prepare With Confidence</h2>
              <p className="mt-4 max-w-[670px] text-[16px] leading-7 text-[var(--body-muted)]">Watch expert-led lessons, exam strategies, clinical concepts and practical guidance designed to make your preparation more focused and effective.</p>
              <div className="mt-9 space-y-5">
                {videoBenefits.map((benefit) => (
                  <div key={benefit.title} className="group flex items-center gap-5 rounded-2xl p-1 transition duration-300 hover:translate-x-1">
                    <Image src={benefit.icon} alt="" width={51} height={51} className="h-[48px] w-[48px] shrink-0 transition duration-300 group-hover:scale-105" />
                    <div>
                      <h3 className="text-[15px] font-bold text-[var(--ink)]">{benefit.title}</h3>
                      <p className="mt-1 text-[15px] leading-6 text-[var(--body-muted)]">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-[95px] lg:py-[110px]">
          <div className="mx-auto grid w-[var(--site-width)] max-w-[var(--container-max)] gap-8 lg:grid-cols-[280px_1fr] lg:gap-10">
            <aside className="flex flex-col">
              <p className="text-[12px] font-semibold uppercase text-[#7d56ff]">Our Courses</p>
              <h2 className="mt-2 text-[34px] font-bold leading-[1.08] text-black lg:text-[42px]">Subscription-Based Coaching</h2>
              <p className="mt-4 text-[14px] leading-6 text-[#676767]">At PLABcoach, we understand the importance of flexibility in your learning journey. Our self-paced learning modules let you study at your own convenience with expert-curated content, question banks, and video lessons - tailored to fit your schedule and goals.</p>
              <div className="mt-8 bg-[#f4f9ff] p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-sm">◈</span>
                <p className="mt-4 text-[13px] font-semibold leading-5 text-black">Learn at your pace. Prepare with confidence. Succeed in your exams.</p>
                <p className="mt-4 text-[13px] leading-5 text-[#777]">Trusted by thousands of medical professionals worldwide</p>
              </div>
              <button className="mt-auto h-[52px] rounded-[10px] border-2 border-[#2184ff] text-[14px] font-semibold text-[#2184ff] lg:mt-9">Browse All Courses&nbsp;&nbsp; →</button>
            </aside>
            <div className="grid gap-6 md:grid-cols-3">
              {subscriptionCourses.map((course, i) => <SubscriptionCard key={`${course}-${i}`} title={course} />)}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[var(--testimonial-bg)] py-[82px] sm:py-[95px] lg:min-h-[820px] lg:pb-[120px] lg:pt-[108px] xl:min-h-[875px] xl:pt-[116px]">
          <div className="relative mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div>
              <p className="text-[12px] font-semibold uppercase leading-none tracking-[0.01em] text-[var(--accent)] xl:text-[13px]">What Our Students Say</p>
              <h2 className="mt-[10px] max-w-[680px] text-[38px] font-bold leading-[1.05] tracking-[-0.025em] lg:text-[46px] xl:text-[48px]">Success Stories from Around the World</h2>
            </div>

            <div className="relative mt-9 min-h-[430px] lg:mt-[44px] lg:min-h-[500px] xl:mt-[50px] xl:min-h-[520px]">
              <div aria-hidden="true" className="pointer-events-none absolute left-[146px] right-[146px] top-[-22px] hidden h-[78px] rounded-[30px] bg-white/[0.85] shadow-[0_16px_46px_rgba(35,35,35,0.14)] lg:block" />

              <div className="hidden lg:block">
                {testimonials.map((item, index) => {
                  const offset = (index - activeTestimonial + testimonials.length) % testimonials.length;
                  const positionClass = offset === 0
                    ? "left-[120px] right-[120px] top-0 z-20 min-h-[242px] rounded-[30px] bg-white shadow-[0_24px_60px_rgba(32,32,32,0.18)]"
                      : offset === 1
                        ? "left-[144px] right-[144px] top-[212px] z-[17] h-[118px] rounded-[28px] bg-[#e9e9e9] shadow-[0_18px_45px_rgba(38,38,38,0.14)]"
                      : offset === 2
                        ? "left-[160px] right-[160px] top-[278px] z-[16] h-[115px] rounded-[27px] bg-[#d7d7d7] shadow-[0_16px_42px_rgba(38,38,38,0.13)]"
                        : "left-[176px] right-[176px] top-[344px] z-[15] h-[114px] rounded-[26px] bg-[#c7c7c7] shadow-[0_14px_38px_rgba(38,38,38,0.12)]";

                  return (
                    <button
                      type="button"
                      key={item.name}
                      onClick={() => offset !== 0 && setActiveTestimonial(index)}
                      disabled={offset === 0}
                      aria-label={offset === 0 ? `${item.name} testimonial` : `Show testimonial from ${item.name}`}
                      className={`group absolute overflow-hidden text-left transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${positionClass} ${offset === 0 ? "cursor-default" : "cursor-pointer hover:-translate-y-1 hover:bg-white"}`}
                    >
                      <div className={`pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-500 ${offset === 0 ? "opacity-100" : "opacity-0"}`} />

                      {offset === 0 ? (
                        <div className="px-[26px] py-[24px]">
                          <div className="flex items-start justify-between gap-6">
                            <div className="flex items-center gap-4">
                              <span className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full shadow-[0_5px_14px_rgba(0,0,0,0.08)] ring-2 ring-white">
                                <Image src={item.image} alt="" fill sizes="68px" className="object-cover" />
                              </span>
                              <span className="text-[20px] font-semibold text-black">{item.name}</span>
                            </div>
                            <span className="mt-2 shrink-0 text-[24px] tracking-[2px] text-[#f2d500]">★★★★★</span>
                          </div>
                          <div className="mt-[14px] grid grid-cols-[40px_1fr_40px] items-start gap-[12px]">
                            <span className="text-[52px] font-black leading-[0.9] text-[#9dcfff]">“</span>
                            <p className="pt-1 text-[14px] leading-[1.62] text-[#777777]">{item.quote}</p>
                            {/* <span className="self-end text-right text-[52px] font-black leading-[0.75] text-[#9dcfff]">”</span> */}
                            <span className="self-end text-right text-[52px] font-black leading-[0.75] text-[#9dcfff] -scale-y-100">”</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex h-full items-center justify-between px-8">
                          <div className="flex items-center gap-4 transition-transform duration-500 group-hover:translate-x-1">
                            <span className="relative h-[54px] w-[54px] shrink-0 overflow-hidden rounded-full ring-2 ring-white">
                              <Image src={item.image} alt="" fill sizes="54px" className="object-cover" />
                            </span>
                            <span className="block text-[18px] font-semibold text-black">{item.name}</span>
                          </div>
                          <span className="pr-1 text-[21px] tracking-[2px] text-[#f2d500]">★★★★★</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <article className="relative z-20 mx-auto min-h-[238px] rounded-[26px] bg-white px-6 py-6 shadow-[0_24px_60px_rgba(32,32,32,0.18)] sm:px-8 lg:hidden">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full ring-2 ring-white">
                      <Image src={testimonials[activeTestimonial].image} alt="" fill sizes="60px" className="object-cover" />
                    </span>
                    <span className="text-[18px] font-semibold text-black">{testimonials[activeTestimonial].name}</span>
                  </div>
                  <span className="mt-2 shrink-0 text-[18px] tracking-[1px] text-[#f2d500] sm:text-[20px]">★★★★★</span>
                </div>
                <div className="mt-4 grid grid-cols-[30px_1fr_30px] items-start gap-2 sm:grid-cols-[36px_1fr_36px] sm:gap-3">
                  <span className="text-[42px] font-black leading-[0.9] text-[#9dcfff] sm:text-[46px]">“</span>
                  <p className="pt-1 text-[13px] leading-[1.65] text-[#777777]">{testimonials[activeTestimonial].quote}</p>
                  <span className="self-end text-right text-[42px] font-black leading-[0.75] text-[#9dcfff] sm:text-[46px]">”</span>
                </div>
              </article>

              <div className="relative z-30 mt-6 flex justify-center gap-3 lg:absolute lg:right-[40px] lg:top-[58px] lg:mt-0 lg:flex-col lg:gap-[32px]">
                <button type="button" onClick={() => goToTestimonial(-1)} aria-label="Previous testimonial" className="group grid h-[40px] w-[40px] place-items-center rounded-full bg-white text-[18px] text-black shadow-[0_6px_18px_rgba(28,28,28,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(28,28,28,0.16)]"><span className="transition-transform duration-300 group-hover:-translate-y-0.5"><Image src="/up_arrow.svg" alt="Previous testimonial" width={20} height={20}  className="w-5 h-auto"/></span></button>
                <button type="button" onClick={() => goToTestimonial(1)} aria-label="Next testimonial" className="group grid h-[40px] w-[40px] place-items-center rounded-full bg-white text-[18px] text-black shadow-[0_6px_18px_rgba(28,28,28,0.10)] transition-all duration-300 hover:translate-y-1 hover:shadow-[0_10px_24px_rgba(28,28,28,0.16)]"><span className="transition-transform duration-300 group-hover:translate-y-0.5"><Image src="/down_arrow.svg" alt="Next testimonial" width={20} height={20}  className="w-5 h-auto"/></span></button>
              </div>

              <div className="mt-5 flex justify-center gap-2 lg:hidden">
                {testimonials.map((item, index) => (
                  <button
                    type="button"
                    key={`${item.name}-dot`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${index === activeTestimonial ? "w-7 bg-[var(--primary)]" : "w-2 bg-[#cbd2df]"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="relative overflow-hidden bg-white py-[90px] lg:py-[112px]">
          <Image src="/ellipse_offer_section.png" alt="" width={1116} height={815} aria-hidden="true" className="pointer-events-none absolute -right-[210px] -top-[270px] hidden w-[850px] max-w-none opacity-[0.055] lg:block xl:-right-[165px] xl:-top-[285px] xl:w-[930px]" />
          <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
              <div>
                <p className="text-[12px] font-semibold uppercase text-[var(--accent)]">Frequently Asked Questions</p>
                <h2 className="mt-2 text-[36px] font-bold leading-tight tracking-[-0.025em] lg:text-[46px]">Any question? We got you</h2>
                <div className="mt-8 space-y-3">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div key={faq.question} className={`overflow-hidden rounded-[12px] border transition duration-300 ${isOpen ? "border-[var(--ink)]/10 bg-white shadow-[0_12px_30px_rgba(32,47,95,0.08)]" : "border-transparent bg-[#f0f2ff] hover:bg-[#e9edff]"}`}>
                        <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} className={`flex w-full items-center justify-between gap-5 px-5 py-4 text-left text-[13px] font-semibold transition ${isOpen ? "bg-[var(--ink)] text-white" : "text-[#535b72]"}`} aria-expanded={isOpen}>
                          <span>{faq.question}</span>
                          <span className={`text-[17px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}><Image src="/fb_down_arrow.svg" alt="Expand question" width={12} height={12}  className="w-4 h-auto" /></span>
                        </button>
                        <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                          <div className="overflow-hidden">
                            <p className="px-5 py-4 text-[13px] leading-6 text-[#6f7280]">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <aside className="rounded-[28px] border border-[#e4e8ff] bg-[linear-gradient(135deg,#f4f5ff,#e9edff)] p-7 shadow-[0_18px_44px_rgba(39,54,116,0.07)] lg:mb-1 lg:p-8">
                {/* <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[22px] text-[var(--primary)] shadow-sm">?</div> */}
                <h3 className="mt-5 text-[22px] font-bold text-black">Still have a question?</h3>
                <p className="mt-3 text-[13px] leading-6 text-[#74798a]">Can’t find the answer you need? Send us an email and our team will get back to you as soon as possible.</p>
                <button type="button" className="mt-6 h-[48px] rounded-[10px] bg-[var(--primary)] px-6 text-[13px] font-semibold text-white shadow-[0_12px_24px_rgba(11,93,168,0.18)] transition hover:-translate-y-0.5 hover:brightness-105">Start Learning</button>
              </aside>
            </div>

            <div className="relative mt-16 overflow-visible rounded-[30px] bg-[#09539F] px-7 py-10 shadow-[0_24px_60px_rgba(8,77,145,0.18)] sm:px-10 lg:mt-[82px] lg:min-h-[455px] lg:px-[88px] lg:py-0 xl:min-h-[468px]">
              <div className="pointer-events-none absolute inset-0 opacity-[0.24] [background-image:linear-gradient(125deg,rgba(255,255,255,0.04),transparent_40%)]" />

              <Image
                src="/plane_smoke_icon.svg"
                alt=""
                aria-hidden="true"
                width={600}
                height={267}
                className="pointer-events-none absolute bottom-[18px] left-[18px] hidden h-auto w-[560px] max-w-none opacity-[0.92] lg:block xl:bottom-[20px] xl:left-[28px] xl:w-[600px]"
              />

              <div className="relative z-20 max-w-[520px] lg:flex lg:min-h-[455px] lg:flex-col lg:justify-center xl:min-h-[468px]">
                <div className="relative">
                  <h3 className="max-w-[500px] text-[34px] font-bold leading-[1.08] tracking-[-0.028em] text-white lg:text-[48px] xl:text-[50px]">Ready to Begin Your UK Medical Journey?</h3>
                  <Image
                    src="/aeroplane_icon.svg"
                    alt=""
                    aria-hidden="true"
                    width={102}
                    height={72}
                    className="pointer-events-none absolute -right-[26px] top-[42px] hidden h-auto w-[90px] lg:block xl:-right-[40px] xl:top-[44px] xl:w-[102px]"
                  />
                </div>
                <p className="mt-5 max-w-[360px] text-[15px] leading-[1.65] text-white/80 lg:text-[16px]">Join thousands of doctors preparing with PLABCoach.</p>
                <div className="mt-7 flex flex-wrap gap-4 lg:mt-8">
                  <button type="button" className="flex h-[52px] min-w-[132px] items-center gap-2 rounded-[7px] bg-black px-4 text-left text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-black/90">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-white" aria-hidden="true"><path d="M17.6 13.1c0-2.8 2.3-4.2 2.4-4.3-1.3-1.9-3.4-2.2-4.1-2.2-1.7-.2-3.4 1-4.3 1-.9 0-2.2-1-3.7-1-1.9 0-3.7 1.1-4.7 2.8-2 3.5-.5 8.7 1.4 11.5.9 1.4 2 2.9 3.5 2.8 1.4-.1 1.9-.9 3.6-.9s2.2.9 3.7.9c1.5 0 2.5-1.4 3.4-2.7 1.1-1.6 1.6-3.2 1.6-3.3-.1 0-2.8-1.1-2.8-4.6ZM14.8 4.8c.8-1 1.3-2.3 1.2-3.6-1.2.1-2.6.8-3.4 1.7-.7.8-1.4 2.2-1.2 3.4 1.3.1 2.6-.6 3.4-1.5Z" /></svg>
                    <span><span className="block text-[8px] leading-none text-white/70">Download on the</span><span className="mt-0.5 block text-[14px] font-semibold leading-none">App Store</span></span>
                  </button>
                  <button type="button" className="flex h-[52px] min-w-[142px] items-center gap-2 rounded-[7px] bg-black px-4 text-left text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-black/90">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true"><path fill="#00d084" d="M3 2.8v18.4l10.5-9.2L3 2.8Z"/><path fill="#ffd43b" d="m13.5 12 3.2-2.8 3.8 2.2c.9.5.9 1.6 0 2.1l-3.8 2.2-3.2-3.7Z"/><path fill="#3b82f6" d="m3 2.8 12 7-1.5 2.2L3 2.8Z"/><path fill="#ef4444" d="m3 21.2 12-7-1.5-2.2L3 21.2Z"/></svg>
                    <span><span className="block text-[8px] leading-none text-white/70">GET IT ON</span><span className="mt-0.5 block text-[14px] font-semibold leading-none">Google Play</span></span>
                  </button>
                </div>
              </div>

              <div className="relative z-10 mt-10 flex w-full items-end justify-center lg:absolute lg:right-[-52px] lg:top-[-30px] lg:mt-0 lg:w-[58%] xl:right-[-62px] xl:top-[-31px] 2xl:right-[-68px]">
                <Image
                  src="/medical_journey_devices.png"
                  alt="PLABCoach learning platform shown across desktop, laptop, tablet and mobile"
                  width={855}
                  height={483}
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 82vw, 58vw"
                  className="h-auto w-full max-w-[855px] object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.14)] lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="blogs" className="relative overflow-hidden bg-[var(--footer-bg)] pt-8 text-[var(--footer-text)] lg:pt-10">
        <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Image src="/new_plabcoach.png" alt="PLABCOACH" width={212} height={57} className="h-auto w-[180px] lg:w-[198px] xl:w-[205px]" />
            <div className="flex items-center gap-3 text-[14px] font-bold text-black">
              <span className="mr-3">Social Media</span>
              {socialLabels.map((label) => (
                <a key={label} href={`#${label}`} aria-label={label} className="grid h-8 w-8 place-items-center rounded-[4px] bg-black transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary)] hover:shadow-[0_8px_18px_rgba(11,93,168,0.22)]">
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 h-px bg-[#acd6ef]" />

          <div className="grid gap-10 pb-9 pt-10 text-[15px] leading-7 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_1fr_1.15fr] lg:gap-14">
            <section>
              <h3 className="mb-3 font-semibold text-[var(--footer-heading)]">We have been</h3>
              <p className="max-w-[390px]">We have been delivering high-quality online courses for nearly a decade. All our instructors are experts with extensive experience in their respective fields. We offer comprehensive course materials, ensuring our students have everything they need to succeed.</p>
            </section>

            <section>
              <h3 className="mb-3 font-semibold text-[var(--footer-heading)]">Courses</h3>
              <ul className="divide-y divide-[#dedede]">
                <li className="py-2 first:pt-0 transition-colors hover:text-[var(--primary)]">UK PLAB / UKMLA Courses</li>
                <li className="py-2 transition-colors hover:text-[var(--primary)]">Ireland Courses</li>
                <li className="py-2 transition-colors hover:text-[var(--primary)]">UK Foundation Programme Courses</li>
                <li className="py-2 transition-colors hover:text-[var(--primary)]">Upcoming Courses</li>
              </ul>
              <h3 className="mb-3 mt-6 font-semibold text-[var(--footer-heading)]">Important Links</h3>
              <p>No Refund Policy</p>
            </section>

            <section>
              <h3 className="mb-3 font-semibold text-[var(--footer-heading)]">Recent Posts</h3>
              <ul className="divide-y divide-[#dedede]">
                <li className="pb-3">PRES2 SBA Practice: The Art of Eliminating Wrong Options Strategically</li>
                <li className="py-3">PRES 2 Question Bank: Why Quality Shapes Exam Performance More Than Question Volume</li>
                <li className="py-3">How Many PRES 2 Practice Questions Do You Actually Need Before the Exam</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3 font-semibold text-[var(--footer-heading)]">Contact Us</h3>
              <ul className="divide-y divide-[#dedede]">
                <li className="flex gap-4 pb-4">
                  <Image src="/location_icon.svg" alt="" aria-hidden="true" width={17} height={23} className="mt-1 h-[23px] w-[17px] shrink-0" />
                  <span>9 The Pavilions, Cranmore Drive, Shirley,<br />UK B90 4SB</span>
                </li>
                <li className="flex gap-4 py-4">
                  <span className="text-[22px] text-[var(--footer-heading)]">✉</span>
                  <span>support@plabcoach.com</span>
                </li>
                <li className="flex gap-4 py-4">
                  <Image src="/phone_icon.svg" alt="" aria-hidden="true" width={20} height={20} className="mt-1 h-[20px] w-[20px] shrink-0" />
                  <span>UK: +44 7712 222818, UK: +44 7956 835626<br />UK: +44 7737 713749, IN: +91 81300 14412</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="relative h-[235px] overflow-hidden sm:h-[260px] lg:h-[280px]">
            <Image src="/footer_logo_with_blur.png" alt="" aria-hidden="true" width={1480} height={281} className="absolute inset-x-0 top-0 h-auto w-full opacity-[0.92]" />
          </div>
        </div>
      </footer>
    </div>
  );
}
