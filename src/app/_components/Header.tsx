import Image from 'next/image';



export default function Header() {
  return (
    <>
     <div className="mx-auto flex h-full max-w-[1480px] items-center justify-between gap-4">
              <nav className="hidden items-center gap-5 text-[0.82rem] font-medium text-[var(--muted)] md:flex lg:gap-7 lg:text-[0.9rem]">
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
    
              <div className="relative flex flex-col items-center">
                <a
                  className="text-[1rem] font-black tracking-[-0.06em] text-[var(--primary)] sm:text-[1.1rem]"
                  href="#top"
                  aria-label="PLABCOACH home"
                >
                  <Image src="/new_plabcoach.png" width={180} height={48} alt="logo" className="lg:w-[200px] 2xl:w-[210px]" />
                </a>
                <span className="-mt-1 h-1 w-16 rounded-full bg-[var(--primary)]" aria-hidden="true"></span>
              </div>
    
              <div className="ml-auto flex items-center gap-3 sm:gap-4">
                <a
                  className="hidden text-[0.75rem] font-medium text-[var(--muted)] transition hover:text-[var(--primary)] sm:block sm:text-[0.8rem]"
                  href="#sign-in"
                >
                  Sign in
                </a>
                <button className="rounded-lg bg-[var(--primary)] px-3 py-2 text-[0.7rem] font-semibold text-white shadow-[0_8px_16px_var(--shadow-btn-primary)] transition hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-sm">
                  Login Now
                </button>
              </div>
            </div>
    </>
  );
}