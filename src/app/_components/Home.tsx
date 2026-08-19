import Image from 'next/image'

const stats = [
  { value: "10K+", label: "Students", icon: "/Capa_1 (2).svg" },
  { value: "95%", label: "Success Rate", icon: "/Capa_1 (4).svg" },
  { value: "100+", label: "Expert Sessions", icon: "/Frame.svg" },
  { value: "24/7", label: "Learning Access", icon: "clock" },
];

const features = [
  {
    title: "Video Courses",
    description: "High-quality video lessons covering all topics in detail",
    icon: "/Capa_1 (6).svg",
  },
  {
    title: "Live Coaching",
    description: "Interactive live classes with expert doctors and real-time doubt solving.",
    icon: "/Frame (1).svg",
  },
  {
    title: "Question Bank",
    description: "High-yield questions with detailed explanations and exam-style practice",
    icon: "/file.svg",
  },
  {
    title: "Mock Exams",
    description: "Realistic mock tests that simulate the actual exam environment.",
    icon: "/Capa_1 (5).svg",
  },
  {
    title: "Smart Tools",
    description: "Performance tracking, notes, flashcards and personalized study plans.",
    icon: "gear",
  },
  {
    title: "Mentor Support",
    description: "One-to-one guidance from UK-based medical professionals.",
    icon: "/Capa_1 (1).svg",
  },
];

