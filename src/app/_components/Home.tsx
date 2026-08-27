"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";

const stats = [
  { value: "10K+", label: "Students", icon: "/hero_sec_students_icon_1.svg" },
  { value: "95%", label: "Success Rate", icon: "/hero_sec_success_icon_1.svg" },
  { value: "100+", label: "Expert Sessions", icon: "/hero_sec_expert_icon_1.svg" },
  { value: "24/7", label: "Learning Access", icon: "/hero_sec_time_icon_1.svg" },
];

const offerTop = [
  {
    title: "Self-Paced Mastery Videos",
    description: "Expert-led video tutorials for PRES 3, NCA, and PSA, available on your own schedule.",
    icon: "/second_sec_video_icon_2.webp",
  },
  {
    title: "Live Coaching",
    description: "Interactive sessions with Dr. Karam Singh and Dr. Anjum Kohli, delivered online and in-person.",
    icon: "/second_sec_live_icon_2.svg",
  },
];

const offerBottom = [
  {
    title: "SmartMocks",
    description: "Full-length mock exams simulating real exam conditions, with personalised feedback",
    icon: "/second_sec_exam_icon_2.svg",
  },
  {
    title: "SmartCards",
    description: "Image-based flashcards for fast recall and clinical reasoning practice on the go.",
    icon: "/second_sec_setting_icon_2.svg",
  },
];

const offerTall = [
  {
    title: "SmartQBank",
    description: "Question banks for PLAB I/UKMLA-AKT and PRES 2, with performance analytics to track progress.",
    icon: "/second_sec_question_icon_2.svg",
  },
  {
    title: "SmartNotes",
    description: "Structured revision notes for PLAB 2, PRES 3, and UKFP National Clinical Assessment (NCA) & Prescribing Safety Assessment (PSA).",
    icon: "/second_sec_mentor_icon_2.svg",
  },
];

// const trustPoints = [
//   "Created by UK doctors with real NHS experience",
//   "Structured curriculum aligned with GMC standards",
//   "Supports PLAB 1, PLAB 2 & MRCP (PACES & Part 1)",
//   "High-quality resources and exam-focused content",
//   "Flexible learning to fit your schedule",
//   "Trusted by thousands of international doctors",
// ];

// const journey = [
//   { number: "01", title: "Join", text: "Create your account in minutes" },
//   { number: "02", title: "Learn", text: "Access structured courses & resources" },
//   { number: "03", title: "Practice", text: "Solve questions & improve continuously" },
//   { number: "04", title: "Mock Tests", text: "Take mock exams & track performance" },
//   { number: "05", title: "Pass Exam", text: "Build confidence & achieve your dream" },
// ];

// const featuredCourses = ["PLAB 1", "PLAB 1", "PLAB 1", "PLAB 1"];
const exams = [
  {
    title: "PLAB 1 / UKMLA-AKT",
    subtitle: "Written knowledge exam for UK GMC registration",
    icon: "/plab1_exam_icon.svg",
  },
  {
    title: "PLAB 2 / UKMLA-CPSA",
    subtitle: "Clinical OSCE for UK GMC registration",
    icon: "/plab2_exam_icon.svg",
  },
  {
    title: "PRES 2",
    subtitle: "Written exam for Irish Medical Council (IMC) registration",
    icon: "/pres2_exam_icon.svg",
  },
  {
    title: "PRES 3",
    subtitle: "OSCE + data interpretation for Irish Medical Council (IMC) registration",
    icon: "/pres3_exam_icon.svg",
  },
  {
    title: "UKFPO-NCA",
    subtitle: "Clinical assessment for UK Foundation Programme eligibility",
    icon: "/nca_exam_icon.svg",
  },
  {
    title: "UKFPO-PSA",
    subtitle: "Prescribing Safety Assessment for Foundation Programme candidates",
    icon: "/psa_exam_icon.svg",
  },
  {
    title: "MSRA",
    subtitle: "Computer-based assessment for GP and specialty training entry",
    icon: "/msra_exam_icon.svg",
  },
  {
    title: "MRCP-AKT",
    subtitle: "Applied Knowledge Test for GP trainees (ST3)",
    icon: "/mrcp_exam_icon.svg",
  },
];


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
  {
    title: "UK PLAB / UKMLA COURSES",
    subtitle: "Prepare for the knowledge and clinical assessments required to begin your medical career in the UK.The UKMLA assesses the core knowledge, skills and behaviours required for safe and effective medical practice.",
  },
  {
    title: "IRELAND COURSES",
    subtitle: "Focused preparation for doctors preparing for the Pre-Registration Examination System in Ireland.",
  },
  {
    title: "UK FOUNDATION PROGRAMME COURSES",
    subtitle: "Build the knowledge and practical confidence required for key UK Foundation Programme assessments.",
  },
];

