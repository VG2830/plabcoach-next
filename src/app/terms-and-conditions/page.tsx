import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "../_components/PolicyPage";
import { createPageMetadata } from "../_components/pageMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions | PLABcoach",
  description:
    "Read the terms that apply when you use PLABcoach websites, apps and courses.",
  canonicalPath: "/terms-and-conditions/",
  image: "/hero_banner_image.webp",
  imageAlt: "PLABcoach medical exam preparation",
});

export default function TermsAndConditionsPage() {
  return (
    <PolicyPage title="Terms & Conditions">
      <section>
        <h2>1. About these terms</h2>
        <p>
          These terms apply when you use plabcoach.com, the PLABcoach app or any
          PLABcoach course. PLABcoach is run by [Company legal name] (company
          number [number]), 9 The Pavilions, Cranmore Drive, Shirley, B90 4SB.
          By creating an account or buying a course, you agree to these terms.
        </p>
      </section>

      <section>
        <h2>2. Your account</h2>
        <p>
          Please give accurate details and keep your login private. Each
          account is for one person. Sharing your login, or letting someone
          else use your access, is not allowed and may lead to your account
          being closed without a refund.
        </p>
      </section>

      <section>
        <h2>3. Courses and access</h2>
        <p>
          Each course page lists what is included and how long your access
          lasts. Access starts as soon as your payment is confirmed. If a plan
          renews automatically, we will tell you before you buy, and you can
          turn off renewal at any time in your account.
        </p>
      </section>

      <section>
        <h2>4. Prices and payment</h2>
        <p>
          Prices are shown in pounds sterling and include VAT where it applies.
          You pay in full before access starts, through [payment provider].
        </p>
      </section>

      <section>
        <h2>5. Cancellations and refunds</h2>
        <p>
          Our <Link href="/no-refund-policy/">Refund Policy</Link> explains your
          right to cancel and when refunds are given. It forms part of these
          terms.
        </p>
      </section>

      <section>
        <h2>6. Live and in-person sessions</h2>
        <p>
          We publish session dates in advance. If we need to move a session, we
          will give you as much notice as we can and offer a new date or a
          recording. Please treat tutors, role players and other candidates
          with respect; we may remove anyone who disrupts a session.
        </p>
      </section>

      <section>
        <h2>7. Exams and results</h2>
        <p>
          PLABcoach is an independent training provider. We are not part of, or
          endorsed by, the GMC, the Irish Medical Council, the UKFPO or the
          RCGP, and we cannot guarantee that you will pass any exam. Exam
          rules, dates and fees are set by those bodies and can change, so
          always check their official websites before booking.
        </p>
      </section>

      <section>
        <h2>8. Our content</h2>
        <p>
          All course material, including videos, notes, questions and
          SmartCards, belongs to PLABcoach. You may use it for your own study
          only. You must not copy, record, download, share, resell or publish
          it. If you do, we may close your account without a refund and take
          further action.
        </p>
      </section>

      <section>
        <h2>9. Using the platform</h2>
        <p>
          We aim to keep the website and app available at all times, but there
          may be short breaks for maintenance or problems outside our control.
        </p>
      </section>

      <section>
        <h2>10. Our responsibility to you</h2>
        <p>
          We are responsible for losses you suffer that are a foreseeable
          result of us breaking these terms. We are not responsible for losses
          that were not foreseeable, or for business losses. Nothing in these
          terms limits our liability for death or personal injury caused by our
          negligence, for fraud, or for anything else that cannot be limited by
          law. Your legal rights as a consumer are not affected.
        </p>
      </section>

      <section>
        <h2>11. Closing an account</h2>
        <p>
          We may suspend or close an account that breaks these terms. You can
          close your account at any time by emailing{" "}
          <a href="mailto:support@plabcoach.com">support@plabcoach.com</a>.
        </p>
      </section>

      <section>
        <h2>12. Changes to these terms</h2>
        <p>
          We may update these terms. The version that applies is the one in
          force when you bought your course.
        </p>
      </section>

      <section>
        <h2>13. Law</h2>
        <p>
          These terms are governed by the law of England and Wales. If you live
          in Scotland or Northern Ireland, you can also bring a claim in your
          local courts.
        </p>
      </section>

      <section>
        <h2>14. Contact</h2>
        <p>
          Email{" "}
          <a href="mailto:support@plabcoach.com">support@plabcoach.com</a> or
          write to 9 The Pavilions, Cranmore Drive, Shirley, B90 4SB.
        </p>
      </section>
    </PolicyPage>
  );
}
