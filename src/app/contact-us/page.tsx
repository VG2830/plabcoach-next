import type { Metadata } from "next";
import Image from "next/image";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | PLABCoach",
  description: "Get in touch with PLABCoach for course support and enquiries.",
};

// function LocationIcon() {
//   return (
//     <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[26px] w-[22px] shrink-0 fill-[var(--contact-heading)]">
//       <path d="M12 2.4a6.8 6.8 0 0 0-6.8 6.8c0 5.05 5.72 11 6.37 11.66a.62.62 0 0 0 .86 0c.65-.66 6.37-6.61 6.37-11.66A6.8 6.8 0 0 0 12 2.4Zm0 9.38a2.58 2.58 0 1 1 0-5.16 2.58 2.58 0 0 1 0 5.16Z" />
//     </svg>
//   );
// }

// function MailIcon() {
//   return (
//     <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[24px] w-[24px] shrink-0 fill-[var(--contact-heading)]">
//       <path d="M3.6 5.4h16.8A1.6 1.6 0 0 1 22 7v10a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 17V7a1.6 1.6 0 0 1 1.6-1.6Zm8.4 6.6 7.58-5.03H4.42L12 12Zm-8.4-3.9V17h16.8V8.1l-8 5.3a.76.76 0 0 1-.8 0l-8-5.3Z" />
//     </svg>
//   );
// }

// function PhoneIcon() {
//   return (
//     <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[26px] w-[24px] shrink-0 fill-[var(--contact-heading)]">
//       <path d="M7.08 3.35h2.5c.35 0 .65.24.74.58l1.12 4.07a.77.77 0 0 1-.2.77l-1.56 1.56a15.9 15.9 0 0 0 4.12 4.12l1.56-1.56a.77.77 0 0 1 .77-.2l4.07 1.12c.34.1.58.4.58.74v2.5a1.13 1.13 0 0 1-1.13 1.13h-.75C10.04 18.18 4.95 13.1 4.95 6.43v-.75c0-.62.5-1.13 1.13-1.13Z" />
//     </svg>
//   );
// }

