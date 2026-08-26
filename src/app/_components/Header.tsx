import Image from 'next/image';



export default function Header() {
  return (
    <>
     <header className="sticky top-0 z-50 border-b border-black/[0.05] bg-white/95 backdrop-blur-md">
             <div className="mx-auto grid h-[var(--header-height)] w-[var(--site-width)] max-w-[var(--container-max)] grid-cols-[1fr_auto_1fr] items-center gap-5">
               <nav className="hidden items-center gap-8 text-[14px] font-medium text-[var(--nav-muted)] lg:flex">
                 <a href="#courses" className="flex items-center gap-1.5 transition hover:text-[var(--primary)]">
                   Courses <span className="text-[11px]"><Image src="/course_header_arrow.svg" alt="Expand question" width={8} height={4}  className="w-2 h-auto" /></span>
                 </a>
                 <a href="#exam-dates" className="font-semibold text-[var(--accent)]">Important Exam Dates</a>
                 <a href="#blogs" className="transition hover:text-[var(--primary)]">Blogs</a>
                 <a href="#about-us" className="transition hover:text-[var(--primary)]">About Us</a>
               </nav>
     
               <a href="#top" aria-label="PLABCOACH home" className="justify-self-center">
                 <Image src="/new_plabcoach.webp" width={212} height={57} alt="PLABCOACH" className="h-auto w-[145px] sm:w-[190px] lg:w-[212px]" priority />
               </a>
     
               <div className="flex items-center justify-end gap-4 lg:gap-5">
                 <a href="#calendar" aria-label="Important dates" className="hidden lg:block">
                   <Image src="/calender_icon.svg" alt="" aria-hidden="true" width={18} height={18} className="h-[17px] w-[17px]" />
                 </a>
                 <span className="hidden h-[18px] w-px bg-[#dce5f0] lg:block" aria-hidden="true" />
                 <a href="#support" aria-label="Support" className="hidden lg:block">
                   <Image src="/header_phone_icon.svg" alt="" aria-hidden="true" width={18} height={18} className="h-[17px] w-[17px]" />
                 </a>
                 <span className="hidden h-[18px] w-px bg-[#dce5f0] lg:block" aria-hidden="true" />
                 <a href="#sign-in" className="hidden text-[14px] font-medium text-[var(--nav-muted)] sm:inline">Sign in</a>
                 <button className="h-[40px] rounded-[10px] bg-[var(--primary)] px-4 text-[11px] font-semibold text-white transition hover:brightness-105 sm:px-5 sm:text-[12px]">
                   Login Now
                 </button>
               </div>
             </div>
           </header>
    </>
  );
}