const testimonials = [
  {
    name: "Dr. Adeel Khan",
    image: "/third_section_dr_img.webp",
    exam: "PLAB 2",
    location: "United Kingdom",
    quote: "PLABcoach question bank and mocks were extremely helpful. I cleared PLAB 2 in my first attempt! PLABcoach question bank and mocks were extremely helpful. I cleared PLAB 2 in my first attempt! PLABcoach question bank and mocks were extremely helpful. I cleared PLAB 2 in my first attempt!",
  },
  {
    name: "Dr. Priya Sharma",
    image: "/fifth_sec_card_img.webp",
    exam: "PLAB 1",
    location: "India",
    quote: "The course gave me a clear plan instead of leaving me to figure everything out alone. I could revise at my own pace and use the mocks to understand exactly where I needed to improve.",
  },
  {
    name: "Dr. Mohammed Ali",
    image: "/offer_section_image.webp",
    exam: "UKMLA",
    location: "UAE",
    quote: "I found the combination of concise teaching, practical questions and mentor guidance very useful. It kept my preparation focused and helped me build consistency week after week.",
  },
  {
    name: "Dr. Sara Wilson",
    image: "/hero_banner_image.webp",
    exam: "PRES",
    location: "Ireland",
    quote: "The platform made a difficult syllabus feel manageable. The learning path was easy to follow and the practice resources helped me turn weak areas into strengths before the exam.",
  },
];

const faqs = [
  {
    question: "What is PLABcoach?",
    answer: "PLABCoach supports preparation for UK PLAB / UKMLA pathways, PLAB 1, PLAB 2, PRES and selected MRCP-focused learning programmes. Course availability may vary by exam cycle.",
  },
  {
    question: "Which exams does PLABcoach provide preparation for?",
    answer: "Yes. Selected programmes include live expert-led sessions, guided revision and opportunities to ask questions alongside self-paced learning resources.",
  },
  {
    question: "Does PLABcoach Offer both online and in-person courses?",
    answer: "The learning experience is designed to work smoothly across modern browsers and mobile screens, so you can continue studying when you are away from your laptop.",
  },
  {
    question: "Who teaches the PLABcoach courses?",
    answer: "Mocks are built to reflect exam-style timing, question patterns and decision-making pressure so you can practise in a focused, realistic environment.",
  },
  {
    question: "How do I access the question banks and course materials?",
    answer: "Mentor support is available with selected courses and coaching plans, including guidance from experienced medical educators and UK-based professionals.",
  },
  {
    question: "Does PLABcoach offer a free trial or sample questions?",
    answer: "Choose the course that matches your target exam, create your account and begin with the recommended learning path. You can explore the course catalogue before enrolling.",
  },
];


const blogs = [
  "OSCE Self-Assessment: 10 Signs You Need More Practice as an International Medical Graduate",
  "What Should You Do One Month Before the UKFP National Clinical Assessment Exam?",
  "PRES 3 vs PLAB 2: Everything International Medical Graduates Need to Know",
];

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
      <span className="mt-auto pt-5 text-[13px] font-semibold text-[#075cae] transition-transform duration-300 group-hover:translate-x-1 xl:text-[14px]">
        Know More
      </span>
    </article>
  );
}

