import Image from "next/image";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

type ExamScheduleRow = {
  venue: string;
  examDate: string;
};

type ExamEntry = {
  id: string;
  name: string;
  icon: string;
  category: string;
  primaryDate?: string;
  examDate?: string;
  registrationStartDate?: string;
  lastDateToApply?: string;
  resultDate?: string;
  note?: string;
  schedule?: ExamScheduleRow[];
  dateLines?: string[];
};

type ExamGroup = {
  id: string;
  title: string;
  flag: string;
  exams: ExamEntry[];
};

const examGroups: ExamGroup[] = [
  {
    id: "uk-plab-ukmla",
    title: "UK PLAB / UKMLA EXAM DATES",
    flag: "/uk_flag.svg",
    exams: [
      {
        id: "plab-1-ukmla-akt",
        name: "PLAB 1 / UKMLA AKT",
        icon: "/plab1_exam_pg_icon.svg",
        category: "UK PLAB / UKMLA",
        examDate: "12th February 2026, 21st May 2026, August & November",
      },
      {
        id: "plab-2-ukmla-cpsa",
        name: "PLAB 2 / UKMLA CPSA",
        icon: "/plab2_exam_pg_icon.svg",
        category: "UK PLAB / UKMLA",
        note:
          "Dates remain available throughout the year and candidates must log in and book the slots through their GMC account to know more about the availability of dates and slots for the given venue.",
      },
    ],
  },
  {
    id: "ireland",
    title: "IRELAND EXAM DATES",
    flag: "/ireland_flag.svg",
    exams: [
      {
        id: "pres-2",
        name: "PRES 2",
        icon: "/pres2_exam_pg_icon.svg",
        category: "Ireland",
        schedule: [
          { venue: "Dublin, Ireland", examDate: "12th Feb 2026" },
          {
            venue: "Dublin, Ireland & Dubai, UAE",
            examDate: "21st May 2026 / 6th Aug 2026 / 5th Nov 2026",
          },
        ],
      },
      {
        id: "pres-3-osce",
        name: "PRES 3 – OSCE and Data Interpretation",
        icon: "/pres3_exam_pg.svg",
        category: "Ireland",
        schedule: [
          { venue: "Cork", examDate: "19th September 2026" },
          { venue: "Dublin", examDate: "31st October 2026" },
        ],
      },
    ],
  },
  {
    id: "uk-foundation-programme",
    title: "UK FOUNDATION PROGRAMME EXAM DATES",
    flag: "/uk_flag.svg",
    exams: [
      {
        id: "national-clinical-assessment",
        name: "National Clinical Assessment (NCA)",
        icon: "/nca_exam_pg_icon_.svg",
        category: "UK Foundation Programme",
        primaryDate: "Nov 2026",
        examDate: "9th, 10th, 11th, & 12th Nov 2026",
      },
      {
        id: "prescribing-safety-assessment",
        name: "PRESCRIBING SAFETY ASSESSMENT (PSA)",
        icon: "/psa_exam_icon.svg",
        category: "UK Foundation Programme",
        primaryDate: "2026",
        dateLines: [
          "Thursday 26th March 2026, All Candidates",
          "Thursday 23rd April 2026, All Candidates",
        ],
      },
    ],
  },
];

