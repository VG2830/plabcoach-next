import Image from 'next/image';
import Link from "next/link";
const socialLinks = [
  { label: "facebook", href: "https://www.facebook.com/plabcoach1" },
  { label: "instagram", href: "https://www.instagram.com/plab.coach/" },
  { label: "whatsapp", href: "https://wa.me/447712222818" },
];
const COPYRIGHT_YEAR = new Date().getFullYear();
function SocialIcon({ label }: { label: string }) {
  const common = "h-[18px] w-[18px] fill-white";
  if (label === "facebook") {
    return <svg className={common} viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.2l.8-4H13V9c0-.7.3-1 1-1Z" /></svg>;
  }
  if (label === "instagram") {
    return <svg className={common} viewBox="0 0 24 24"><path fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM17.7 6.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" clipRule="evenodd" /></svg>;
  }
  return <svg className={common} viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>;
}
export default function Footer() {
    return(
    <>
     <footer id="blogs" className="relative overflow-hidden bg-[var(--footer-bg)] pt-8 text-[var(--footer-text)] lg:pt-10">
        <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
            <Image src="/new_plabcoach.webp" alt="PLABCOACH" width={212} height={57} className="h-auto w-[180px] lg:w-[198px] xl:w-[205px]" />
            <div className="flex w-full flex-wrap items-center gap-3 text-[14px] font-bold text-black sm:w-auto">
              <span className="mr-1 sm:mr-3">Follow us on </span>
              {socialLinks.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-8 w-8 place-items-center rounded-[4px] bg-black transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary)] hover:shadow-[0_8px_18px_rgba(11,93,168,0.22)]">
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-7 h-px bg-[#acd6ef] sm:mt-10" />

          <div className="grid gap-8 pb-4 pt-8 text-[15px] leading-7 sm:grid-cols-2 sm:gap-10 sm:pb-9 sm:pt-10 lg:grid-cols-[1.25fr_0.85fr_1fr_1.15fr] lg:gap-14">
            <section>
              {/* <h3 className="mb-3 font-semibold text-[var(--footer-heading)]">We have been</h3> */}
              <p className="max-w-[390px]">We have been delivering high-quality online courses for nearly a decade. All our instructors are experts with extensive experience in their respective fields. We offer comprehensive course materials, ensuring our students have everything they need to succeed.</p>
              <div className='flex space-between mt-4'>
                <p className='font-semibold pr-4 text-[var(--footer-heading)]'>We Accept</p>
                <Image src="/payment-cards.webp" alt='' width={200} height={40}></Image>
              </div>
            </section>

            <section>
              <h3 className="mb-3 font-semibold text-[var(--footer-heading)]">Courses</h3>
              <ul className="divide-y divide-[#dedede]">
                <li className="py-2 first:pt-0 transition-colors hover:text-[var(--primary)]"><a href="/courses#uk-plab-ukmla">UK PLAB / UKMLA Courses</a></li>
                <li className="py-2 transition-colors hover:text-[var(--primary)]"><a href="/courses#ireland-courses">Ireland Courses</a></li>
                <li className="py-2 transition-colors hover:text-[var(--primary)]"><a href="/courses#uk-foundation">UK Foundation Programme Courses</a></li>
                <li className="py-2 transition-colors hover:text-[var(--primary)]"><a href="/courses/msra">Upcoming Courses</a></li>
              </ul>
              <h3 className="mb-3 mt-6 font-semibold text-[var(--footer-heading)]">Important Links</h3>
              <p className="transition-colors hover:text-[var(--primary)]"><Link href="/no-refund-policy">NO Refund Policy</Link></p>
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
                  <a href="https://www.google.com/maps/search/?api=1&query=9+The+Pavilions,+Cranmore+Drive,+Shirley,+B90+4SB,+UK" target="_blank" rel="noopener noreferrer" className="hover:underline">9 The Pavilions, Cranmore Drive, Shirley,<br />UK B90 4SB</a>
                </li>
                <li className="flex gap-4 py-4">
                  <Image src="/mail_icon.svg" alt="" aria-hidden="true" width={24} height={24} className="mt-1 h-[24px] w-[24px] shrink-0" />
                  <a href="mailto:support@plabcoach.com" className="hover:underline">support@plabcoach.com</a>
                </li>
                <li className="flex gap-4 py-4">
                  <Image src="/phone_icon.svg" alt="" aria-hidden="true" width={20} height={20} className="mt-1 h-[20px] w-[20px] shrink-0" />
                  <span>UK: <a href="tel:+447712222818" className="hover:underline">+44 7712 222818</a>, UK: <a href="tel:+447956835626" className="hover:underline">+44 7956 835626</a><br />UK: <a href="tel:+447737713749" className="hover:underline">+44 7737 713749</a>, IN: <a href="tel:+918130014412" className="hover:underline">+91 81300 14412</a></span>
                </li>
              </ul>
              
              <div className='flex space-between gap-2 '>
                <a href="https://play.google.com/store/apps/details?id=com.edmingle.plabcoach" target="_blank" rel="noopener noreferrer">
                <Image src="/google-play-badge-light.svg" alt="" width={121} height={36} ></Image>
                </a>
                <a href="https://apps.apple.com/us/app/plabcoach/id6740922681" target="_blank" rel="noopener noreferrer">
                  <Image src="/appstore-badge-light.svg"  className="" alt="" width={108} height={36} ></Image>
                </a>
              </div>
              

            </section>
          </div>

          <div className="relative">
            <Image
              src="/footer_logo_with_blur.webp"
              alt=""
              aria-hidden="true"
              width={1480}
              height={398}
              className="relative block h-auto w-full opacity-[0.92]"
            />
          </div>
          <div className='text-center'><span>{COPYRIGHT_YEAR}. All Rights Reserved | Handcrafted by <a href="https://cogniq.in/" target="_blank"> Cogniq</a></span></div>
        </div>
      </footer>
    
    
    </>)
}