import Footer from "../_components/Footer";
import Header from "../_components/Header";

const policySections = [
  {
    title: "No Refunds After Enrollment",
    content: (
      <>
        <p className="mt-4">
          All course purchases—whether for <strong>online, offline, recorded, or live
          sessions—are non-refundable. Refunds will not</strong> be issued for:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Change of mind after purchase</li>
          <li>Inability to attend scheduled sessions</li>
          <li>Technical issues on the student&apos;s device</li>
          <li>Conflicts with personal, academic, or professional schedules</li>
          <li>Travel or visa-related constraints</li>
          <li>Delays or non-confirmation of exams by relevant medical councils</li>
        </ul>
      </>
    ),
  },
  {
    title: "Immediate Access = Substantial Service Delivery",
    content:
      "Access to premium study materials, recorded content, SmartNotes, and live prep sessions is granted immediately upon enrollment. This constitutes significant use of our services and is considered non-reversible.",
  },
  {
    title: "Non-Transferable Courses",
    content:
      "All enrollments are non-transferable and cannot be shifted to another student or exchanged for other courses or batches.",
  },
  {
    title: "Exceptional Circumstances (Discretionary)",
    content:
      "In rare cases of documented emergencies, students may write to us for consideration. Final decisions will rest solely with the Plabcoach Management, and such considerations do not guarantee a refund or course credit.",
  },
];

export default function NoRefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[var(--ink)]">
      <Header />
      <main className="mx-auto min-h-[50vh] w-[var(--site-width)] max-w-[var(--container-max)] px-4 py-12 sm:py-16 lg:px-0">
        <article className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[28px] border border-[#dfeaf8] bg-gradient-to-br from-[#eaf3ff] via-white to-[#f6f9fd] shadow-[0_18px_45px_rgba(23,96,166,0.08)]">
            <div className="border-b border-[#dfeaf8] bg-[radial-gradient(circle_at_top_left,_rgba(23,96,166,0.12),_transparent_35%),linear-gradient(135deg,#eaf3ff,#f5f8fc)] px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
              {/* <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-[#bdd4f0] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                  Important information
                </span>
              </div> */}
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
                No Refund Policy
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--body-muted)] sm:text-lg">
                At Plabcoach, we strive to offer comprehensive, high-quality learning support to all our
                students. Before enrolling, please review our No Refund Policy below:
              </p>
            </div>

            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2 lg:p-10">
              {policySections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-2xl border border-[#e3ebf5] bg-white p-6 shadow-[0_10px_30px_rgba(17,24,39,0.03)]"
                >
                  <h2 className="text-xl font-semibold text-[var(--ink)] sm:text-2xl">
                    {section.title}
                  </h2>
                  {typeof section.content === "string" ? (
                    <p className="mt-4 text-base leading-7 text-[var(--body-muted)]">
                      {section.content}
                    </p>
                  ) : (
                    section.content
                  )}
                </section>
              ))}
            </div>

            <div className="border-t border-[#dfeaf8] bg-white px-6 py-8 sm:px-10 lg:px-14">
              <div className="rounded-2xl border border-[#dfeaf8] bg-[#f7fbff] p-6">
                <h2 className="text-xl font-semibold text-[var(--ink)]">Policy Acceptance</h2>
                <p className="mt-4 text-base leading-7 text-[var(--body-muted)]">
                  By enrolling in any course and completing the payment, you <strong>fully agree</strong>{" "}
                  to this No Refund Policy. We strongly encourage students to clarify all doubts
                  before proceeding with payment.
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--body-muted)]">
                  If you have any questions, feel free to contact us at <a className="font-semibold text-[var(--primary)] underline underline-offset-4 hover:brightness-90" href="mailto:support@plabcoach.com">support@plabcoach.com</a> before enrolling.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