function ExamCard({ exam }: { exam: ExamEntry }) {
  const hasMetaDates =
    exam.registrationStartDate || exam.lastDateToApply || exam.resultDate;

  return (
    <article
      className="group min-h-[270px] rounded-[28px] border border-[var(--exam-card-border)] bg-[var(--exam-card-bg)] px-[24px] py-[25px] transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:-translate-y-[4px] hover:border-[var(--exam-card-hover-border)] hover:bg-[var(--exam-card-hover-bg)] hover:shadow-[var(--exam-card-hover-shadow)] sm:min-h-[260px] sm:px-[27px] sm:py-[27px] lg:min-h-[264px] lg:px-[27px] lg:py-[26px]"
      data-exam-category={exam.category}
    >
      <Image
        src={exam.icon}
        alt=""
        aria-hidden="true"
        width={72}
        height={72}
        className="h-[51px] w-[51px] object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-[58px] sm:w-[58px] lg:h-[72px] lg:w-[72px]"
      />

      <h3 className="mt-[7px] text-[17px] font-bold leading-[1.2] text-[var(--exam-card-heading)] sm:text-[18px] lg:text-[19px]">
        {exam.name}
      </h3>

      {exam.primaryDate ? (
        <p className="mt-[10px] text-[20px] font-bold leading-none text-[var(--exam-date-accent)] sm:text-[21px] lg:text-[22px]">
          {exam.primaryDate}
        </p>
      ) : null}

      {exam.examDate ? (
        <div className={exam.primaryDate ? "mt-[10px]" : "mt-[18px]"}>
          {exam.primaryDate ? (
            <p className="text-[13px] font-semibold leading-[1.35] text-[var(--exam-card-text)] sm:text-[14px]">
              <span className="mr-2 font-bold text-[var(--exam-label-red)]">Exam Date:</span>
              {exam.examDate}
            </p>
          ) : (
            <p className="text-[14px] font-semibold leading-[1.35] text-[var(--exam-card-text)] sm:text-[15px] lg:text-[16px]">
              {exam.examDate}
            </p>
          )}
        </div>
      ) : null}

      {exam.note ? (
        <p className="mt-[18px] max-w-[640px] text-[13px] font-semibold leading-[1.34] text-[var(--exam-card-text)] sm:text-[14px] lg:text-[15px]">
          {exam.note}
        </p>
      ) : null}

      {exam.schedule ? (
        <div className="mt-[18px] overflow-hidden text-[12px] sm:text-[13px] lg:text-[14px]">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-x-5 pb-[9px] font-bold text-[var(--exam-label-red)]">
            <span>Venue Location</span>
            <span>Exam Date</span>
          </div>
          <div>
            {exam.schedule.map((row, index) => (
              <div
                key={`${exam.id}-${row.venue}-${row.examDate}`}
                className={`grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-x-5 py-[9px] font-semibold leading-[1.25] text-[var(--exam-card-text)] ${
                  index === 0 ? "border-t border-[var(--exam-row-divider)]" : "border-t border-[var(--exam-row-divider)]"
                }`}
              >
                <span>{row.venue}</span>
                <span>{row.examDate}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {exam.dateLines ? (
        <div className="mt-[10px] flex items-start gap-2 text-[12px] font-semibold leading-[1.35] text-[var(--exam-card-text)] sm:text-[13px] lg:text-[14px]">
          <span className="shrink-0 font-bold text-[var(--exam-label-red)]">Exam Date:</span>
          <div className="space-y-[1px]">
            {exam.dateLines.map((date) => (
              <p key={date} className="relative pl-[12px] before:absolute before:left-0 before:top-[0.7em] before:h-[3px] before:w-[3px] before:-translate-y-1/2 before:rounded-full before:bg-current">
                {date}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      {hasMetaDates ? (
        <dl className="mt-4 grid gap-2 text-[12px] leading-[1.35] text-[var(--exam-card-text)] sm:text-[13px]">
          {exam.registrationStartDate ? (
            <div>
              <dt className="inline font-bold">Registration:</dt>{" "}
              <dd className="inline">{exam.registrationStartDate}</dd>
            </div>
          ) : null}
          {exam.lastDateToApply ? (
            <div>
              <dt className="inline font-bold">Last date to apply:</dt>{" "}
              <dd className="inline">{exam.lastDateToApply}</dd>
            </div>
          ) : null}
          {exam.resultDate ? (
            <div>
              <dt className="inline font-bold">Result date:</dt>{" "}
              <dd className="inline">{exam.resultDate}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}
    </article>
  );
}

export default function ImportantExamPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <section className="relative min-h-[532px] overflow-hidden bg-[var(--exam-hero-bg)] sm:min-h-[548px] lg:min-h-[532px]">
          <div className="relative mx-auto grid min-h-[532px] w-[var(--site-width)] max-w-[var(--container-max)] items-center gap-8 py-[58px] sm:min-h-[548px] sm:py-[70px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-0 lg:py-0">
            <div className="relative z-20 max-w-[590px] pt-[4px] sm:pt-0 lg:pl-0">
              <p className="text-[13px] font-bold uppercase tracking-[0.01em] text-[var(--exam-label)] sm:text-[14px] lg:text-[15px]">
                IMPORTANT EXAM DATES
              </p>
              <h1 className="mt-[9px] max-w-[520px] text-[39px] font-bold leading-[1.11] tracking-[-0.02em] text-[var(--exam-heading)] sm:text-[48px] lg:text-[51px] xl:text-[53px]">
                Stay Ahead of Every
                <br className="hidden sm:block" /> Exam
              </h1>
              <p className="mt-[30px] max-w-[590px] text-[15px] leading-[1.55] text-[var(--exam-copy)] sm:text-[16px] lg:text-[17px]">
                Keep track of important exam dates and plan your preparation with confidence.
              </p>
            </div>

            <div className="relative z-10 mx-auto h-[315px] w-full max-w-[690px] sm:h-[355px] lg:absolute lg:bottom-0 lg:right-[-8px] lg:h-full lg:w-[760px] lg:max-w-none xl:right-[-18px] xl:w-[810px]">
              <Image
                src="/hero_banner_bg_ellipse.webp"
                alt=""
                aria-hidden="true"
                width={1382}
                height={1382}
                priority
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[500px] max-w-none -translate-x-1/2 -translate-y-[47%] object-contain rotate-[-58deg] opacity-80 sm:w-[610px] lg:left-[51%] lg:top-[33%] lg:w-[760px] xl:w-[1400px] "
              />
              <Image
                src="/3d_floating_calender.webp"
                alt="Clock and desk calendar illustrating important exam dates"
                width={723}
                height={445}
                priority
                className="absolute bottom-[2px] left-1/2 z-10 h-auto w-[475px] max-w-[92vw] -translate-x-1/2 object-contain drop-shadow-[0_18px_18px_rgba(26,35,70,0.18)] sm:w-[540px] lg:bottom-[28px] lg:left-[52%] lg:w-[650px] xl:bottom-[28px] xl:w-[690px]"
              />
            </div>
          </div>
        </section>

        <section id="calendar" className="bg-white pb-[105px] pt-[70px] sm:pb-[120px] sm:pt-[86px] lg:pb-[135px] lg:pt-[92px]">
          <div className="mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <div className="space-y-[50px] sm:space-y-[58px] lg:space-y-[68px]">
              {examGroups.map((group) => (
                <section key={group.id} aria-labelledby={`${group.id}-heading`}>
                  <div className="mb-[23px] flex items-center gap-[11px] sm:mb-[27px]">
                    <Image
                      src={group.flag}
                      alt=""
                      aria-hidden="true"
                      width={54}
                      height={54}
                      className="h-[31px] w-[31px] shrink-0 object-contain sm:h-[35px] sm:w-[35px] lg:h-[54px] lg:w-[54px]"
                    />
                    <h2
                      id={`${group.id}-heading`}
                      className="text-[20px] font-bold leading-[1.15] text-[var(--exam-section-heading)] sm:text-[23px] lg:text-[26px]"
                    >
                      {group.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:gap-[24px]">
                    {group.exams.map((exam) => (
                      <ExamCard key={exam.id} exam={exam} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
