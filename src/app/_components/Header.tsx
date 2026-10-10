"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Phone } from "@deemlol/next-icons"

type CourseMenuGroup = {
  label: string;
  href: string;
  subCourses: {
    label: string;
    href: string;
  }[];
};

const courseMenu: CourseMenuGroup[] = [
  {
    label: "UK PLAB / UKMLA",
    href: "/courses#uk-plab-ukmla",
    subCourses: [
      { label: "PLAB 1 / UKMLA — AKT", href: "/courses/plab-1-ukmla-akt" },
      { label: "PLAB 2 / UKMLA — CPSA", href: "/courses/plab-2-ukmla-cpsa" },
    ],
  },
  {
    label: "Ireland PRES",
    href: "/courses#ireland-courses",
    subCourses: [
      { label: "PRES Level 2", href: "/courses/pres-2" },
      { label: "PRES 3 — OSCE", href: "/courses/pres-3" },
    ],
  },
  {
    label: "UK Foundation Programme",
    href: "/courses#uk-foundation",
    subCourses: [
      {
        label: "National Clinical Assessment (NCA)",
        href: "/courses/ukfpo-nca",
      },
      {
        label: "Prescribing Safety Assessment (PSA)",
        href: "/courses/ukfpo-psa",
      },
    ],
  },
  {
    label: "Upcoming Courses",
    href: "#",
    subCourses: [
      {
        label: "Multi-Specialty Recruitment Assessment (MSRA)",
        href: "/courses/msra",
      },
      {
        label: "MRCGP Applied Knowledge Test (AKT)",
        href: "/courses/mrcp-akt",
      },
    ],
  },
];

