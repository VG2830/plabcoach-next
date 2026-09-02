import Image from 'next/image';
const socialLabels = ["facebook", "linkedin", "instagram", "x", "whatsapp"];
function SocialIcon({ label }: { label: string }) {
  const common = "h-[18px] w-[18px] fill-white";
  if (label === "facebook") {
    return <svg className={common} viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.2l.8-4H13V9c0-.7.3-1 1-1Z" /></svg>;
  }
  if (label === "linkedin") {
    return <svg className={common} viewBox="0 0 24 24"><path d="M5 8.2H1.8V22H5V8.2ZM3.4 2A2 2 0 1 0 3.4 6 2 2 0 0 0 3.4 2ZM22 14c0-4.2-2.2-6.1-5.2-6.1-2.4 0-3.5 1.3-4.1 2.2V8.2H9.5V22h3.2v-6.8c0-1.8.3-3.6 2.7-3.6 2.3 0 2.4 2.2 2.4 3.7V22H22V14Z" /></svg>;
  }
  if (label === "instagram") {
    return <svg className={common} viewBox="0 0 24 24"><path fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM17.7 6.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" clipRule="evenodd" /></svg>;
  }
  if (label === "x") {
    return <svg className={common} viewBox="0 0 24 24"><path d="M18.8 2H22l-7 8 8.2 12h-6.4l-5-6.6L6 22H2.8l7.5-8.6L2.4 2H9l4.5 6 5.3-6Zm-1.1 17.9h1.8L8 4H6.1l11.6 15.9Z" /></svg>;
  }
  return <svg className={common} viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 17.8a7.8 7.8 0 0 1-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3A7.8 7.8 0 1 1 12 19.8Zm4.3-5.8c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.6.1a6.2 6.2 0 0 1-3-2.6c-.2-.4.2-.4.7-1.2.1-.2.1-.4 0-.6l-.8-1.9c-.2-.5-.5-.4-.7-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.2-.6-.4Z" /></svg>;
}
export default function Footer() {
    return(
    <>
     <footer id="blogs" className="relative overflow-hidden bg-[var(--footer-bg)] pt-8 text-[var(--footer-text)] lg:pt-10">
        <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Image src="/new_plabcoach.webp" alt="PLABCOACH" width={212} height={57} className="h-auto w-[180px] lg:w-[198px] xl:w-[205px]" />
            <div className="flex items-center gap-3 text-[14px] font-bold text-black">
              <span className="mr-3">Social Media</span>
              {socialLabels.map((label) => (
                <a key={label} href={`#${label}`} aria-label={label} className="grid h-8 w-8 place-items-center rounded-[4px] bg-black transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary)] hover:shadow-[0_8px_18px_rgba(11,93,168,0.22)]">
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 h-px bg-[#acd6ef]" />

          <div className="grid gap-10 pb-9 pt-10 text-[15px] leading-7 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_1fr_1.15fr] lg:gap-14">
            <section>
              <h3 className="mb-3 font-semibold text-[var(--footer-heading)]">We have been</h3>
              <p className="max-w-[390px]">We have been delivering high-quality online courses for nearly a decade. All our instructors are experts with extensive experience in their respective fields. We offer comprehensive course materials, ensuring our students have everything they need to succeed.</p>
            </section>

            <section>
              <h3 className="mb-3 font-semibold text-[var(--footer-heading)]">Courses</h3>
              <ul className="divide-y divide-[#dedede]">
                <li className="py-2 first:pt-0 transition-colors hover:text-[var(--primary)]">UK PLAB / UKMLA Courses</li>
                <li className="py-2 transition-colors hover:text-[var(--primary)]">Ireland Courses</li>
                <li className="py-2 transition-colors hover:text-[var(--primary)]">UK Foundation Programme Courses</li>
                <li className="py-2 transition-colors hover:text-[var(--primary)]">Upcoming Courses</li>
              </ul>
              <h3 className="mb-3 mt-6 font-semibold text-[var(--footer-heading)]">Important Links</h3>
              <p>No Refund Policy</p>
            </section>

            <section>
              <h3 className="mb-3 font-semibold text-[var(--footer-heading)]">Recent Posts</h3>
              <ul className="divide-y divide-[#dedede]">
                <li className="pb-3">PRES2 SBA Practice: The Art of Eliminating Wrong Options Strategically</li>
                <li className="py-3">PRES 2 Question Bank: Why Quality Shapes Exam Performance More Than Question Volume</li>
                <li className="py-3">How Many PRES 2 Practice Questions Do You Actually Need Before the Exam</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3 font-semibold text-[var(--footer-heading)]">Contact Us</h3>
              <ul className="divide-y divide-[#dedede]">
                <li className="flex gap-4 pb-4">
                  <Image src="/location_icon.svg" alt="" aria-hidden="true" width={17} height={23} className="mt-1 h-[23px] w-[17px] shrink-0" />
                  <span>9 The Pavilions, Cranmore Drive, Shirley,<br />UK B90 4SB</span>
                </li>
                <li className="flex gap-4 py-4">
                  <Image src="/mail_icon.svg" alt="" aria-hidden="true" width={24} height={24} className="mt-1 h-[24px] w-[24px] shrink-0" />
                  <span>support@plabcoach.com</span>
                </li>
                <li className="flex gap-4 py-4">
                  <Image src="/phone_icon.svg" alt="" aria-hidden="true" width={20} height={20} className="mt-1 h-[20px] w-[20px] shrink-0" />
                  <span>UK: +44 7712 222818, UK: +44 7956 835626<br />UK: +44 7737 713749, IN: +91 81300 14412</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="relative h-[235px] overflow-hidden sm:h-[260px] lg:h-[280px]">
            <Image src="/footer_logo_with_blur.webp" alt="" aria-hidden="true" width={1480} height={281} className="absolute inset-x-0 top-0 h-auto w-full opacity-[0.92]" />
          </div>
        </div>
      </footer>
    
    
    </>)
}