const socials = [
  { label: "Facebook", href: "#facebook", glyph: "f" },
  { label: "LinkedIn", href: "#linkedin", glyph: "in" },
  { label: "Instagram", href: "#instagram", glyph: "◎" },
  { label: "X", href: "#x", glyph: "X" },
  { label: "WhatsApp", href: "#whatsapp", glyph: "☏" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text)]">

      <header className="sticky top-0 z-50 h-auto border-b border-[var(--line)] bg-white px-3 py-2 shadow-[0_4px_14px_var(--shadow-header)] sm:px-6 lg:px-10 xl:px-16 2xl:px-[120px]">
        <div className="mx-auto grid h-full w-full max-w-[1480px] grid-cols-3 items-center gap-4 py-0.5">
          {/* Left column: nav links, left-aligned */}
          <nav className="flex items-center justify-start gap-4 text-[0.82rem] font-medium text-[var(--muted)] sm:gap-5 md:gap-6 lg:gap-7 lg:text-[0.9rem]">
            <button className="hidden items-center gap-1 transition hover:text-[var(--primary)] md:flex">
              Courses <span aria-hidden="true">⌄</span>
            </button>
            <a className="hidden text-[var(--primary)] md:inline-block" href="#exam-dates">
              Important Exam Dates
            </a>
            <a className="hidden transition hover:text-[var(--primary)] md:inline-block" href="#blogs">
              Blogs
            </a>
            <a className="hidden transition hover:text-[var(--primary)] md:inline-block" href="#about-us">
              About Us
            </a>
          </nav>

          {/* Center column: logo, perfectly centered via grid */}
          <div className="relative flex items-center justify-center">
            <a
              href="#top"
              aria-label="PLABCOACH home"
            >
              <Image src="/new_plabcoach.png" width={180} height={48} alt="logo" className="lg:w-[200px] 2xl:w-[210px]" />
            </a>
            <span className="absolute -bottom-2.5 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-[var(--primary)]" aria-hidden="true"></span>
          </div>

          {/* Right column: auth, right-aligned */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 md:gap-4">
            <a
              className="hidden text-[0.78rem] font-medium text-[var(--muted)] transition hover:text-[var(--primary)] sm:inline-block sm:text-[0.8rem]"
              href="#sign-in"
            >
              Sign in
            </a>
            <button className="rounded-lg bg-[var(--primary)] px-3 py-2 text-[0.72rem] font-semibold text-white shadow-[0_6px_14px_var(--shadow-btn-primary)] transition hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-sm">
              Login Now
            </button>
          </div>
        </div>
      </header>

      <div id="top" className="mx-auto max-w-[1480px] px-3 pb-8 md:px-6 lg:px-10 xl:px-16 2xl:px-[120px]">
        <main className="relative min-h-[700px] overflow-hidden pt-4 md:min-h-[780px] md:pt-8 lg:min-h-[820px] 2xl:min-h-[840px] max-md:min-h-0">
          <Image
            src="/hero_banner_bg_ellipse.png"
            alt=""
            width={986}
            height={986}
            aria-hidden="true"
            className="pointer-events-none absolute left-[45%] top-[-280px] z-0 h-[850px] w-[850px] rotate-[-6.95deg] opacity-100 lg:left-[calc(50%-180px)] lg:h-[920px] lg:w-[920px] xl:top-[-300px] xl:left-[calc(50%-230px)] xl:h-[986px] xl:w-[986px] max-md:hidden"
          />

          <section className="relative z-20 w-full max-w-[500px] pt-8 text-left md:pt-12 lg:max-w-[560px] lg:pt-16 xl:pt-20 max-md:pt-6">
            <div className="mb-4 inline-flex items-center px-0 py-1 text-[0.68rem] font-medium tracking-[0.02em] text-[var(--primary)] md:mb-6 md:py-1.5 md:text-[0.7rem]">
              Trusted Medical Learning Platform
            </div>

            <h1 className="max-w-[480px] text-[clamp(1.8rem,4.2vw,2.6rem)] font-medium leading-[1] tracking-[-0.04em] text-[var(--text)] font-helvetica lg:max-w-[540px] lg:text-[clamp(2rem,4.5vw,3.1rem)] lg:leading-[0.96] lg:tracking-[-0.06em]">
              Prepare for PLAB &amp; UK Medical Exams with Confidence
            </h1>

            <p className="mt-4 max-w-[460px] text-[0.9rem] leading-6 text-[var(--muted)] md:mt-6 md:text-[0.95rem] md:leading-7 lg:max-w-[500px] lg:text-lg lg:leading-8">
              Expert-led coaching, question banks, mock exams and structured
              learning designed to help international doctors succeed.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4 lg:mt-10">
              <button className="rounded-xl bg-[var(--primary)] px-5 py-3 text-[0.85rem] font-semibold text-white shadow-[0_10px_18px_var(--shadow-btn-cta)] transition hover:brightness-110 md:px-6 md:py-3.5 md:text-[0.95rem] lg:px-7 lg:py-4 lg:text-base">
                Start Learning
              </button>
              <button className="rounded-xl border border-[var(--line)] bg-[var(--glass-btn-bg)] px-5 py-3 text-[0.85rem] font-semibold text-[var(--text)] shadow-sm transition hover:bg-[var(--glass-btn-bg-hover)] md:px-6 md:py-3.5 md:text-[0.95rem] lg:px-7 lg:py-4 lg:text-base">
                Explore Courses
              </button>
            </div>
          </section>

          <Image
            src="/hero_banner_image.png"
            alt="A team of doctors"
            width={853}
            height={626}
            className="pointer-events-none absolute left-[42%] top-[60px] z-10 h-[480px] w-auto max-w-none object-contain md:h-[540px] md:top-[70px] md:left-[45%] lg:left-[calc(50%-160px)] lg:h-[580px] lg:top-[85px] xl:h-[626px] xl:w-[853px] xl:left-[calc(50%-235px)] xl:top-[94px] max-md:relative max-md:left-auto max-md:top-auto max-md:mt-6 max-md:h-auto max-md:w-full"
          />

          <div className="relative z-30 mx-auto mt-[220px] w-full max-w-[900px] rounded-[22px] border border-[var(--line)] bg-[var(--glass-panel-bg)] py-5 shadow-[0_18px_40px_var(--shadow-panel)] backdrop-blur-[2px] md:mt-[260px] md:max-w-[940px] md:rounded-[24px] md:py-5.5 lg:mt-[290px] lg:max-w-[980px] lg:rounded-[26px] lg:py-6 2xl:mt-[310px] max-md:mt-6">
            <div className="grid grid-cols-2 px-2 lg:grid-cols-4 lg:divide-x lg:divide-[var(--line)] lg:px-0">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-center gap-3 px-3 py-3 md:gap-4 md:px-6 md:py-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5B65DC] md:h-14 md:w-14">
                    {item.icon === "clock" ? (
                      <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="21" r="13" stroke="white" strokeWidth="2.4" fill="none"/>
                        <path d="M20 12V21.5L26 25.5" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="28" cy="13" r="5.2" fill="#5B65DC" stroke="white" strokeWidth="1.8"/>
                        <text x="28" y="15.3" textAnchor="middle" fontSize="5.6" fontWeight="900" fill="white">24</text>
                      </svg>
                    ) : (
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={30}
                        height={30}
                        className="h-7 w-7 md:h-8 md:w-8"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    )}
                  </div>

                  <div>
                    <div className="text-[1.45rem] font-black leading-none tracking-[-0.02em] text-[#172544] md:text-[1.65rem] lg:text-[1.85rem]">
                      {item.value}
                    </div>
                    <div className="mt-1.5 text-[0.78rem] font-medium text-[#0f59bd] md:text-[0.84rem]">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* What We Offer Section */}
        <section className="relative mt-12 md:mt-16 lg:mt-20 py-4 md:py-6 lg:py-8">
          <Image
            src="/ellipse_offer_section.png"
            alt=""
            width={700}
            height={700}
            aria-hidden="true"
            className="pointer-events-none absolute right-[-180px] bottom-[-100px] z-0 h-[500px] w-[500px] rotate-[20deg] opacity-60 lg:right-[-150px] lg:h-[600px] lg:w-[600px] xl:right-[-120px] xl:h-[700px] xl:w-[700px] max-md:hidden"
          />

          <div className="relative z-10">
            <div className="mb-8 md:mb-10 lg:mb-12">
              <div className="mb-3 inline-flex items-center px-0 py-1 text-[0.68rem] font-medium tracking-[0.02em] text-[var(--primary)] md:mb-4 md:text-[0.7rem]">
                What We Offer
              </div>
              <h2 className="max-w-[560px] text-[clamp(1.4rem,3.5vw,2.1rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--text)] font-helvetica lg:max-w-[600px] lg:text-[clamp(1.6rem,3.8vw,2.4rem)] lg:tracking-[-0.04em]">
                Everything You Need to Succeed
              </h2>
              <p className="mt-3 max-w-[500px] text-[0.82rem] leading-5 text-[var(--muted)] md:mt-4 md:text-[0.88rem] md:leading-6">
                Comprehensive resources and expert guidance for your UK medical journey
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-5 lg:gap-6">
              {/* Left large image (4 cols at md+) */}
              <div className="md:col-span-4">
                <div className="relative w-full overflow-hidden rounded-[24px] shadow-md h-[280px] md:h-full md:min-h-[420px] lg:min-h-[460px] xl:min-h-[500px]">
                  <Image
                    src="/offer_section_image.png"
                    alt="Medical professional learning"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Right feature cards grid (8 cols at md+, inner 3-col grid, QB row-span-2) */}
              <div className="md:col-span-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:gap-4 lg:gap-5">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`relative rounded-[22px] bg-gradient-to-br from-[rgba(225,234,255,0.55)] to-[rgba(220,232,255,0.25)] p-4 md:p-5 lg:p-6 ${
                      index === 2 ? "sm:row-span-2" : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-[14px] bg-[rgba(15,89,189,0.1)] md:h-12 md:w-12">
                      {feature.title === "Video Courses" ? (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="4" width="14" height="13" rx="2.5" stroke="#0f59bd" strokeWidth="1.8" fill="none"/>
                          <path d="M16 9.5L21.5 6.2V17.8L16 14.5V9.5Z" stroke="#0f59bd" strokeWidth="1.8" fill="rgba(15,89,189,0.12)" strokeLinejoin="round"/>
                          <path d="M8 3.5C8 3.5 9.5 2 12 2C14.5 2 16 3.5 16 3.5" stroke="#0f59bd" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                          <path d="M5 8.5H7" stroke="#0f59bd" strokeWidth="1.8" strokeLinecap="round"/>
                          <circle cx="12" cy="9" r="2.6" stroke="#0f59bd" strokeWidth="1.6" fill="rgba(15,89,189,0.08)"/>
                          <path d="M10.8 8L13.5 9.3L10.8 10.6V8Z" fill="#0f59bd"/>
                        </svg>
                      ) : feature.title === "Live Coaching" ? (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8" r="3" stroke="#0f59bd" strokeWidth="1.8" fill="none"/>
                          <circle cx="15.5" cy="9.5" r="2.4" stroke="#0f59bd" strokeWidth="1.8" fill="none"/>
                          <path d="M2.5 19C2.5 16.7909 4.29086 15 6.5 15H10.5C12.7091 15 14.5 16.7909 14.5 19V19.7" stroke="#0f59bd" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                          <path d="M14 16.6C15.05 16.15 16.2 15.95 17.4 16C18.6 16.05 19.7 16.4 20.6 17" stroke="#0f59bd" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                          <path d="M13.5 20C14.8 20.2 16.2 20.4 17.4 20.4C18.65 20.4 19.8 20.15 20.8 19.8" stroke="#0f59bd" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                          <rect x="3" y="9.5" width="4" height="3.5" rx="0.8" stroke="#0f59bd" strokeWidth="1.6" fill="rgba(15,89,189,0.1)"/>
                          <path d="M4.5 11L6 12.5L8 10.5" stroke="#0f59bd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                      ) : feature.title === "Question Bank" ? (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 22V18C7 17.4477 7.44772 17 8 17H15C15.5523 17 16 17.4477 16 18V22" stroke="#0f59bd" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          <path d="M11.5 22V15C11.5 14.1716 12.1716 13.5 13 13.5C13.8284 13.5 14.5 14.1716 14.5 15V22" stroke="#0f59bd" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          <rect x="3" y="2.5" width="14" height="12" rx="2.5" stroke="#0f59bd" strokeWidth="1.8" fill="rgba(15,89,189,0.08)"/>
                          <path d="M6 6.5H14M6 9.5H14M6 12.5H11" stroke="#0f59bd" strokeWidth="1.6" strokeLinecap="round"/>
                          <circle cx="9.5" cy="18.5" r="0.8" fill="#0f59bd"/>
                        </svg>
                      ) : feature.title === "Mock Exams" ? (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="2" width="15" height="19" rx="2.5" stroke="#0f59bd" strokeWidth="1.8" fill="rgba(15,89,189,0.08)"/>
                          <path d="M8 6.5H15M8 9.5H15M8 12.5H13M8 15.5H12" stroke="#0f59bd" strokeWidth="1.6" strokeLinecap="round"/>
                          <rect x="4.5" y="18" width="4" height="2.8" rx="0.6" stroke="#0f59bd" strokeWidth="1.5" fill="rgba(15,89,189,0.1)"/>
                          <circle cx="16" cy="6.5" r="2.5" stroke="#0f59bd" strokeWidth="1.6" fill="rgba(15,89,189,0.08)"/>
                          <path d="M14.8 6.5L15.8 7.5L17.4 5.8" stroke="#0f59bd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : feature.title === "Smart Tools" ? (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="3" fill="#0f59bd"/>
                          <path d="M19.4 15.31L22.58 17.08L20.65 22.08L17.25 20.68C16.44 21.27 15.5 21.73 14.47 22.02L13.94 24H10.06L9.53 22.02C8.5 21.73 7.55 21.27 6.75 20.68L3.35 22.08L1.42 17.08L4.6 15.31C4.21 14.3 4 13.21 4 12.08C4 10.96 4.21 9.86 4.6 8.85L1.42 7.08L3.35 2.08L6.75 3.48C7.56 2.9 8.5 2.44 9.53 2.15L10.06 0.210001H13.94L14.47 2.15C15.5 2.44 16.44 2.91 17.25 3.48L20.65 2.08L22.58 7.08L19.4 8.85C19.79 9.86 20 10.96 20 12.08C20 13.21 19.79 14.3 19.4 15.31Z" fill="#0f59bd"/>
                        </svg>
                      ) : feature.title === "Mentor Support" ? (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="7.5" r="2.8" stroke="#0f59bd" strokeWidth="1.8" fill="none"/>
                          <circle cx="16" cy="9" r="2.3" stroke="#0f59bd" strokeWidth="1.8" fill="none"/>
                          <path d="M2.8 19.5C2.8 17.401 4.50096 15.7 6.6 15.7H10.4C12.499 15.7 14.2 17.401 14.2 19.5V20.3" stroke="#0f59bd" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                          <path d="M13.8 17.5C15.1 17.2 16.35 17.1 17.6 17.15C18.85 17.2 20.05 17.5 21.1 18.05" stroke="#0f59bd" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                          <path d="M13.8 20.5C15 20.8 16.3 21 17.6 21C18.85 21 20.05 20.85 21.1 20.6" stroke="#0f59bd" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                          <circle cx="8.5" cy="17" r="0.7" fill="#0f59bd"/>
                          <circle cx="16" cy="18.5" r="0.7" fill="#0f59bd"/>
                        </svg>
                      ) : null}
                    </div>

                    <h3 className="mb-2 text-[0.95rem] font-extrabold text-[#172544] md:text-[1rem] lg:text-[1.05rem]">
                      {feature.title}
                    </h3>
                    <p className="text-[0.78rem] leading-5 text-[var(--muted)] md:text-[0.82rem] md:leading-5 lg:text-[0.85rem] lg:leading-6">
                      {feature.description}
                    </p>

                    {index === 2 && (
                      <div className="absolute inset-x-6 top-1/2 h-px bg-[rgba(160,180,220,0.45)]" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="relative overflow-hidden bg-[var(--footer-bg)] px-3 pt-6 text-[var(--footer-text)] sm:px-6 sm:pt-8 md:px-6 lg:px-10 xl:px-16 2xl:px-[120px]">
        <div className="relative z-10 mx-auto w-full max-w-[1480px]">
          {/* header row of the footer: logo left, socials right */}
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 md:gap-8">
            <Image
              src="/new_plabcoach.png"
              alt="PLABCOACH"
              width={210}
              height={57}
              className="h-auto w-[120px] object-contain sm:w-[140px] md:w-[160px] lg:w-[180px]"
            />

            <div className="flex flex-wrap items-center gap-2 text-[0.62rem] font-bold text-[var(--text)] md:gap-3">
              <span className="text-[0.65rem] md:text-[0.7rem]">Social Media</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="ml-0.5 flex h-6 w-6 items-center justify-center rounded bg-[var(--footer-icon-bg)] text-[0.7rem] font-bold text-[var(--footer-icon-fg)] md:h-7 md:w-7 md:text-[0.75rem]"
                  href={s.href}
                  aria-label={s.label}
                >
                  {s.glyph}
                </a>
              ))}
            </div>
          </div>

          <div className="my-4 h-px bg-[var(--footer-border)] sm:my-5 md:my-6" />

          {/* main section of the footer: 4-column body */}
          <div className="grid grid-cols-1 gap-6 pb-6 text-[0.7rem] leading-[1.55] sm:grid-cols-2 sm:gap-7 sm:pb-8 md:gap-8 md:pb-10 md:text-[0.75rem] lg:grid-cols-[1.25fr_0.9fr_1fr_1.35fr] lg:gap-10 lg:text-[0.8rem]">
            <section>
              <h2 className="mb-2 font-semibold text-[var(--footer-heading)] md:text-[0.82rem]">We have been</h2>
              <p className="max-w-md break-words leading-relaxed">
                We have been delivering high-quality online courses for nearly a decade.
                All our instructors are experts with extensive experience in their
                respective fields. We offer comprehensive course materials, ensuring our
                students have everything they need to succeed.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-semibold text-[var(--footer-heading)] md:text-[0.82rem]">Courses</h2>
              <ul className="space-y-2.5 break-words md:space-y-3">
                <li>UK PLAB / UKMLA Courses</li>
                <li>Ireland Courses</li>
                <li>UK Foundation Programme Courses</li>
                <li>Upcoming Courses</li>
              </ul>
              <h2 className="mb-2 mt-4 font-semibold text-[var(--footer-heading)] md:mt-5 md:text-[0.82rem]">Important Links</h2>
              <p>No Refund Policy</p>
            </section>

            <section>
              <h2 className="mb-2 font-semibold text-[var(--footer-heading)] md:text-[0.82rem]">Recent Posts</h2>
              <ul className="space-y-2.5 break-words md:space-y-3">
                <li>PRES2 SBA Practice: The Art of Eliminating Wrong Options Strategically</li>
                <li>PRES 2 Question Bank: Why Quality Shapes Exam Performance More Than Question Volume</li>
                <li>How Many PRES 2 Practice Questions Do You Actually Need Before the Exam</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 font-semibold text-[var(--footer-heading)] md:text-[0.82rem]">Contact Us</h2>
              <ul className="space-y-2.5 break-words md:space-y-3">
                <li className="flex gap-2 border-b border-[var(--footer-divider)] pb-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--footer-heading)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>
                    9 The Pavilions, Cranmore Drive, Shirley,
                    <br />
                    UK B90 4SB
                  </span>
                </li>
                <li className="flex gap-2 border-b border-[var(--footer-divider)] pb-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--footer-heading)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>support@plabcoach.com</span>
                </li>
                <li className="flex gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--footer-heading)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>
                    UK: +44 7712 222818, UK: +44 7956 835626
                    <br />
                    UK: +44 7737 713749, IN: +91 81300 14412
                  </span>
                </li>
              </ul>
            </section>
          </div>

          {/* oversized bleed logo, cropped by the footer edge, low opacity */}
          <div className="relative flex h-[110px] items-start justify-center overflow-hidden sm:h-[140px] md:h-[160px] lg:h-[180px]">
            <Image
              src="/footer_logo.png"
              alt=""
              aria-hidden="true"
              width={1480}
              height={280}
              className="w-full max-w-[800px] object-contain object-top opacity-25 md:max-w-[900px] lg:max-w-[960px]"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}