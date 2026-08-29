import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";
import type { CourseDetailData } from "./courseData";

const learningOptions = [
  {
    icon: "/recorded_cour_icon.svg",
    title: "Recorded Sessions for Self-Paced Learning",
  },
  {
    icon: "/live_coaching_icon.svg",
    title: "Live Coaching Mode",
  },
  {
    icon: "/online_session_icon.svg",
    title: "Live Courses available Online and Offline",
    note: "(limited Offline seats)",
  },
  {
    icon: "/self_placed_icon.svg",
    title: "Self-Paced Learning Videos",
  },
  {
    icon: "/study_materia_icon.svg",
    title: "Study Material available year-round",
  },
];

function SubscribeButton({ href, className = "" }: { href: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex h-[50px] min-w-[186px] items-center justify-center rounded-[7px] bg-[var(--course-detail-primary)] px-[26px] text-[13px] font-bold text-white transition-[filter,transform] duration-200 hover:-translate-y-[1px] hover:brightness-105 ${className}`}
    >
      Subscribe Now
    </Link>
  );
}

export default function CourseDetail({ course }: { course: CourseDetailData }) {
  const plansHref = `/courses/${course.slug}/plans`;

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[var(--course-detail-heading)]">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[var(--course-detail-hero-bg)] pb-[190px] pt-[72px] sm:pb-[220px] sm:pt-[82px] lg:pb-[245px] lg:pt-[92px]">
          <Image
            src="/featured_courses_ellipse.webp"
            alt=""
            aria-hidden="true"
            width={1332}
            height={689}
            className="pointer-events-none absolute right-[-405px] top-[-150px] w-[900px] max-w-none opacity-70 sm:right-[-330px] sm:w-[1040px] lg:right-[-145px] lg:top-[-135px] lg:w-[1180px]"
          />

          <div className="relative z-10 mx-auto grid w-[var(--site-width)] max-w-[var(--container-max)] gap-[42px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-[88px] xl:gap-[112px]">
            <div className="max-w-[610px]">
              <p className="text-[12px] font-bold uppercase tracking-[0.01em] text-[var(--course-detail-label)] sm:text-[13px]">
                {course.eyebrow}
              </p>
              <h1 className="mt-[10px] text-[35px] font-bold leading-[1.08] tracking-[-0.022em] text-[var(--course-detail-heading)] sm:text-[43px] lg:text-[48px] xl:text-[51px]">
                {course.title}
              </h1>

              <div className="mt-[38px] flex flex-col gap-[14px] sm:flex-row sm:gap-[20px] lg:mt-[44px]">
                <SubscribeButton href={plansHref} />
                <a
                  href="#course-learning"
                  className="inline-flex h-[50px] min-w-[186px] items-center justify-center rounded-[7px] border-[1.5px] border-[var(--course-detail-button-border)] px-[26px] text-[13px] font-bold text-[var(--course-detail-button-muted)] transition-colors duration-200 hover:border-[var(--course-detail-primary)] hover:text-[var(--course-detail-primary)]"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="max-w-[690px] text-[13px] leading-[1.72] text-[var(--course-detail-copy)] sm:text-[14px] lg:pt-[4px] lg:text-[15px]">
              <p className="font-medium text-[var(--course-detail-body-strong)]">{course.lead}</p>
              {course.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-[15px]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-20 -mt-[155px] sm:-mt-[180px] lg:-mt-[205px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="relative mx-auto aspect-video w-full max-w-[1246px] overflow-hidden rounded-[18px] bg-[#071d33] shadow-[0_16px_34px_rgba(18,31,56,0.20)] sm:rounded-[22px]">
              <iframe
                className="absolute inset-0 h-full w-full border-0"
                src={`https://www.youtube.com/embed/${course.videoId}?rel=0`}
                title={course.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section id="course-learning" className="relative overflow-hidden bg-white pb-[82px] pt-[70px] sm:pb-[92px] sm:pt-[84px] lg:pb-[104px] lg:pt-[96px]">
          <Image
            src="/featured_courses_ellipse.webp"
            alt=""
            aria-hidden="true"
            width={1332}
            height={689}
            className="pointer-events-none absolute left-[-430px] top-[18px] z-0 w-[820px] max-w-none  sm:left-[-390px] sm:w-[980px] lg:left-[-350px] lg:top-[10px] lg:w-[1080px]"
          />

          <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div>
              <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.018em] text-[var(--course-detail-heading)] sm:text-[33px] lg:text-[36px]">
                Course &amp; Learning Options
              </h2>
              <p className="mt-[7px] text-[11px] leading-[1.5] text-[var(--course-detail-copy)] sm:text-[12px]">
                Comprehensive Notes and study material.
              </p>
            </div>

            <div className="mt-[42px] grid gap-[28px] lg:grid-cols-[205px_1fr] lg:items-start lg:gap-[40px] xl:grid-cols-[220px_1fr] xl:gap-[54px]">
              <h3 className="max-w-[170px] text-[24px] font-bold leading-[1.08] tracking-[-0.01em] text-[var(--course-detail-option-title)] sm:text-[28px] lg:pt-[4px] lg:text-[31px]">
                The
                <br /> course is
                <br /> available
                <br /> in
              </h3>

              <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-[16px]">
                {learningOptions.map((option) => (
                  <article
                    key={option.title}
                    className="flex min-h-[150px] flex-col rounded-[18px] border border-[var(--course-detail-card-border)] bg-white px-[17px] py-[18px] shadow-[0_4px_14px_rgba(25,42,70,0.025)] sm:min-h-[160px] lg:min-h-[176px] lg:px-[18px] lg:py-[20px]"
                  >
                    <div className="grid h-[48px] w-[48px] place-items-center rounded-[10px] bg-[var(--course-detail-icon-bg)]">
                      <Image
                        src={option.icon}
                        alt=""
                        aria-hidden="true"
                        width={34}
                        height={34}
                        className="h-[32px] w-[32px] object-contain"
                      />
                    </div>
                    <p className="mt-[21px] text-[11px] font-semibold leading-[1.35] text-[var(--course-detail-card-text)] sm:text-[12px] lg:text-[13px]">
                      {option.title}
                    </p>
                    {option.note ? (
                      <p className="mt-[3px] text-[9px] font-semibold leading-[1.3] text-[var(--course-detail-card-text)] lg:text-[10px]">
                        {option.note}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

            <div className="relative mt-[76px] min-h-[310px] overflow-hidden rounded-[22px] bg-[var(--course-detail-cta-bg)] px-[28px] py-[42px] sm:px-[50px] sm:py-[50px] lg:flex lg:min-h-[330px] lg:items-center lg:px-[70px] lg:py-[52px]">
              <div className="relative z-10 max-w-[520px] text-white">
                <h2 className="text-[30px] font-bold uppercase leading-[1.08] tracking-[-0.018em] sm:text-[36px] lg:text-[40px]">
                  {course.ctaTitle}
                </h2>
                <p className="mt-[30px] max-w-[400px] text-[11px] leading-[1.55] text-[var(--course-detail-cta-copy)] sm:text-[12px]">
                  {course.ctaCopy}
                </p>
                <SubscribeButton
                  href={plansHref}
                  className="mt-[24px] h-[44px] min-w-[160px] rounded-[5px] bg-black px-[22px] text-[11px] hover:brightness-110"
                />
              </div>

              <Image
                src="/courses_inner_pg_ima.webp"
                alt="Clock and calendar representing exam preparation"
                width={795}
                height={438}
                className="pointer-events-none relative z-0 mx-auto mt-[30px] h-auto w-full max-w-[650px] lg:absolute lg:bottom-0 lg:right-[-8px] lg:mt-0 lg:w-[540px] xl:right-[8px] xl:w-[670px]"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
