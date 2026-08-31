// import Header from "../Header";
// import Footer from "../Footer";

// export default function Courses(){
//     return(
//     <div className="min-h-screen bg-white text-[var(--ink)]">
//         <Header/>
        
//         <Footer/>
    
//     </div>
//     )
// }
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import CourseCard from "./CourseCard";

type CourseItem = {
  image: string;
  title: string;
  assessment: string;
  description: string;
  buttonLabel: string;
  href: string;
};

type CourseSectionProps = {
  id: string;
  title: string;
  description: string;
  courses: CourseItem[];
  decoration: "left" | "right" | "left-large";
};

const ukCourses: CourseItem[] = [
  {
    image: "/plab1_course.webp",
    title: "PLAB 1 / UKMLA",
    assessment: "Applied Knowledge Test (AKT)",
    description:
      "Build confidence for the written assessment with focused exam preparation, high-yield questions and realistic practice.",
    buttonLabel: "Explore AKT Preparation",
    href: "/courses/plab-1-ukmla",
  },
  {
    image: "/plab1_course.webp",
    title: "PLAB 2 / UKMLA",
    assessment: "Clinical and Professional Skills Assessment (CPSA)",
    description:
      "Prepare for practical clinical scenarios with learning focused on communication, clinical reasoning and professional skills.",
    buttonLabel: "Explore CPSA Preparation",
    href: "/courses/plab-2-ukmla",
  },
];

const irelandCourses: CourseItem[] = [
  {
    image: "/ireland_course.webp",
    title: "PRES Level 2",
    assessment: "Applied Knowledge Test (AKT)",
    description:
      "Build confidence for the written assessment with focused exam preparation, high-yield questions and realistic practice.",
    buttonLabel: "Explore AKT Preparation",
    href: "/courses/pres-level-2",
  },
  {
    image: "/ireland_course.webp",
    title: "PRES 3 - OSCE",
    assessment: "Clinical and Professional Skills Assessment (CPSA)",
    description:
      "Prepare for practical clinical scenarios with learning focused on communication, clinical reasoning and professional skills.",
    buttonLabel: "Explore CPSA Preparation",
    href: "/courses/pres-3-osce",
  },
];

const foundationCourses: CourseItem[] = [
  {
    image: "/uk_course.webp",
    title: "National Clinical Assessment",
    assessment: "Applied Knowledge Test (AKT)",
    description:
      "Build confidence for the written assessment with focused exam preparation, high-yield questions and realistic practice.",
    buttonLabel: "Explore AKT Preparation",
    href: "/courses/national-clinical-assessment",
  },
  {
    image: "/uk_course.webp",
    title: "Prescribing Safety Assessment",
    assessment: "Clinical and Professional Skills Assessment (CPSA)",
    description:
      "Prepare for practical clinical scenarios with learning focused on communication, clinical reasoning and professional skills.",
    buttonLabel: "Explore CPSA Preparation",
    href: "/courses/prescribing-safety-assessment",
  },
];

const learningOptions = [
  {
    title: "SmartQBank",
    description:
      "Practice exam-focused questions and strengthen your understanding through active learning.",
  },
  {
    title: "SmartNotes",
    description:
      "Access concise and structured revision material designed to support efficient exam preparation.",
  },
  {
    title: "SmartMocks",
    description:
      "Test your knowledge and exam readiness with realistic practice assessments.",
  },
  {
    title: "Live Coaching",
    description:
      "Learn directly through structured live teaching and expert guidance.",
  },
];


