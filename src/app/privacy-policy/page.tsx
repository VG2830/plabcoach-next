import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "../_components/PolicyPage";
import { createPageMetadata } from "../_components/pageMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | PLABcoach",
  description:
    "Find out how PLABcoach collects, uses, shares and protects your personal information.",
  canonicalPath: "/privacy-policy/",
  image: "/hero_banner_image.webp",
  imageAlt: "PLABcoach medical exam preparation",
});

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage title="Privacy Policy">
      <section>
        <h2>Who we are</h2>
        <p>
          PLABcoach is run by [Company legal name], a company registered in
          England and Wales (company number [number]), at 9 The Pavilions,
          Cranmore Drive, Shirley, B90 4SB. We are the data controller for the
          personal information described here. If you have a question about
          your data, email{" "}
          <a href="mailto:support@plabcoach.com">support@plabcoach.com</a>. Our
          ICO registration number is [number].
        </p>
      </section>

      <section>
        <h2>What we collect</h2>
        <ul>
          <li>Account details: your name, email address, phone number and country.</li>
          <li>
            Learning data: the courses you enrol in, your progress, your answers
            in SmartQBank and your mock exam results.
          </li>
          <li>
            Payment details: what you bought and when. Card payments are handled
            by [payment provider]; we never see or store your full card number.
          </li>
          <li>
            Messages: emails, WhatsApp messages and contact form enquiries you
            send us.
          </li>
          <li>
            In-person sessions: attendance records and, only if you agree on the
            day, photos or video taken during practical sessions.
          </li>
          <li>
            Website usage: information collected through cookies, explained in
            our <Link href="/cookie-policy/">Cookie Policy</Link>.
          </li>
        </ul>
      </section>

      <section>
        <h2>How we use it, and our lawful basis</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[#dfeaf8]">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-[#dfeaf8] px-4 py-3">What we do</th>
                <th className="border-b border-[#dfeaf8] px-4 py-3">Lawful basis</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border-b border-[#e7edf5] px-4 py-3">Create your account and give you access to your courses</td><td className="border-b border-[#e7edf5] px-4 py-3">Contract</td></tr>
              <tr><td className="border-b border-[#e7edf5] px-4 py-3">Take payment and keep financial records</td><td className="border-b border-[#e7edf5] px-4 py-3">Contract and legal obligation</td></tr>
              <tr><td className="border-b border-[#e7edf5] px-4 py-3">Answer your questions and give support</td><td className="border-b border-[#e7edf5] px-4 py-3">Contract and legitimate interests</td></tr>
              <tr><td className="border-b border-[#e7edf5] px-4 py-3">Send course updates and exam reminders</td><td className="border-b border-[#e7edf5] px-4 py-3">Legitimate interests (you can opt out at any time)</td></tr>
              <tr><td className="border-b border-[#e7edf5] px-4 py-3">Send offers and news about new courses</td><td className="border-b border-[#e7edf5] px-4 py-3">Consent</td></tr>
              <tr><td className="border-b border-[#e7edf5] px-4 py-3">If introduced, measure website use and advertising through analytics and marketing cookies</td><td className="border-b border-[#e7edf5] px-4 py-3">Consent before use</td></tr>
              <tr><td className="px-4 py-3">Improve our courses and question banks using anonymised learning data</td><td className="px-4 py-3">Legitimate interests</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Who we share it with</h2>
        <p>We never sell your data. We share it only with:</p>
        <ul>
          <li>our learning platform provider, [provider], which hosts courses and the app;</li>
          <li>our payment provider, [provider];</li>
          <li>email and messaging services we use to contact you;</li>
          <li>
            Google and Meta, if we use their analytics or advertising services
            and you have given the required consent;
          </li>
          <li>DrAppraisals, only if you ask to use their appraisal services;</li>
          <li>professional advisers, and authorities when the law requires it.</li>
        </ul>
      </section>

      <section>
        <h2>International transfers</h2>
        <p>
          Some of our team and service providers are based outside the UK,
          including in India. When your data leaves the UK, we protect it with
          the safeguards UK law requires, such as the UK International Data
          Transfer Agreement.
        </p>
      </section>

      <section>
        <h2>How long we keep it</h2>
        <p>
          We keep your account and learning data while your account is active
          and for [2] years after your last access. We keep payment records for
          six years for tax purposes. If you opt out of marketing, we stop
          straight away.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          You can ask us to give you a copy of your data, correct it, delete it,
          limit how we use it or send it to another provider. You can object to
          how we use it and withdraw consent at any time. Email{" "}
          <a href="mailto:support@plabcoach.com">support@plabcoach.com</a> and
          we will reply within one month. If you are unhappy with our answer,
          you can complain to the{" "}
          <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer">
            Information Commissioner’s Office
          </a>{" "}
          or on 0303 123 1113.
        </p>
      </section>

      <section>
        <h2>Age</h2>
        <p>Our courses are for doctors and medical students aged 18 or over.</p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          We will update this page if our use of your data changes, and tell you
          by email about any significant change.
        </p>
      </section>
    </PolicyPage>
  );
}
