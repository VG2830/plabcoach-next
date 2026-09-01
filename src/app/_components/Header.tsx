"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Courses", href: "/courses", hasArrow: true },
  { label: "Important Exam Dates", href: "#" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/aboutus" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.05] bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto grid h-[var(--header-height)] w-[var(--site-width)] max-w-[var(--container-max)] grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-5">
        <nav className="hidden items-center gap-8 text-[14px] font-medium text-[var(--nav-muted)] lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1.5 transition hover:text-[var(--primary)]"
            >
              {item.label}
              {item.hasArrow ? (
                <span className="text-[11px]">
                  <Image
                    src="/course_header_arrow.svg"
                    alt=""
                    aria-hidden="true"
                    width={8}
                    height={4}
                    className="h-auto w-2"
                  />
                </span>
              ) : null}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center justify-self-start rounded-[9px] text-[var(--ink)] transition hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
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
          <a href="#support" aria-label="Support" className="hidden lg:block">
            <Image
              src="/header_phone_icon.svg"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              className="h-[17px] w-[17px]"
            />
          </a>
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
          className={`absolute left-0 right-0 top-full overflow-hidden rounded-b-[18px] border-x border-b border-black/[0.06] bg-white shadow-[0_18px_40px_rgba(20,35,75,0.12)] transition-[max-height,opacity,transform] duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[430px] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-4 py-4 text-[14px] font-medium text-[var(--nav-muted)] sm:px-6">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[46px] items-center justify-between border-b border-black/[0.05] px-2 transition hover:text-[var(--primary)]"
              >
                <span>{item.label}</span>
                {item.hasArrow ? (
                  <Image
                    src="/course_header_arrow.svg"
                    alt=""
                    aria-hidden="true"
                    width={8}
                    height={4}
                    className="h-auto w-2"
                  />
                ) : null}
              </Link>
            ))}
            <a
              href="#sign-in"
              onClick={() => setMenuOpen(false)}
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
