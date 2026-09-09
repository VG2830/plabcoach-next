"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
      { label: "PLAB 1 / UKMLA — AKT", href: "/courses/plab-1-ukmla" },
      { label: "PLAB 2 / UKMLA — CPSA", href: "/courses/plab-2-ukmla" },
    ],
  },
  {
    label: "Ireland PRES",
    href: "/courses#ireland-courses",
    subCourses: [
      { label: "PRES Level 2", href: "/courses/pres-level-2" },
      { label: "PRES 3 — OSCE", href: "/courses/pres-3-osce" },
    ],
  },
  {
    label: "UK Foundation Programme",
    href: "/courses#uk-foundation",
    subCourses: [
      {
        label: "National Clinical Assessment (NCA)",
        href: "/courses/national-clinical-assessment",
      },
      {
        label: "Prescribing Safety Assessment (PSA)",
        href: "/courses/prescribing-safety-assessment",
      },
    ],
  },
];

const navigation = [
  { label: "Courses", href: "/courses", hasArrow: true },
  { label: "Important Exam Dates", href: "/important-exam" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/aboutus" },
  { label: "GMC Appraisal", href: "/appraisal" },
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
          <a href="#calendar" aria-label="Important dates" className="hidden lg:block">
            <Image
              src="/calender_icon.svg"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              className="h-[17px] w-[17px]"
            />
          </a>
          <span className="hidden h-[18px] w-px bg-[#dce5f0] lg:block" aria-hidden="true" />
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
            Login Now
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
  );
}