function CourseSection({
  id,
  title,
  description,
  courses,
  decoration,
}: CourseSectionProps) {
  const decorationPosition =
    decoration === "right"
      ? "right-[-290px] top-[-85px]"
      : decoration === "left-large"
        ? "left-[-330px] top-[-120px]"
        : "left-[-300px] top-[-95px]";

  return (
    <section id={id} className="relative overflow-hidden bg-white py-[58px] sm:py-[68px] lg:py-[76px]">
      <Image
        src="/featured_courses_ellipse.webp"
        alt=""
        aria-hidden="true"
        width={1332}
        height={689}
        className={`pointer-events-none absolute z-0 w-[720px] max-w-none  sm:w-[820px] lg:w-[900px] ${decorationPosition}`}
      />

      <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)] ">
        {/* <div className="mx-auto w-full max-w-[990px]"> */}
          <div className="max-w-[560px]">
            <h2 className="text-[25px] font-bold uppercase leading-[1.15] tracking-[-0.01em] text-[var(--courses-heading)] sm:text-[36px]">
              {title}
            </h2>
            <p className="mt-[10px] text-[11px] leading-[1.55] text-[var(--courses-copy)] sm:text-[16px]">
              {description}
            </p>
          </div>

          <div className="mt-[28px] grid grid-cols-1 gap-[16px] md:grid-cols-2">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default function Courses() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[var(--courses-heading)] [--courses-button-border:#888888] [--courses-button-muted:#888888] [--courses-card-border:#E0E0E0] [--courses-card-heading:#002F60] [--courses-copy:#808080] [--courses-cta:#5B65DC] [--courses-divider:#F7FBFF] [--courses-feature-bg:#F6FBFF] [--courses-final-bg:#084C90] [--courses-final-copy:#B7D2EE] [--courses-heading:#162355] [--courses-hero-bg:#EEEFFD] [--courses-label:#5B65DC] [--courses-learning-bg:#EDEDED] [--courses-learning-card-bg:#1D2130] [--courses-panel-bg:#E8F0FF] [--courses-primary:#09539F] [--courses-tab-bg:#A5D2FF]">
      <Header />

      <main>
        <section id="courses" className="relative min-h-[510px] overflow-hidden bg-[var(--courses-hero-bg)]">
          <Image
            src="/featured_courses_ellipse.webp"
            alt=""
            aria-hidden="true"
            width={1332}
            height={689}
            className="pointer-events-none absolute right-[-255px] top-[-265px] w-[880px] max-w-none  sm:right-[-230px] sm:w-[980px] lg:right-[80px]  lg:top-[10px] lg:w-[1080px]"
          />

          <div className="relative z-10 mx-auto min-h-[510px] w-[var(--site-width)] max-w-[var(--container-max)] ">
            {/* <div className="relative mx-auto flex min-h-[510px] w-full max-w-[1210px] items-center"> */}
              <div className="relative z-20 w-full max-w-[540px] pb-[36px] pt-[58px] sm:pb-[46px] lg:pb-[56px] lg:pt-[44px]">
                <p className="text-[11px] font-bold uppercase tracking-[0.01em] text-[var(--courses-label)] sm:text-[12px]">
                  Our Courses
                </p>
                <h1 className="mt-[8px] max-w-[535px] text-[36px] font-bold leading-[1.08] tracking-[-0.018em] text-[var(--courses-heading)] sm:text-[42px] lg:text-[47px]">
                  Prepare for Your Medical
                  <br className="hidden sm:block" /> Career. One Exam at a Time.
                </h1>
                <p className="mt-[22px] max-w-[530px] text-[12px] leading-[1.62] text-[var(--courses-copy)] sm:text-[16px]">
                  Explore structured courses, question banks, SmartNotes, mock exams and expert-led learning designed for medical professionals preparing for key UK and Ireland medical assessments.
                </p>

                <div className="mt-[48px] flex flex-col gap-[14px] sm:flex-row sm:gap-[18px]">
                  {/* <a
                    href="#uk-plab-ukmla"
                    className="flex h-[51px] min-w-[186px] items-center justify-center gap-[12px] rounded-[7px] bg-[var(--courses-primary)] px-[22px] text-[12px] font-bold text-white transition-[filter,transform] duration-200 hover:-translate-y-[1px] hover:brightness-105 sm:text-[13px]"
                  >
                    Explore Courses
                    <ArrowIcon />
                  </a> */}
                  <a
                    href="#course-finder"
                    className="flex h-[51px] min-w-[186px] items-center justify-center rounded-[7px] border-[1.5px] border-[var(--courses-button-border)] bg-transparent px-[22px] text-[12px] font-bold text-[var(--courses-button-muted)] transition-colors duration-200 hover:border-[var(--courses-primary)] hover:text-[var(--courses-primary)] sm:text-[13px]"
                  >
                    Find Your Exam
                  </a>
                </div>

                <Image
                  src="/courses_hero_sec_image.webp"
                  alt="Medical professionals preparing for UK and Ireland medical exams"
                  width={815}
                  height={610}
                  priority
                  className="pointer-events-none mx-auto mt-[34px] h-auto w-full max-w-[610px] lg:hidden"
                />
              </div>

              <Image
                src="/courses_hero_sec_image.webp"
                alt="Medical professionals preparing for UK and Ireland medical exams"
                width={815}
                height={610}
                priority
                className="pointer-events-none absolute bottom-0 right-[-26px] z-30 hidden h-auto w-[650px] max-w-none lg:block xl:right-[-4px] xl:w-[675px]"
              />
            {/* </div> */}
          </div>
        </section>

        <section id="course-finder" className="relative z-20 -mt-[40px] px-[18px] sm:px-[24px]">
          <div className="mx-auto w-full max-w-[1260px] rounded-[24px] bg-[var(--courses-panel-bg)] px-[18px] py-[26px] text-center sm:px-[36px] sm:py-[29px] lg:px-[48px]">
            <h2 className="text-[24px] font-bold uppercase leading-[1.15] tracking-[-0.018em] text-[var(--courses-primary)] sm:text-[28px] lg:text-[30px]">
              Find the Right Course for Your Journey
            </h2>
            <p className="mx-auto mt-[10px] max-w-[710px] text-[11px] leading-[1.5] text-[var(--courses-copy)] sm:text-[12px]">
              Whether you&apos;re preparing for UK medical licensing, Ireland&apos;s PRES examinations, or the UK Foundation Programme, PLABcoach offers focused learning pathways to help you prepare with confidence.
            </p>

            <div className="mx-auto mt-[28px] grid max-w-[594px] grid-cols-1 gap-[12px] sm:grid-cols-3 sm:gap-[14px]">
              <a
                href="#uk-plab-ukmla"
                className="flex h-[50px] items-center justify-center gap-[10px] rounded-[7px] bg-[var(--courses-tab-bg)]  hover:bg-[var(--courses-primary)] px-[14px] text-[11px] font-bold text-white transition-[filter,transform] duration-200 hover:-translate-y-[1px] hover:brightness-105 sm:text-[12px]"
              >
                <Image src="/plab_icon.svg" alt="" aria-hidden="true" width={24} height={24} className="h-[20px] w-[20px]" />
                UK PLAB / UKMLA
              </a>
              <a
                href="#ireland-courses"
                className="flex h-[50px] items-center justify-center gap-[10px] rounded-[7px] bg-[var(--courses-tab-bg)] hover:bg-[var(--courses-primary)] px-[14px] text-[11px] font-bold text-white transition-[filter,transform] duration-200 hover:-translate-y-[1px] hover:brightness-[0.98] sm:text-[12px]"
              >
                <Image src="/ireland_icon.svg" alt="" aria-hidden="true" width={24} height={24} className="h-[20px] w-[20px]" />
                Ireland PRES
              </a>
              <a
                href="#uk-foundation"
                className="flex h-[50px] items-center justify-center gap-[10px] rounded-[7px] bg-[var(--courses-tab-bg)] hover:bg-[var(--courses-primary)] px-[14px] text-[11px] font-bold text-white transition-[filter,transform] duration-200 hover:-translate-y-[1px] hover:brightness-[0.98] sm:text-[12px]"
              >
                <Image src="/uk_icon.svg" alt="" aria-hidden="true" width={24} height={24} className="h-[20px] w-[20px]" />
                UK Foundation
              </a>
            </div>
          </div>
        </section>

        <div className="mt-[12px] sm:mt-[18px]">
          <CourseSection
            id="uk-plab-ukmla"
            title="UK PLAB / UKMLA Courses"
            description="Prepare for the knowledge and clinical assessments required to begin your medical career in the UK. The UKMLA assesses the core knowledge, skills and behaviours required for safe and effective medical practice."
            courses={ukCourses}
            decoration="left"
          />

          <CourseSection
            id="ireland-courses"
            title="Ireland Courses"
            description="Focused preparation for doctors preparing for the Pre-Registration Examination System in Ireland."
            courses={irelandCourses}
            decoration="right"
          />

          <CourseSection
            id="uk-foundation"
            title="UK Foundation Programme Courses"
            description="The UK Foundation Programme (UKFP) is a two-year, structured training program for newly qualified doctors in the UK, designed to bridge the gap between medical school and specialty training."
            courses={foundationCourses}
            decoration="left-large"
          />
        </div>

        <section className="bg-[var(--courses-learning-bg)] py-[64px] sm:py-[72px] lg:py-[66px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)] ">
            {/* <div className="mx-auto w-full max-w-[990px]"> */}
              <p className="text-[10px] font-bold uppercase tracking-[0.01em] text-[var(--courses-label)] sm:text-[11px]">
                Choose How You Want to Learn
              </p>
              <h2 className="mt-[5px] text-[25px] font-bold leading-[1.15] tracking-[-0.015em] text-[var(--courses-heading)] sm:text-[28px]">
                Flexible Learning. Built Around You.
              </h2>
              <p className="mt-[9px] text-[11px] leading-[1.5] text-[var(--courses-copy)] sm:text-[12px]">
                Choose the preparation format that works best for your schedule and learning style.
              </p>

              <div className="mt-[30px] grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
                {learningOptions.map((option) => (
                  <article
                    key={option.title}
                    className="group relative min-h-[390px] overflow-hidden rounded-[20px] bg-[var(--courses-learning-card-bg)]"
                  >
                    <Image
                      src="/young-man-learning-virtual-classroom.svg"
                      alt=""
                      fill
                      sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 47vw, 240px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/95" />
                    <div className="absolute inset-x-[16px] bottom-[16px] z-10 text-white">
                      <h3 className="text-[16px] font-bold leading-[1.2] sm:text-[24px]">
                        {option.title}
                      </h3>
                      <p className="mt-[9px] text-[10px] leading-[1.6] text-white/60 sm:text-[16px]">
                        {option.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="relative mt-[72px] min-h-[316px] overflow-hidden rounded-[20px] bg-[var(--courses-final-bg)] px-[32px] py-[42px] sm:px-[52px] lg:flex lg:items-center lg:px-[66px] lg:py-[52px]">
                <div className="relative z-10 max-w-[370px] text-white">
                  <h2 className="text-[31px] font-bold uppercase leading-[1.04] tracking-[-0.02em] sm:text-[34px]">
                    Ready to Start
                    <br /> Preparing?
                  </h2>
                  <p className="mt-[18px] max-w-[320px] text-[11px] leading-[1.6] text-[var(--courses-final-copy)] sm:text-[12px]">
                    Take the next step towards your medical career with structured, exam-focused learning.
                  </p>
                  {/* <a
                    href="#uk-plab-ukmla"
                    className="mt-[27px] inline-flex h-[42px] items-center justify-center gap-[10px] rounded-[5px] bg-black px-[22px] text-[10px] font-bold text-white transition-[filter,transform] duration-200 hover:-translate-y-[1px] hover:brightness-110 sm:text-[11px]"
                  >
                    Explore Courses
                    <ArrowIcon />
                  </a> */}
                </div>

                <Image
                  src="/books_images_courses.webp"
                  alt="Books and graduation cap"
                  width={717}
                  height={391}
                  className="pointer-events-none relative z-0 mx-auto mt-[32px] h-auto w-[520px] max-w-[88%] lg:absolute lg:bottom-[25px] lg:right-[34px] lg:mt-0 lg:w-[475px]"
                />
              </div>
            {/* </div> */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