// function CourseCard({ title }: { title: string }) {
//   return (
//     <article className="group relative min-h-[492px] overflow-hidden rounded-[30px] bg-black shadow-[0_14px_34px_rgba(15,34,68,0.10)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_26px_54px_rgba(15,34,68,0.18)]">
//       <Image
//         src="/fifth_sec_card_img.webp"
//         alt="Doctor preparing for a medical exam"
//         fill
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//         className="object-cover object-center transition duration-500 group-hover:scale-[1.025]"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/5 to-black/95" />
//       <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-5">
//         <h3 className="text-[24px] font-bold leading-tight text-white">{title}</h3>
//         <p className="mt-2 max-w-[285px] text-[15px] leading-6 text-white/80">
//           Complete preparation for PLAB 1 with practice questions &amp; mocks.
//         </p>
//         <div className="mt-4 flex flex-wrap gap-2 text-[12px] text-white">
//           <span className="rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-sm">120+ Videos</span>
//           <span className="rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-sm">5 Mock Tests</span>
//         </div>
//         <button className="mt-5 h-[58px] w-full rounded-[12px] bg-[var(--accent)] text-[16px] font-semibold text-white transition hover:brightness-105">
//           Explore →
//         </button>
//       </div>
//     </article>
//   );
// }
function ExamCard({ exam }: { exam: (typeof exams)[number] }) {
  return (
    <article className="group flex min-h-[138px] items-center gap-5 rounded-[28px] bg-[#e3edff] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8e7ff] hover:shadow-[0_18px_40px_rgba(42,82,145,0.14)] sm:gap-6 sm:px-6 xl:min-h-[164px] xl:gap-7 xl:px-7">
      <div className="grid h-[92px] w-[92px] shrink-0 place-items-center rounded-[15px] bg-[#c9e2ff] transition-all duration-300 group-hover:bg-[#b9d9ff] sm:h-[100px] sm:w-[100px] xl:h-[114px] xl:w-[114px]">
        <Image
          src={exam.icon}
          alt=""
          width={82}
          height={82}
          className="h-[58px] w-[58px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-[64px] sm:w-[64px] xl:h-[82px] xl:w-[82px]"
        />
      </div>
      <div className="min-w-0 py-1">
        <h3 className="text-[25px] font-bold leading-tight text-[#18275f] sm:text-[28px] xl:text-[36px]">
          {exam.title}
        </h3>
        <p className="mt-2 text-[13px] font-medium leading-[1.5] text-[#555d6d] sm:text-[14px] xl:text-[16px]">
          {exam.subtitle}
        </p>
        <span className="mt-3 inline-block text-[13px] font-semibold text-[#5368f2] transition-transform duration-300 group-hover:translate-x-1 xl:text-[15px]">
          Explore →
        </span>
      </div>
    </article>
  );
}

function SubscriptionCard({ course }: { course: (typeof subscriptionCourses)[number] }) {
  return (
    <article className="group relative min-h-[530px] cursor-pointer overflow-hidden rounded-[30px] bg-black shadow-[0_12px_32px_rgba(15,34,68,0.08)] ring-1 ring-black/[0.02] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_28px_64px_rgba(15,54,104,0.22)] hover:ring-[#3c8ee8]/25">
      <Image
        src="/woman-teaching-her-student-english.webp"
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
        <h3 className="max-w-[270px] text-[22px] font-semibold leading-[1.05] text-white">{course.title}</h3>
        <p className="mt-3 text-[14px] leading-6 text-white/75 transition-colors duration-500 group-hover:text-white/90">
          {course.subtitle}
        </p>
        <Link href="" className="mt-6 h-[52px] w-full rounded-[10px] bg-[var(--primary)] text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(0,86,168,0.18)] transition-all duration-300 group-hover:bg-[#0872d0] group-hover:shadow-[0_14px_30px_rgba(0,86,168,0.30)] flex items-center justify-center">
          View Courses
        </Link>
      </div>
    </article>
  );
}