function ContactInfoCard() {
  return (
    <aside className="relative z-30 w-full rounded-[30px] bg-[var(--contact-card-bg)] px-[28px] py-[38px] text-[var(--contact-heading)] sm:px-[34px] sm:py-[42px] xl:h-[520px] xl:w-full xl:px-[28px] xl:py-[68px]">
      <h2 className="text-[34px] font-bold leading-none tracking-[-0.02em] text-[var(--contact-heading)] sm:text-[40px] xl:text-[50px]">
        Contact Us
      </h2>

      <div className="mt-[34px] space-y-[30px] text-[13px] leading-[1.48] text-[var(--contact-copy)] sm:text-[14px] xl:mt-[44px] xl:space-y-[60px] xl:text-[13px]">
        <div className="flex items-start gap-[16px]">
          {/* <span className="mt-[2px]"><LocationIcon /></span> */}
          <span className="mt-[2px]"><Image src="/location_icon.svg" width={17} height={23} alt="location icon" className="mt-1 h-[23px] w-[17px] shrink-0"/></span>

          <p>
            9 The Pavilions, Cranmore Drive,
            <br />
            Shirley, UK B90 4SB
          </p>
        </div>

        <div className="flex items-start gap-[16px]">
          <span className="mt-[2px]"><Image src="/mail_icon.svg" width={24} height={24} alt="mail icon" className="mt-1 h-[24px] w-[24px] shrink-0"/></span>
          <div>
            <p>support@plabcoach.com</p>
            <p>info@plabcoach.com</p>
          </div>
        </div>

        <div className="flex items-start gap-[16px]">
          <span className="mt-[1px]"><Image src="/phone_icon.svg" width={20} height={20} alt="phone icon" className="mt-1 h-[20px] w-[20px] shrink-0"/></span>
          <div className="grid w-full gap-x-[22px] gap-y-[10px] sm:grid-cols-2 xl:grid-cols-2">
            <div>
              <p className="mb-[5px] whitespace-nowrap font-medium text-[var(--contact-heading)]">UK Contact Number</p>
              <p>+44 7712 222818</p>
              <p>+44 7956 835626</p>
            </div>
            <div>
              <p className="mb-[5px] whitespace-nowrap font-medium text-[var(--contact-heading)]">Indian Contact Number</p>
              <p>+91 81300 14412</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

const inputClass =
  "h-full w-full border-0 bg-transparent text-[13px] text-[var(--contact-heading)] outline-none placeholder:text-[var(--contact-placeholder)]";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[var(--ink)]">
      <Header />

      <main className="bg-[var(--contact-page-bg)]">
        <section className="relative overflow-hidden pb-[64px] pt-[82px] sm:pb-[78px] xl:pb-[64px] xl:pt-[82px]">
          {/* Decorative ellipse/rings - positioned to mirror the supplied desktop reference. */}
          {/* <div className="pointer-events-none absolute left-1/2 top-[-270px] z-0 h-[680px] w-[680px] -translate-x-1/2 rounded-full border-[56px] border-white/55 sm:top-[-300px] sm:h-[820px] sm:w-[820px] sm:border-[68px] lg:left-[53%] lg:top-[-350px] lg:h-[980px] lg:w-[980px] lg:border-[76px]" />
          <div className="pointer-events-none absolute left-1/2 top-[-215px] z-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full border-[42px] border-white/50 sm:top-[-232px] sm:h-[660px] sm:w-[660px] lg:left-[53%] lg:top-[-255px] lg:h-[760px] lg:w-[760px] lg:border-[62px]" />
          <div className="pointer-events-none absolute left-[58%] top-[-460px] z-0 h-[780px] w-[780px] rounded-full border-[58px] border-[var(--contact-ring-purple)]/85 sm:left-[60%] sm:h-[900px] sm:w-[900px] sm:border-[68px] lg:left-[62%] lg:top-[-570px] lg:h-[1120px] lg:w-[1120px] lg:border-[76px]" />
          <div className="pointer-events-none absolute left-[-430px] top-[380px] z-0 h-[940px] w-[940px] rounded-full border-[72px] border-white/26 sm:left-[-480px] sm:h-[1080px] sm:w-[1080px] lg:left-[-640px] lg:top-[410px] lg:h-[1320px] lg:w-[1320px] lg:border-[88px]" /> */}
          <Image 
          src="/hero_banner_bg_ellipse.webp"
          alt="Decorative rings"
          className="pointer-events-none absolute left-1/2 top-[-270px] z-0 h-[680px] w-[680px] -translate-x-1/2 rounded-full sm:top-[-300px] sm:h-[820px] sm:w-[820px] lg:left-[77%] lg:top-[-350px] lg:h-[980px] lg:w-[980px]"
          width={980}
          height={980}
          priority
          />

          <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="relative min-h-0 xl:h-[730px]">
              <div className="relative ml-auto w-full rounded-[28px] bg-white px-[20px] py-[38px] shadow-[0_10px_28px_rgba(23,36,90,0.035)] sm:px-[34px] sm:py-[48px] xl:h-[730px] xl:w-[83.38%] xl:rounded-[30px] xl:px-0 xl:py-0">
                
                <div className="mx-auto w-full max-w-[810px] xl:absolute xl:left-[26.26%] xl:top-[74px] xl:mx-0 xl:w-[65.64%] xl:max-w-none">
                  {/* <Image
                src="/contact_us_inner_ellipse.svg"
                alt="decorative rings"
                className="pointer-events-none absolute left-1/2 top-[-270px] z-0 h-[680px] w-[680px] -translate-x-1/2 rounded-full sm:top-[-300px] sm:h-[820px] sm:w-[820px] lg:left-[53%] lg:top-[-350px] lg:h-[980px] lg:w-[980px]"
                width={980}
                height={980}
                priority
                /> */}
                  <div>
                    <h1 className="text-[38px] font-bold leading-none tracking-[-0.025em] text-[var(--contact-heading)] sm:text-[44px] xl:text-[50px]">
                      Get in Touch
                    </h1>
                    <p className="mt-[11px] text-[12px] text-[var(--contact-copy)] sm:text-[13px]">
                      Feel free to drop us a line below!
                    </p>
                  </div>

                  <form className="mt-[46px] space-y-[24px]" action="#" method="post">
                    <div className="flex h-[58px] items-center rounded-[21px] border border-[var(--contact-field-border)] bg-[var(--contact-field-bg)] px-[24px]">
                      <input type="text" name="name" placeholder="Your Name" className={inputClass} />
                    </div>

                    <div className="relative flex h-[58px] items-center rounded-[21px] border border-[var(--contact-field-border)] bg-[var(--contact-field-bg)] px-[24px]">
                      <select
                        name="course"
                        defaultValue=""
                        className="h-full w-full appearance-none border-0 bg-transparent pr-[32px] text-[13px] text-[var(--contact-placeholder)] outline-none"
                      >
                        <option value="" disabled>Course You Are Interested In</option>
                        <option value="plab-1">PLAB 1 / UKMLA</option>
                        <option value="plab-2">PLAB 2 / UKMLA</option>
                        <option value="pres-3">PRES 3</option>
                        <option value="psa">Prescribing Safety Assessment</option>
                      </select>
                      <span className="pointer-events-none absolute right-[25px] top-1/2 -translate-y-1/2 text-[13px] text-[var(--contact-placeholder)]">▾</span>
                    </div>

                    <div className="grid gap-[24px] sm:grid-cols-[1.08fr_0.9fr] sm:gap-[48px]">
                      <div className="flex h-[58px] items-center rounded-[21px] border border-[var(--contact-field-border)] bg-[var(--contact-field-bg)] px-[24px]">
                        <input type="email" name="email" placeholder="Email Address" className={inputClass} />
                      </div>

                      <div className="flex h-[58px] items-center gap-[12px] rounded-[21px] border border-[var(--contact-field-border)] bg-[var(--contact-field-bg)] px-[20px]">
                        <span className="text-[20px] leading-none" aria-hidden="true">🇮🇳</span>
                        <span className="h-[20px] w-px bg-[#d9dce7]" aria-hidden="true" />
                        <input type="tel" name="phone" placeholder="Phone Number" className={inputClass} />
                      </div>
                    </div>

                    <div className="rounded-[21px] border border-[var(--contact-field-border)] bg-[var(--contact-field-bg)] px-[24px] py-[18px]">
                      <textarea
                        name="message"
                        placeholder="Write Your Message"
                        rows={4}
                        className="min-h-[100px] w-full resize-none border-0 bg-transparent text-[13px] leading-[1.5] text-[var(--contact-heading)] outline-none placeholder:text-[var(--contact-placeholder)]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex h-[60px] min-w-[228px] items-center justify-center rounded-[7px] bg-[var(--contact-button)] px-[30px] text-[12px] font-bold uppercase tracking-[0.01em] text-white transition-[transform,filter,box-shadow] duration-200 hover:-translate-y-[1px] hover:brightness-105 hover:shadow-[0_8px_18px_rgba(11,93,168,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--contact-button)] focus-visible:ring-offset-2"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>

              <div className="mt-[26px] xl:absolute xl:left-0 xl:top-[134px] xl:mt-0 xl:w-[32.16%]">
                <ContactInfoCard />
              </div>
            </div>
          </div>
        </section>

        <section className="relative pb-[94px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="relative h-[250px] w-full overflow-hidden rounded-[17px] bg-white shadow-[0_6px_18px_rgba(23,36,90,0.05)] sm:h-[330px] xl:h-[454px]">
              <Image
                src="/contact_us_map.webp"
                alt="Map showing PLABCoach at The Pavilions, Cranmore Drive, Shirley"
                fill
                priority
                sizes="(max-width: 1536px) 96vw, 1480px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