const navigation = [
  { label: "Courses", href: "/courses", hasArrow: true },
  { label: "Important Exam Dates", href: "/important-exam-dates" },
  { label: "Blogs", href: "/blogs/" },
  { label: "About Us", href: "/about-us/" },
  { label: "GMC Appraisal", href: "/drappraisals" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileCourseGroup, setMobileCourseGroup] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/courses" ? pathname.startsWith("/courses") : pathname === href;

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileCoursesOpen(false);
    setMobileCourseGroup(null);
  };

  const toggleMenu = () => {
    setMenuOpen((open) => {
      if (open) {
        setMobileCoursesOpen(false);
        setMobileCourseGroup(null);
      }
      return !open;
    });
  };

  return (
    <>
      <div className="bg-[#1760a6] text-white">
        <div className="mx-auto grid min-h-[44px] w-[var(--site-width)] max-w-[var(--container-max)] grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="flex min-w-0 items-center gap-2 sm:gap-4">
            <a
              href="mailto:support@plabcoach.com"
              aria-label="Email support@plabcoach.com"
              className="flex min-w-0 items-center gap-2 text-[12px] font-semibold hover:text-white/80"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white">
                <Image src="/mail_icon.svg" alt="" aria-hidden="true" width={13} height={11} />
              </span>
              <span className="hidden truncate sm:inline">support@plabcoach.com</span>
            </a>
            <div className="flex items-center gap-2 text-[12px] font-semibold sm:gap-3">
              <a
                href="tel:+447712222818"
                aria-label="Call +44 7712 222818"
                className="flex items-center gap-2 hover:text-white/80"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white">
                  <Phone size={16} color="#09539F" strokeWidth={1.5} />
                </span>
                <span className="hidden whitespace-nowrap sm:inline">+44 7712 222818</span>
              </a>
              <a
                href="tel:+918130014412"
                aria-label="Call +91 81300 14412"
                className="hidden whitespace-nowrap hover:text-white/80 sm:inline"
              >
                +91 81300 14412
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5">
            <a href="https://www.facebook.com/plabcoach1" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#1760a6] transition hover:bg-white/80">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.2l.8-4H13V9c0-.7.3-1 1-1Z" /></svg>
            </a>
            <a href="https://www.instagram.com/plab.coach/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#1760a6] transition hover:bg-white/80">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM17.7 6.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.youtube.com/@plab_coach" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#1760a6] transition hover:bg-white/80">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>
            </a>
          </div>

          <div className="flex items-center justify-end gap-2">
            <a href="https://apps.apple.com/us/app/plabcoach/id6740922681" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store" className="flex items-center gap-1.5 text-white transition hover:text-white/80">
              <Image src="/Apple.svg" alt="" aria-hidden="true" width={14} height={18} />
              <span className="hidden text-[10px] font-medium leading-tight sm:inline">Download on the<br /><strong className="text-[12px]">App Store</strong></span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.edmingle.plabcoach" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play" className="flex items-center gap-1.5 text-white transition hover:text-white/80">
              <Image src="/Playstore.svg" alt="" aria-hidden="true" width={16} height={18} />
              <span className="hidden text-[10px] font-medium leading-tight sm:inline">Get it on<br /><strong className="text-[12px]">Google Play</strong></span>
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-black/[0.05] bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto grid h-[var(--header-height)] w-[var(--site-width)] max-w-[var(--container-max)] grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-5">
        <nav className="hidden items-center gap-8 text-[14px] font-medium text-[var(--nav-muted)] lg:flex">
          {navigation.map((item) => {
            if (item.label === "Courses") {
              return (
                <div key={item.label} className="group/courses relative">
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    aria-haspopup="true"
                    className={`flex items-center gap-1.5 transition hover:text-[var(--primary)] ${
                      isActive(item.href) ? "font-semibold text-[var(--accent)]" : ""
                    }`}
                  >
                    {item.label}
                    <Image
                      src="/course_header_arrow.svg"
                      alt=""
                      aria-hidden="true"
                      width={8}
                      height={4}
                      className="h-auto w-2 transition-transform duration-200 group-hover/courses:rotate-180"
                    />
                  </Link>

                  <div className="invisible pointer-events-none absolute left-0 top-full z-[70] w-[292px] translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover/courses:visible group-hover/courses:pointer-events-auto group-hover/courses:translate-y-0 group-hover/courses:opacity-100">
                    <div className="rounded-[12px] border border-[#E5EAF2] bg-white p-2 shadow-[0_16px_42px_rgba(21,42,79,0.14)]">
                      {courseMenu.map((group) => (
                        <div key={group.label} className="group/course relative">
                          <Link
                            href={group.href}
                            className="flex min-h-[46px] items-center justify-between gap-4 rounded-[8px] px-3.5 text-[13px] font-semibold text-[var(--ink)] transition-colors duration-150 hover:bg-[#F5F8FD] hover:text-[var(--primary)]"
                          >
                            <span>{group.label}</span>
                            <Image
                              src="/course_header_arrow.svg"
                              alt=""
                              aria-hidden="true"
                              width={8}
                              height={4}
                              className="h-auto w-2 -rotate-90 opacity-70 transition-transform duration-150 group-hover/course:translate-x-px"
                            />
                          </Link>

                          <div className="invisible pointer-events-none absolute left-full top-0 z-[80] w-[318px] -translate-x-1 pl-2 opacity-0 transition-all duration-200 group-hover/course:visible group-hover/course:pointer-events-auto group-hover/course:translate-x-0 group-hover/course:opacity-100">
                            <div className="rounded-[12px] border border-[#E5EAF2] bg-white p-2 shadow-[0_16px_42px_rgba(21,42,79,0.14)]">
                              <p className="px-3.5 pb-1.5 pt-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--accent)]">
                                {group.label}
                              </p>
                              {group.subCourses.map((subCourse) => (
                                <Link
                                  key={subCourse.href}
                                  href={subCourse.href}
                                  className="flex min-h-[44px] items-center rounded-[8px] px-3.5 py-2 text-[12.5px] font-medium leading-[1.35] text-[var(--nav-muted)] transition-colors duration-150 hover:bg-[#F5F8FD] hover:text-[var(--primary)]"
                                >
                                  {subCourse.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="mt-1 border-t border-black/[0.06] pt-1">
                        <Link
                          href="/courses"
                          className="flex min-h-[42px] items-center rounded-[8px] px-3.5 text-[12.5px] font-semibold text-[var(--primary)] transition-colors duration-150 hover:bg-[#F5F8FD]"
                        >
                          View all courses
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`flex items-center gap-1.5 transition hover:text-[var(--primary)] ${
                  isActive(item.href) ? "font-semibold text-[var(--accent)]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center justify-self-start rounded-[9px] text-[var(--ink)] transition hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
        >
          <span className="relative block h-[18px] w-[22px]" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-[2px] w-[22px] rounded-full bg-current transition duration-200 ${
                menuOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[8px] h-[2px] w-[22px] rounded-full bg-current transition duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[16px] h-[2px] w-[22px] rounded-full bg-current transition duration-200 ${
                menuOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <Link href="/" aria-label="PLABCOACH home" className="justify-self-center">
          <Image
            src="/new_plabcoach.webp"
            width={212}
            height={57}
            alt="PLABCOACH"
            className="h-auto w-[145px] sm:w-[190px] lg:w-[212px]"
            priority
          />
        </Link>

        <div className="flex items-center justify-end gap-4 lg:gap-5">
          {/* <a href="#calendar" aria-label="Important dates" className="hidden lg:block">
            <Image
              src="/calender_icon.svg"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              className="h-[17px] w-[17px]"
            />
          </a>
          <span className="hidden h-[18px] w-px bg-[#dce5f0] lg:block" aria-hidden="true" /> */}
          <Link href="/contact-us" aria-label="Contact Us" className="hidden lg:block">
            <Image
              src="/header_phone_icon.svg"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              className="h-[17px] w-[17px]"
            />
          </Link>
          <span className="hidden h-[18px] w-px bg-[#dce5f0] lg:block" aria-hidden="true" />
          <a
            href="#sign-in"
            className="hidden text-[14px] font-medium text-[var(--nav-muted)] transition hover:text-[var(--primary)] sm:inline"
          >
            Sign in
          </a>
          <button className="h-[40px] rounded-[10px] bg-[var(--primary)] px-4 text-[11px] font-semibold text-white transition hover:brightness-105 sm:px-5 sm:text-[12px]">
            Sign up
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-full overflow-x-hidden rounded-b-[18px] border-x border-b border-black/[0.06] bg-white shadow-[0_18px_40px_rgba(20,35,75,0.12)] transition-[max-height,opacity,transform] duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[75vh] translate-y-0 overflow-y-auto opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 overflow-y-hidden opacity-0"
          }`}
        >
          <nav className="flex min-w-0 flex-col px-4 py-4 text-[14px] font-medium text-[var(--nav-muted)] sm:px-6">
            <div className="border-b border-black/[0.05]">
              <button
                type="button"
                onClick={() => {
                  setMobileCoursesOpen((open) => !open);
                  if (mobileCoursesOpen) setMobileCourseGroup(null);
                }}
                aria-expanded={mobileCoursesOpen}
                className={`flex min-h-[46px] w-full items-center justify-between gap-3 px-2 text-left transition hover:text-[var(--primary)] ${
                  isActive("/courses") ? "font-semibold text-[var(--accent)]" : ""
                }`}
              >
                <span>Courses</span>
                <Image
                  src="/course_header_arrow.svg"
                  alt=""
                  aria-hidden="true"
                  width={8}
                  height={4}
                  className={`h-auto w-2 shrink-0 transition-transform duration-200 ${
                    mobileCoursesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                  mobileCoursesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="mb-2 ml-2 min-w-0 border-l border-[#E6EBF3] pl-3 pr-1">
                    <Link
                      href="/courses"
                      onClick={closeMobileMenu}
                      className="flex min-h-[40px] items-center rounded-[8px] px-3 text-[12.5px] font-semibold text-[var(--primary)] transition-colors hover:bg-[#F5F8FD]"
                    >
                      View all courses
                    </Link>

                    {courseMenu.map((group) => {
                      const groupOpen = mobileCourseGroup === group.label;

                      return (
                        <div key={group.label} className="min-w-0">
                          <button
                            type="button"
                            onClick={() =>
                              setMobileCourseGroup((current) =>
                                current === group.label ? null : group.label,
                              )
                            }
                            aria-expanded={groupOpen}
                            className="flex min-h-[43px] w-full min-w-0 items-center justify-between gap-3 rounded-[8px] px-3 text-left text-[12.5px] font-semibold text-[var(--ink)] transition-colors hover:bg-[#F5F8FD] hover:text-[var(--primary)]"
                          >
                            <span className="min-w-0 break-words">{group.label}</span>
                            <Image
                              src="/course_header_arrow.svg"
                              alt=""
                              aria-hidden="true"
                              width={8}
                              height={4}
                              className={`h-auto w-2 shrink-0 transition-transform duration-200 ${
                                groupOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <div
                            className={`grid transition-[grid-template-rows,opacity] duration-200 ${
                              groupOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="min-h-0 overflow-hidden">
                              <div className="mb-1 ml-3 min-w-0 border-l border-[#E6EBF3] pl-2">
                                <Link
                                  href={group.href}
                                  onClick={closeMobileMenu}
                                  className="flex min-h-[38px] items-center rounded-[7px] px-3 text-[12px] font-medium text-[var(--primary)] transition-colors hover:bg-[#F5F8FD]"
                                >
                                  Course overview
                                </Link>
                                {group.subCourses.map((subCourse) => (
                                  <Link
                                    key={subCourse.href}
                                    href={subCourse.href}
                                    onClick={closeMobileMenu}
                                    className="flex min-h-[40px] min-w-0 items-center rounded-[7px] px-3 py-2 text-[12px] font-medium leading-[1.35] text-[var(--nav-muted)] transition-colors hover:bg-[#F5F8FD] hover:text-[var(--primary)]"
                                  >
                                    <span className="min-w-0 break-words">{subCourse.label}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {navigation
              .filter((item) => item.label !== "Courses")
              .map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex min-h-[46px] items-center justify-between border-b border-black/[0.05] px-2 transition hover:text-[var(--primary)] ${
                    isActive(item.href) ? "font-semibold text-[var(--accent)]" : ""
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              ))}

            <Link
              href="/contact-us"
              onClick={closeMobileMenu}
              className="flex min-h-[46px] items-center justify-between border-b border-black/[0.05] px-2 transition hover:text-[var(--primary)]"
            >
              <span>Contact Us</span>
            </Link>
            <a
              href="#sign-in"
              onClick={closeMobileMenu}
              className="flex min-h-[46px] items-center px-2 transition hover:text-[var(--primary)] sm:hidden"
            >
              Sign in
            </a>
          </nav>
        </div>
      </div>
      </header>
    </>
  );
}