export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const goToTestimonial = (direction: number) => {
    setActiveTestimonial((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      
       <Header/>
      <main id="top">
        <section className="relative overflow-hidden bg-[var(--hero-bg)]">
          <div className="relative mx-auto min-h-[640px] w-[var(--site-width)] max-w-[var(--container-max)] sm:min-h-[680px] lg:h-[650px] lg:min-h-0 xl:h-[690px] 2xl:h-[700px]">
            <Image
              src="/hero_banner_bg_ellipse.webp"
              alt=""
              aria-hidden="true"
              width={1382}
              height={1382}
              className="pointer-events-none absolute hidden h-[1382px] w-[1382px] max-w-none lg:block lg:-right-[385px] lg:-top-[455px]"
              priority
            />

            <div className="relative z-20 max-w-[700px] pt-16 sm:pt-[88px] lg:pt-[92px] xl:pt-[108px] 2xl:pt-[112px]">
              <p className="text-[12px] font-semibold uppercase leading-none text-[var(--accent)] sm:text-[13px]">
                Trusted Medical Learning Platform
              </p>
              <h1 className="mt-[14px] max-w-[700px] text-[33px] font-bold leading-[1.07] tracking-[-0.032em] text-[var(--ink)] sm:text-[52px] lg:text-[58px] xl:text-[48px]">
                {/* Prepare for PLAB &amp; UK Medical Exams with Confidence */}
                PLAB, UKMLA, PRES & UK Foundation Programme Exam Preparation for International Medical Graduates
              </h1>
             <div className="mt-6 max-w-[720px] rounded-[22px] bg-white/68 px-5 py-4 shadow-[0_10px_30px_rgba(53,79,128,0.04)] backdrop-blur-sm sm:px-6 sm:py-5 xl:mt-7 xl:px-7 xl:py-6">
                <p className="text-[12px] font-medium leading-[1.65] text-[#185b99] sm:text-[13px] xl:text-[14px]">
                  PLABcoach is a UK-based exam preparation platform for international medical graduates (IMGs), founded by Dr. Karam Singh, an NHS doctor and educator. It provides structured courses, question banks, and mock exams for PLAB/UKMLA, Ireland&apos;s PRES, the UK Foundation Programme&apos;s NCA and PSA, MRCP-AKT — combining live coaching with self-paced online learning.
                </p>
              </div>
            </div>

            <Image
              src="/man-woman-wearing-capes.webp"
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
            src="/ellipse_offer_section.webp"
            alt=""
            width={1116}
            height={815}
            aria-hidden="true"
            className="pointer-events-none absolute z-0 hidden max-w-none lg:right-[-225px] lg:top-[38px] lg:block lg:w-[930px] xl:right-[-175px] xl:top-[16px] xl:w-[1010px] 2xl:right-[-130px] 2xl:top-[-8px] 2xl:w-[1080px]"
          />
          <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="mb-10 lg:mb-12">
              <p className="text-[13px] font-semibold uppercase tracking-[0.01em] text-[var(--accent)]">What We Offer</p>
              <h2 className="mt-1 text-[38px] font-bold leading-tight tracking-[-0.025em] text-[var(--ink)] lg:text-[46px]">Everything You Need to Succeed</h2>
              <p className="mt-3 text-[15px] text-[var(--body-muted)]">Comprehensive resources and expert guidance for your UK medical journey</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.96fr_2fr]">
              <div className="group relative min-h-[420px] overflow-hidden rounded-[28px] shadow-[0_12px_30px_rgba(25,53,96,0.04)] lg:min-h-[560px]">
                <Image src="/offer_section_image.webp" alt="Medical learner" fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
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
                      <span className="mt-auto pt-5 text-[13px] font-semibold text-[#075cae] transition-transform duration-300 group-hover:translate-x-1 xl:text-[14px]">
        Know More
      </span>
                    </div>
                  ))}
                </article>
              </div>
            </div>
          </div>
        </section>
        <section id="courses" className="relative overflow-hidden bg-[var(--courses-bg)] py-16 sm:py-20 lg:py-[94px] xl:py-[96px]">
          <Image
            src="/featured_courses_ellipse.webp"
            alt=""
            width={1332}
            height={689}
            aria-hidden="true"
            className="pointer-events-none absolute -left-[460px] right-[50px] top-[12px] hidden w-[960px] max-w-none  lg:block xl:-left-[310px] xl:w-[1100px]"
          />
          <div className={`mx-auto w-[var(--site-width)] max-w-[var(--container-max)] relative z-10`}>
            <h2 className="text-[39px] font-bold tracking-[-0.025em] text-[#17265c] sm:text-[43px] lg:text-[47px] xl:text-[48px]">
              Exams We Prepare You For
            </h2>
            <p className="mt-3 max-w-[730px] text-[13px] leading-[1.65] text-[#81848a] sm:text-[14px] xl:text-[16px]">
              PLABcoach prepares candidates for [N] licensing and specialty exams across the UK and Ireland, from initial GMC/IMC registration through to GP-level entry.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:mt-11 xl:gap-x-6 xl:gap-y-6">
              {exams.map((exam) => (
                <ExamCard key={exam.title} exam={exam} />
              ))}
            </div>
          </div>
        </section>


        <section id="about-us" className="bg-[var(--about-us-bg)] py-[110px] lg:py-[125px]">
          <div className="mx-auto grid w-[var(--site-width)] max-w-[var(--container-max)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* <div>
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
            </div> */}
            <div>
              <h2 className="text-[39px] font-bold uppercase tracking-[0.015em] text-[#17265c] sm:text-[44px] lg:text-[48px] xl:text-[50px]">
                Why PLABCoach
              </h2>
              <p className="mt-5 max-w-[540px] text-[15px] leading-[2] text-[#353943] sm:text-[16px] xl:mt-6 xl:text-[18px]">
                Led by Dr. Karam Singh, an NHS doctor and educator, PLABcoach has provided structured exam preparation for international medical graduates for over 10 years. Courses combine live coaching, self-paced video content, and exam-realistic question banks, with teaching tailored to each candidate&apos;s weak areas
              </p>
              <p className="mt-10 text-[13px] font-semibold text-[#222] xl:text-[15px]">
                Read Our Full Story
              </p>
              {/* <button
                type="button"
                className="mt-3 h-[52px] min-w-[190px] rounded-[9px] bg-[#075cae] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-[#064f95] xl:h-[60px] xl:min-w-[228px] xl:text-[15px]"
              >
                About Us 
              </button> */}
              <Link
                  href="/aboutus"
                 className="mt-3 inline-flex h-[52px] min-w-[190px] items-center justify-center rounded-[9px] bg-[#075cae] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-[#064f95] xl:h-[60px] xl:min-w-[228px] xl:text-[15px]"
                  >
                 About Us
                </Link>
            </div>

            <div className="relative mx-auto h-[520px] w-full max-w-[650px] lg:h-[560px]">
              <Image src="/third_sec_upfront_img.webp" alt="" width={728} height={554} aria-hidden="true" className="absolute inset-0 h-full w-full object-contain" />
              <div className="absolute left-[24%] top-[3%] h-[78%] w-[65%] overflow-hidden rounded-[34px]">
                <Image src="/third_section_dr_img.webp" alt="Doctor studying on a laptop" fill sizes="(max-width: 1024px) 70vw, 34vw" className="object-cover object-center" />
              </div>
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

        {/* <section className="bg-white py-[104px] lg:min-h-[650px] lg:py-[118px] xl:min-h-[665px] xl:py-[122px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.01em] text-[var(--accent)]">How It Works</p>
            <h2 className="mt-[8px] text-[42px] font-bold tracking-[-0.028em] lg:text-[50px] xl:text-[52px]">Your Journey to Success</h2>

            <div className="mt-[76px] grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-0 lg:mt-[88px] xl:mt-[92px]">
              {journey.map((step, index) => {
                return (
                <button type="button" key={step.number} className="group relative flex min-h-[250px] flex-col items-center text-center">
                  <div className="relative flex h-[130px] w-[213px] items-start justify-center transition-transform duration-300 group-hover:-translate-y-1">
                    <Image src={`/${step.number}.svg`} alt="" width={213} height={130} aria-hidden="true" className="h-auto max-h-[130px] w-auto max-w-full object-contain transition-opacity duration-300 group-hover:opacity-0" />
                    <Image src={`/${step.number}_with_color.svg`} alt="" width={213} height={130} aria-hidden="true" className="absolute inset-0 h-auto max-h-[130px] w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-8 text-[22px] font-bold text-[#777] transition-colors duration-300 group-hover:text-black">{step.title}</h3>
                  <p className="mt-4 max-w-[220px] text-[15px] leading-7 text-[#777] transition-colors duration-300 group-hover:text-[#5e5e5e]">{step.text}</p>
                  {index < journey.length - 1 && (
                    <Image src="/fourth_sec_side_support.svg" alt="" width={97} height={289} aria-hidden="true" className="absolute -right-[48px] top-[-30px] hidden h-[230px] w-[77px] md:block lg:-right-[50px] lg:h-[252px] lg:w-[84px] xl:-right-[51px] xl:h-[262px] xl:w-[88px]" />
                  )}
                </button>
                );
              })}
            </div>
          </div>
        </section> */}

        {/* <section id="courses" className="relative overflow-hidden bg-[var(--courses-bg)] py-[92px] lg:py-[104px] xl:py-[112px]">
          <Image
            src="/featured_courses_ellipse.webp"
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
        </section> */}
         {/* BLOGS */}
        <section id="blogs" className="bg-white py-16 sm:py-20 lg:py-[118px] xl:py-[122px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <h2 className="text-[39px] font-bold tracking-[-0.025em] text-[#17265c] sm:text-[45px] lg:text-[49px] xl:text-[50px]">
              Our Latest News &amp; Blogs
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3 xl:mt-11">
              {blogs.map((title, index) => (
                <article
                  key={`${title}-${index}`}
                  className="group rounded-[28px] bg-[#d4e3ff] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#cadafa] hover:shadow-[0_18px_42px_rgba(46,83,143,0.13)] xl:p-6"
                >
                  <div className="relative h-[190px] overflow-hidden rounded-[20px] sm:h-[210px] md:h-[190px] lg:h-[210px] xl:h-[224px]">
                    <Image
                      src="/blogs_image.svg"
                      alt="blogs image"
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-5 min-h-[72px] text-[20px] font-semibold leading-[1.12] text-[#17265c] lg:text-[22px] xl:min-h-[86px] xl:text-[25px]">
                    {title}
                  </h3>
                  <button
                    type="button"
                    className="mt-5 h-[52px] min-w-[190px] rounded-[9px] bg-[#075cae] px-7 text-[13px] font-semibold text-white transition-colors hover:bg-[#064f95] xl:h-[60px] xl:min-w-[228px] xl:text-[15px]"
                  >
                    Read more
                  </button>
                </article>
              ))}
            </div>
            <div className="mt-14 flex justify-center xl:mt-16">
              <Link
                href="/blogs"
                className="h-[52px] rounded-[9px] bg-[#075cae] py-4 px-10 text-[13px] font-semibold text-white transition-colors hover:bg-[#064f95] xl:h-[60px] xl:px-12 xl:text-[15px]"
              >
                Browse All Blogs
              </Link>
            </div>
          </div>
        </section>
        {/* subscription courses */}
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
              <Link href="/courses" className="mt-auto px-auto text-center leading-none p-[18px] h-[52px] rounded-[10px] border-2 border-[#2184ff] text-[14px] font-semibold text-[#2184ff] lg:mt-9">
                {/* <button ></button> */}Browse All Courses&nbsp;&nbsp; →
              </Link>
            </aside>
            <div className="grid gap-6 md:grid-cols-3">
              {subscriptionCourses.map((course) => <SubscriptionCard key={course.title} course={course} />)}
            </div>
          </div>
        </section>
         
        <section className="relative overflow-x-clip overflow-y-visible bg-white py-[82px] sm:py-[90px] lg:py-[98px] xl:py-[105px] 2xl:py-[112px]">
          <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
            <div className="relative mx-auto h-full w-[var(--site-width)] max-w-[var(--container-max)]">
              <Image
                src="/featured_courses_ellipse.webp"
                alt=""
                width={1332}
                height={689}
                aria-hidden="true"
                className="absolute -left-[150px] -top-[0px] w-[1000px] max-w-none opacity-[0.88] xl:-left-[175px] xl:-top-[0px] xl:w-[1080px] 2xl:-left-[220px] 2xl:-top-[0px] 2xl:w-[1140px]"
              />
            </div>
          </div>

          <div className="relative z-10 mx-auto grid w-[var(--site-width)] max-w-[var(--container-max)] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 xl:gap-16 2xl:gap-20">
            <div className="relative min-h-[410px] w-full sm:min-h-[500px] lg:min-h-[560px] xl:min-h-[600px] 2xl:min-h-[640px]">
              <div className="pointer-events-none absolute bottom-[10%] left-[10%] h-[56px] w-[78%] rounded-full bg-[#243f79]/10 blur-3xl 2xl:left-[5%] 2xl:w-[88%]" />

              <div className="absolute inset-0 2xl:-left-[180px] 2xl:-right-[55px]">
                <Image
                  src="/video_learning_laptop.webp"
                  alt="PLABCoach video lesson on a laptop"
                  fill
                  sizes="(max-width: 1023px) 100vw, (max-width: 1535px) 50vw, 900px"
                  className="object-contain object-left transition-transform duration-500 hover:scale-[1.008]"
                />
              </div>
            </div>

            <div className="relative z-10 max-w-[690px] lg:py-4 2xl:justify-self-end">
              <p className="text-[13px] font-semibold uppercase text-[var(--accent)]">Video Learning</p>
              <h2 className="mt-2 max-w-[620px] text-[40px] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[42px] lg:text-[48px] xl:text-[50px]">Learn From Experts. Prepare With Confidence</h2>
              <p className="mt-4 max-w-[670px] text-[15px] leading-7 text-[var(--body-muted)] sm:text-[16px]">Watch expert-led lessons, exam strategies, clinical concepts and practical guidance designed to make your preparation more focused and effective.</p>
              <div className="mt-8 space-y-4 sm:mt-9 sm:space-y-5">
                {videoBenefits.map((benefit) => (
                  <div key={benefit.title} className="group flex items-center gap-4 rounded-2xl p-1 transition duration-300 hover:translate-x-1 sm:gap-5">
                    <Image src={benefit.icon} alt="" width={51} height={51} className="h-[44px] w-[44px] shrink-0 transition duration-300 group-hover:scale-105 sm:h-[48px] sm:w-[48px]" />
                    <div>
                      <h3 className="text-[15px] font-bold text-[var(--ink)]">{benefit.title}</h3>
                      <p className="mt-1 text-[14px] leading-6 text-[var(--body-muted)] sm:text-[15px]">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        

       

        <section id="faq" className="relative overflow-hidden bg-white py-[90px] lg:py-[112px]">
          <Image
            src="/ellipse_offer_section.webp"
            alt=""
            width={1116}
            height={815}
            aria-hidden="true"
            className="pointer-events-none absolute z-0 hidden max-w-none lg:right-[-205px] lg:top-[-165px] lg:block lg:w-[860px] xl:right-[-165px] xl:top-[-180px] xl:w-[930px] 2xl:right-[-125px] 2xl:top-[-232px] 2xl:w-[990px]"
          />
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
                  src="/medical_journey_devices.webp"
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
      <Footer/>

     
    </div>
  );
}
            