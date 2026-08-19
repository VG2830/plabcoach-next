import Image from 'next/image'

const stats = [
  { value: "10K+", label: "Students", icon: "👥" },
  { value: "95%", label: "Success Rate", icon: "✓" },
  { value: "100+", label: "Expert Sessions", icon: "⏱" },
  { value: "24/7", label: "Learning Access", icon: "◔" },
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

      <header className="sticky top-0 z-50 h-[83px] border border-[var(--line)] bg-white/90 px-4 py-3 shadow-[0_8px_24px_var(--shadow-header)] backdrop-blur-md sm:px-8 lg:px-16 xl:px-[220px]">
        <div className="mx-auto flex h-full max-w-[1920px] items-center justify-between">
          <nav className="hidden items-center gap-7 text-[0.90rem] font-medium text-[var(--muted)] md:flex">
            <button className="flex items-center gap-1 transition hover:text-[var(--primary)]">
              Courses <span aria-hidden="true">⌄</span>
            </button>
            <a className="text-[var(--primary)]" href="#exam-dates">
              Important Exam Dates
            </a>
            <a className="transition hover:text-[var(--primary)]" href="#blogs">
              Blogs
            </a>
            <a className="transition hover:text-[var(--primary)]" href="#about-us">
              About Us
            </a>
          </nav>

          <a
            className="absolute left-1/2 -translate-x-1/2 text-[1rem] font-black tracking-[-0.06em] text-[var(--primary)] sm:text-[1.1rem]"
            href="#top"
            aria-label="PLABCOACH home"
          >
            <Image src="/new_plabcoach.png" width={210} height={57} alt="logo" />
          </a>

          <div className="ml-auto flex items-center gap-4">
            <a
              className="hidden text-[0.80rem] font-medium text-[var(--muted)] transition hover:text-[var(--primary)] sm:block"
              href="#sign-in"
            >
              Sign in
            </a>
            <button className="rounded-lg bg-[var(--primary)] px-4 py-2.5 text-xs font-semibold text-white shadow-[0_8px_16px_var(--shadow-btn-primary)] transition hover:brightness-110 sm:px-5 sm:text-sm">
              Login Now
            </button>
          </div>
        </div>
      </header>

      <div id="top" className="mx-auto max-w-[1920px] px-4 pb-10 md:px-8 lg:px-12 xl:px-[220px]">
        <main className="relative min-h-[840px] overflow-hidden pt-8 md:pt-12 max-md:min-h-0">
          <Image
            src="/hero_banner_bg_image.png"
            alt=""
            width={986}
            height={986}
            aria-hidden="true"
            className="pointer-events-none absolute left-[calc(50%-262px)] top-[-310px] z-0 h-[986px] w-[986px] rotate-[-6.95deg] opacity-100 max-md:hidden"
          />

          <section className="relative z-20 w-full max-w-[560px] pt-16 text-left md:pt-20 max-md:pt-8">
            <div className="mb-6 inline-flex items-center px-0 py-1.5 text-[0.7rem] font-medium tracking-[0.02em] text-[var(--primary)]">
              Trusted Medical Learning Platform
            </div>

            <h1 className="max-w-[540px] text-[clamp(1.5rem,5vw,3.1rem)] font-medium leading-[0.96] tracking-[-0.06em] text-[var(--text)] font-helvetica">
              Prepare for PLAB &amp; UK Medical Exams with Confidence
            </h1>

            <p className="mt-6 max-w-[500px] text-lg leading-8 text-[var(--muted)]">
              Expert-led coaching, question banks, mock exams and structured
              learning designed to help international doctors succeed.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-[var(--primary)] px-7 py-4 text-base font-semibold text-white shadow-[0_14px_24px_var(--shadow-btn-cta)] transition hover:brightness-110">
                Start Learning
              </button>
              <button className="rounded-xl border border-[var(--line)] bg-[var(--glass-btn-bg)] px-7 py-4 text-base font-semibold text-[var(--text)] shadow-sm transition hover:bg-[var(--glass-btn-bg-hover)]">
                Explore Courses
              </button>
            </div>
          </section>

          <Image
            src="/hero_banner_image.png"
            alt="A team of doctors"
            width={853}
            height={626}
            className="pointer-events-none absolute left-[calc(50%-235px)] top-[94px] z-10 h-[626px] w-[853px] max-w-none object-contain max-md:relative max-md:left-auto max-md:top-auto max-md:mt-8 max-md:h-auto max-md:w-full"
          />

          <div className="relative z-30 mx-auto mt-[300px] w-full max-w-[980px] rounded-[30px] border border-[var(--line)] bg-[var(--glass-panel-bg)] px-3 py-5 shadow-[0_26px_50px_var(--shadow-panel)] backdrop-blur-sm md:px-6 md:py-6 max-md:mt-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-[18px] bg-[var(--glass-card-bg)] px-4 py-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--icon-tint-bg)] text-xl text-[var(--primary)]">
                    {item.icon}
                  </div>

                  <div>
                    <div className="text-2xl font-black tracking-[-0.05em] text-[var(--primary)]">
                      {item.value}
                    </div>
                    <div className="text-sm font-medium text-[var(--muted)]">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <footer className="relative overflow-hidden bg-[var(--footer-bg)] px-4 pt-8 text-[var(--footer-text)] sm:px-6 sm:pt-10 md:px-8 lg:px-16 xl:px-[220px]">
        <div className="relative z-10 mx-auto w-full max-w-[1920px]">
          {/* header row of the footer: logo left, socials right */}
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-8">
            <Image
              src="/new_plabcoach.png"
              alt="PLABCOACH"
              width={210}
              height={57}
              className="h-auto w-[110px] object-contain sm:w-[130px]"
            />

            <div className="flex flex-wrap items-center gap-2 text-[0.62rem] font-bold text-[var(--text)]">
              <span>Social Media</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="ml-1 flex h-4 w-4 items-center justify-center rounded-[2px] bg-[var(--footer-icon-bg)] text-[0.6rem] font-bold text-[var(--footer-icon-fg)]"
                  href={s.href}
                  aria-label={s.label}
                >
                  {s.glyph}
                </a>
              ))}
            </div>
          </div>

          <div className="my-5 h-px bg-[var(--footer-border)]" />

          {/* main section of the footer: 4-column body */}
          <div className="grid grid-cols-1 gap-7 pb-8 text-[0.68rem] leading-[1.55] sm:grid-cols-2 md:gap-8 md:pb-10 lg:grid-cols-[1.25fr_0.9fr_1fr_1.35fr] lg:gap-10">
            <section>
              <h2 className="mb-2 font-medium text-[var(--footer-heading)]">We have been</h2>
              <p className="max-w-md break-words">
                We have been delivering high-quality online courses for nearly a decade.
                All our instructors are experts with extensive experience in their
                respective fields. We offer comprehensive course materials, ensuring our
                students have everything they need to succeed.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-medium text-[var(--footer-heading)]">Courses</h2>
              <ul className="space-y-3 break-words">
                <li>UK PLAB / UKMLA Courses</li>
                <li>Ireland Courses</li>
                <li>UK Foundation Programme Courses</li>
                <li>Upcoming Courses</li>
              </ul>
              <h2 className="mb-2 mt-5 font-medium text-[var(--footer-heading)]">Important Links</h2>
              <p>No Refund Policy</p>
            </section>

            <section>
              <h2 className="mb-2 font-medium text-[var(--footer-heading)]">Recent Posts</h2>
              <ul className="space-y-3 break-words">
                <li>PRES2 SBA Practice: The Art of Eliminating Wrong Options Strategically</li>
                <li>PRES 2 Question Bank: Why Quality Shapes Exam Performance More Than Question Volume</li>
                <li>How Many PRES 2 Practice Questions Do You Actually Need Before the Exam</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 font-medium text-[var(--footer-heading)]">Contact Us</h2>
              <ul className="space-y-3 break-words">
                <li className="flex gap-2 border-b border-[var(--footer-divider)] pb-2">
                  <span className="shrink-0 text-base text-[var(--footer-heading)]">⌖</span>
                  <span>
                    9 The Pavilions, Cranmore Drive, Shirley,
                    <br />
                    UK B90 4SB
                  </span>
                </li>
                <li className="flex gap-2 border-b border-[var(--footer-divider)] pb-2">
                  <span className="shrink-0 text-base text-[var(--footer-heading)]">✉</span>
                  <span>support@plabcoach.com</span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-base text-[var(--footer-heading)]">⌕</span>
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
          <div className="relative flex h-[130px] items-start justify-center overflow-hidden sm:h-[160px] md:h-[180px]">
            <Image
              src="/footer_logo.png"
              alt=""
              aria-hidden="true"
              width={1480}
              height={280}
              className="w-full max-w-[960px] object-contain object-top opacity-25"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}