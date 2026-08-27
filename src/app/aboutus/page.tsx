import Image from "next/image";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Link from "next/link";

// function ArrowIcon() {
//   return (
//     <svg
//       aria-hidden="true"
//       viewBox="0 0 24 24"
//       className="h-[20px] w-[20px] shrink-0"
//       fill="none"
//     >
//       <path
//         d="M5 12h13m-5-5 5 5-5 5"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

function CoachBadge({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex min-w-[245px] items-center gap-[13px] rounded-[11px] border border-[#dbe7fb] bg-white px-[14px] py-[12px] shadow-[0_5px_15px_rgba(24,50,105,0.13)] sm:min-w-[265px] sm:px-[16px] sm:py-[14px] lg:min-w-[285px]">
      <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[8px] bg-[var(--about-badge-icon-bg)] sm:h-[46px] sm:w-[46px]">
        <Image src={icon} alt="" aria-hidden="true" width={28} height={28} className="h-[27px] w-[27px] object-contain" />
      </span>
      <span className="leading-tight">
        <span className="block text-[10px] font-bold text-[var(--about-label)] sm:text-[11px]">
          {title}
        </span>
        <span className="mt-[4px] block text-[10px] font-medium text-[var(--about-copy)] sm:text-[11px]">
          {text}
        </span>
      </span>
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[var(--ink)]">
      <Header />

      <main>
        <section id="about-us" className="relative h-[575px] overflow-visible bg-[var(--about-hero-bg)] sm:h-[590px] lg:h-[575px]">
          <Image
            src="/featured_courses_ellipse.webp"
            alt=""
            aria-hidden="true"
            width={1332}
            height={689}
            className="pointer-events-none absolute left-1/2 top-[-20px] z-0 w-[820px] max-w-none -translate-x-1/2 sm:top-[-35px] sm:w-[1040px] lg:top-[-44px] lg:w-[1310px]"
          />

          <div className="relative z-10 mx-auto h-full w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="mx-auto flex max-w-[930px] flex-col items-center px-2 pt-[86px] text-center sm:pt-[105px] lg:pt-[145px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.015em] text-[var(--about-label)] sm:text-[12px] lg:text-[13px]">
                About Us
              </p>

              <h1 className="mt-[10px] text-[38px] font-bold leading-[1.04] tracking-[-0.025em] text-[var(--about-heading)] sm:text-[46px] lg:text-[52px]">
                Every Doctor&apos;s Journey Needs
                <br className="hidden sm:block" /> the <span className="text-[var(--about-accent)]">Right Guidance</span>
              </h1>

              <div className="mt-[48px] flex w-full max-w-[478px] flex-col gap-[14px] sm:flex-row sm:justify-center sm:gap-[22px] lg:mt-[60px]">
                <Link
                href="/courses"
                className="flex h-[58px] flex-1 items-center justify-center gap-[13px] rounded-[7px] bg-[var(--primary)] px-[22px] text-[13px] font-bold text-white transition-[filter] duration-200 hover:brightness-105 sm:text-[15px]"
                >
                Explore Courses
                </Link>
                {/* <a
                  href="/courses#course-finder"
                  className="flex h-[58px] flex-1 items-center justify-center rounded-[7px] border-[2px] border-[var(--button-border)] bg-transparent px-[22px] text-[13px] font-bold text-[var(--button-muted)] transition-colors duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)] sm:text-[15px]"
                >
                  Find Your Exam
                </a> */}
              </div>
            </div>

            <div className="absolute bottom-[-430px] left-1/2 z-20 w-full max-w-[1246px] -translate-x-1/2 px-2 sm:px-5 lg:px-0">
              <div className="relative aspect-[1246/556] w-full overflow-hidden rounded-[22px] bg-[#102a32] shadow-[0_18px_34px_rgba(32,43,70,0.20)] sm:rounded-[28px]">
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  src="https://www.youtube.com/embed/6nXIgV_8TVY?si=0u8-r7v4rnh-eADI"
                  title="Every Doctor's Journey Needs the Right Guidance - PLABCoach"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white pb-[92px] pt-[500px] sm:pb-[110px] sm:pt-[520px] lg:pb-[145px] lg:pt-[535px]">
          <Image
            src="/featured_courses_ellipse.webp"
            alt=""
            aria-hidden="true"
            width={1332}
            height={689}
            className="pointer-events-none absolute left-[-260px] top-[405px] z-0 w-[820px] max-w-none sm:left-[-320px] sm:w-[1040px] lg:left-[-330px] lg:top-[420px] lg:w-[1120px]"
          />
          <Image
            src="/featured_courses_ellipse.webp"
            alt=""
            aria-hidden="true"
            width={1332}
            height={689}
            className="pointer-events-none absolute bottom-[-40px] right-[-360px] z-0 w-[920px] max-w-none rotate-180 sm:w-[1080px] lg:bottom-[-150px] lg:right-[-335px] lg:w-[1180px]"
          />

          <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <article className="grid items-center gap-[48px] lg:grid-cols-2 lg:gap-[76px]">
              <div className="relative mx-auto w-full max-w-[650px] lg:mx-0 lg:max-w-none">
                <div className="relative mx-auto h-[390px] w-[84%] max-w-[520px] sm:h-[500px] lg:ml-[36px] lg:h-[520px] lg:w-[535px]">
                  <div className="absolute bottom-[35px] left-[17px] right-[17px] h-[250px] rounded-[19px] bg-[var(--about-portrait-bg)] sm:bottom-[44px] sm:h-[315px] lg:bottom-[40px] lg:h-[312px]" />
                  <Image
                    src="/karam_image.webp"
                    alt="Dr Karam Singh"
                    fill
                    sizes="(max-width: 1023px) 80vw, 535px"
                    className="z-10 object-contain object-bottom"
                  />
                  <div className="absolute bottom-[12px] right-[-28px] z-20 sm:right-[-44px] lg:bottom-[8px] lg:right-[-55px]">
                    <CoachBadge
                      icon="/hero_sec_expert_icon_1.svg"
                      title="10+ Years Of Teaching Experience"
                      text="Thousands of doctors guided"
                    />
                  </div>
                </div>
              </div>

              <div className="max-w-[690px] lg:pr-[28px] xl:pr-[78px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.015em] text-[var(--about-label)] sm:text-[11px]">
                  Founder &amp; Coach
                </p>
                <h2 className="mt-[5px] text-[29px] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--about-heading)] sm:text-[34px] lg:text-[36px]">
                  Dr Karam Singh (M.D. MRCGP)
                </h2>
                <div className="mt-[14px] space-y-[13px] text-[12px] leading-[1.64] text-[var(--about-copy)] sm:text-[13px] lg:text-[14px]">
                  <p>
                    I am Dr Karam Singh (M.D. MRCGP), founder of Plabcoach, with over a decade of experience in teaching live and online courses designed to help aspiring doctors succeed in their medical licensing exams. Born and raised in the UK, my journey took me overseas to study medicine, a path that mirrors the challenges many of you face today. I am licensed to practice medicine in both the United Kingdom and the United States and currently serve as a GP in Birmingham and Solihull.
                  </p>
                  <p>
                    Having personally navigated the rigorous process of medical licensing, I bring not only professional expertise but also a deep understanding of the perseverance required to achieve success. Over the past 10 years, I have guided thousands of doctors, equipping them with the knowledge and strategies needed to excel in the PLAB exam, regardless of any career gaps they may have encountered.
                  </p>
                  <p>
                    Through my comprehensive teaching of all core subjects mandated by the General Medical Council UK, coupled with a steadfast commitment to my students&apos; success, I am dedicated to making your journey towards medical licensing a smoother and more rewarding experience.
                  </p>
                </div>
              </div>
            </article>

            <article className="mt-[120px] grid items-center gap-[48px] sm:mt-[150px] lg:mt-[175px] lg:grid-cols-2 lg:gap-[76px]">
              <div className="order-2 max-w-[690px] lg:order-1 lg:pl-[36px] xl:pl-[0px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.015em] text-[var(--about-label)] sm:text-[11px]">
                  Co-Founder &amp; Coach
                </p>
                <h2 className="mt-[5px] text-[29px] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--about-heading)] sm:text-[34px] lg:text-[36px]">
                  Dr. Anjum Kohli (M.D.)
                </h2>
                <div className="mt-[14px] space-y-[13px] text-[12px] leading-[1.64] text-[var(--about-copy)] sm:text-[13px] lg:text-[14px]">
                  <p>
                    I am Dr. Anjum Kohli, born and raised in the UK. My journey into medicine began with a BSc in Biomedical Science from St George&apos;s University in London. Driven by a lifelong dream to become a doctor, I pursued my medical degree in Poland, graduating in 2015.
                  </p>
                  <p>
                    Following a necessary six-year hiatus due to medical reasons, I successfully completed the NCA (formerly CSA) in 2021. This gap, filled with challenges and personal growth, has given me a unique perspective on the anxieties and pressures that many of you may face in your medical journey.
                  </p>
                  <p>
                    Currently, I am a Foundation Year 2 doctor in the central Birmingham deanery, having begun my foundation training at UCLH in London. Beyond my clinical practice, I have a deep passion for medical education and nutrition.
                  </p>
                  <p>
                    On a personal note, I am a proud mother of a one-year-old, with another little one on the way! Balancing my professional and personal life has been an incredible journey, and I&apos;m excited to share my experiences and insights with you.
                  </p>
                  <p>
                    Through my experience of teaching all the core subjects required by the General Medical Council UK and my everlasting commitment and passion for success I have all that it takes to make your journey an easier one to bear.
                  </p>
                </div>
              </div>

              <div className="order-1 relative mx-auto w-full max-w-[650px] lg:order-2 lg:mx-0 lg:max-w-none">
                <div className="relative mx-auto h-[390px] w-[84%] max-w-[520px] sm:h-[500px] lg:mr-[35px] lg:h-[520px] lg:w-[535px]">
                  <div className="absolute bottom-[35px] left-[17px] right-[17px] h-[250px] rounded-[19px] bg-[var(--about-portrait-bg)] sm:bottom-[44px] sm:h-[315px] lg:bottom-[40px] lg:h-[312px]" />
                  <Image
                    src="/anjum_image.webp"
                    alt="Dr Anjum Kohli"
                    fill
                    sizes="(max-width: 1023px) 80vw, 535px"
                    className="z-10 object-contain object-bottom"
                  />
                  <div className="absolute bottom-[12px] left-[-28px] z-20 sm:left-[-44px] lg:bottom-[8px] lg:left-[-55px]">
                    <CoachBadge
                      icon="/second_sec_mentor_icon_2.svg"
                      title="Passionate About Teaching"
                      text="Committed to Your Success"
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
