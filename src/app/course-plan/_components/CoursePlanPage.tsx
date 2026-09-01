import Image from "next/image";
import Link from "next/link";
import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import type {
  CoursePlanConfig,
  HorizontalPlan,
  MockPlan,
  PlanCardData,
  SelfPacedPlan,
} from "../_data/coursePlanData";
import { getPlanSelectionHref } from "../_data/coursePlanData";
import { CheckIcon, ScheduleIcon, StarIcon } from "./PlanIcons";

function DecorativeHeroRings({ className = "", opacityClass = "opacity-[0.55]" }: { className?: string; opacityClass?: string }) {
  return (
    <Image
      src="/hero_banner_bg_ellipse.webp"
      alt=""
      aria-hidden="true"
      width={1035}
      height={712}
      className={`pointer-events-none absolute max-w-none ${opacityClass} ${className}`}
    />
  );
}
function DecorativeRings({ className = "", opacityClass = "opacity-[0.75]" }: { className?: string; opacityClass?: string }) {
  return (
    <Image
      src="/featured_courses_ellipse.webp"
      alt=""
      aria-hidden="true"
      width={1035}
      height={712}
      className={`pointer-events-none absolute max-w-none ${opacityClass} ${className}`}
    />
  );
}

function EnrolButton({ courseSlug, planId }: { courseSlug: string; planId: string }) {
  return (
    <Link
      href={getPlanSelectionHref(courseSlug, planId)}
      className="grid h-[40px] w-full place-items-center rounded-[7px] bg-[var(--plan-button)] text-[10px] font-bold uppercase tracking-[-0.01em] text-white transition duration-200 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--plan-button)] focus-visible:ring-offset-2 sm:h-[42px]"
    >
      ENROL NOW
    </Link>
  );
}

function PlanHero({ data }: { data: CoursePlanConfig }) {
  return (
    <section className="relative overflow-hidden bg-[var(--plan-hero-bg)]">
      <div className="relative mx-auto min-h-[500px] w-[var(--site-width)] max-w-[var(--container-max)] sm:min-h-[540px] lg:h-[520px] lg:min-h-0">
        <div className="relative z-20 max-w-[620px] pt-[72px] sm:pt-[92px] lg:pt-[123px] xl:pt-[128px]">
          <p className="text-[13px] font-semibold text-[var(--plan-button)]">{data.heroEyebrow}</p>
          <h1 className="mt-3 max-w-[620px] text-[40px] font-bold leading-[1.12] tracking-[-0.025em] text-[var(--plan-ink)] sm:text-[48px] lg:text-[50px] xl:text-[54px]">
            {data.heroTitle}
          </h1>
          <p className="mt-7 max-w-[585px] text-[14px] leading-[1.65] text-[var(--plan-muted)] sm:text-[15px] lg:mt-8 lg:text-[16px]">
            {data.heroDescription}
          </p>
        </div>

        <DecorativeHeroRings
          opacityClass="opacity-[0.90]"
          className="right-[-245px] top-[-118px] hidden w-[845px] rotate-[-4deg] lg:block xl:right-[-112px] xl:top-[-340px] xl:w-[986px]"
        />
        <Image
          src="/three-medical-professionals-posing-together.png"
          alt="Doctors preparing for UK medical exams"
          width={853}
          height={626}
          priority
          className="relative z-10 mx-auto mt-10 block h-auto w-[min(94vw,610px)] max-w-none lg:absolute lg:bottom-[-22px] lg:right-[-20px] lg:mt-0 lg:w-[650px] xl:right-[15px] xl:w-[705px]"
        />
      </div>
    </section>
  );
}

function TestimonialCard({ data }: { data: CoursePlanConfig["testimonial"] }) {
  return (
    <article className="flex min-h-[486px] flex-col rounded-[22px] border border-[var(--plan-card-border)] bg-[var(--plan-testimonial-bg)] px-[15px] pb-5 pt-4 sm:px-[17px]">
      <div className="flex gap-[5px] text-[var(--plan-star)]">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} className="h-[16px] w-[16px]" />
        ))}
      </div>
      <p className="mt-7 text-[10px] leading-[1.78] text-[var(--plan-review-text)] sm:text-[10.5px]">
        {data.quote}
      </p>
      <div className="mt-6">
        <p className="text-[15px] font-bold text-[var(--plan-text)]">{data.name}</p>
        <div className="mt-[7px] flex items-center justify-between gap-4 text-[10px] font-semibold text-[var(--plan-green)]">
          <span>{data.role}</span>
          <span>Country: {data.country}</span>
        </div>
      </div>
      <div className="mt-auto flex justify-center gap-[2px] pt-8" aria-hidden="true">
        <span className="h-[6px] w-[6px] rounded-full bg-[var(--plan-dot-1)]" />
        <span className="h-[6px] w-[6px] rounded-full bg-[var(--plan-dot-2)]" />
        <span className="h-[6px] w-[6px] rounded-full bg-[var(--plan-dot-3)]" />
        <span className="h-[6px] w-[6px] rounded-full bg-[var(--plan-dot-4)]" />
        <span className="h-[6px] w-[6px] rounded-full bg-[var(--plan-dot-5)]" />
        <span className="h-[6px] w-[6px] rounded-full bg-[var(--plan-dot-6)]" />
      </div>
    </article>
  );
}

function PrimaryPlanCard({ plan, courseSlug }: { plan: PlanCardData; courseSlug: string }) {
  return (
    <article className="relative flex min-h-[516px] flex-col overflow-hidden rounded-[22px] border border-[var(--plan-card-border)] bg-[var(--plan-card)] px-4 pb-[14px] pt-4 sm:px-[17px]">
      <div className="pointer-events-none absolute left-0 top-0 h-[129px] w-full overflow-hidden rounded-t-[22px]">
        <div className="absolute -left-[35px] -top-[98px] h-[205px] w-[360px] rounded-[0_0_56%_0] bg-[var(--plan-card-accent)] sm:w-[410px]" />
      </div>
      <div className="relative z-10">
        <div className="flex items-end gap-4">
          <span className="text-[48px] font-bold leading-none tracking-[-0.035em] text-[var(--plan-ink)] sm:text-[52px]">{plan.price}</span>
          <span className="mb-[7px] text-[12px] font-semibold text-[var(--plan-old-price)] line-through">{plan.oldPrice}</span>
        </div>
        <h3 className="mt-2 text-[23px] font-bold leading-tight text-[var(--plan-blue)] sm:text-[25px]">{plan.title}</h3>
      </div>

      <div className="relative z-10 mt-[42px]">
        <h4 className="text-[15px] font-bold text-[var(--plan-text)]">WHAT&apos;S INCLUDED</h4>
        <div className={`mt-2 grid gap-x-6 gap-y-[7px] ${plan.features.length > 3 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-[5px] text-[10px] leading-[1.35] text-[var(--plan-text)]">
              <CheckIcon className="mt-[1px] h-[11px] w-[11px] shrink-0 text-[var(--plan-green)]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-4 border-t border-[var(--plan-divider)] pt-3">
        <h4 className="text-[15px] font-bold text-[var(--plan-text)]">COURSE SCHEDULE</h4>
        <div className="mt-2 space-y-[9px]">
          {plan.schedule.map((group) => (
            <div key={group.label}>
              <p className="mb-[4px] text-[8px] font-bold text-[var(--plan-text)]">{group.label}</p>
              <div className={`grid gap-3 ${group.dates.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                {group.dates.map((item, index) => (
                  <div key={`${item.name}-${item.date}`} className={`min-w-0 ${group.dates.length > 1 && index === 1 ? "border-l border-[var(--plan-divider)] pl-4" : ""}`}>
                    {item.name ? (
                      <div className="flex items-center gap-[4px] text-[9px] font-medium text-[var(--plan-purple)]">
                        <ScheduleIcon className="h-[10px] w-[10px]" />
                        <span>{item.name}</span>
                      </div>
                    ) : null}
                    <p className={`${item.name ? "mt-[2px] pl-[14px]" : "flex items-center gap-[4px]"} text-[9px] leading-4 text-[var(--plan-text)]`}>
                      {!item.name ? <ScheduleIcon className="h-[10px] w-[10px] text-[var(--plan-purple)]" /> : null}
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-auto pt-3">
        <EnrolButton courseSlug={courseSlug} planId={plan.id} />
      </div>
    </article>
  );
}

function ProgrammeSection({ data }: { data: CoursePlanConfig }) {
  return (
    <section className="relative overflow-hidden bg-white py-[72px] lg:py-[82px]">
      <DecorativeRings className="right-[-350px] top-[-55px] w-[890px]" />
      <DecorativeRings className="-bottom-[250px] -left-[175px] w-[730px] rotate-[70deg]" />
      <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-7">
            <h2 className="text-[31px] font-bold leading-none text-[var(--plan-ink)]">{data.programmeTitle}</h2>
            <p className="mt-[7px] text-[14px] font-semibold text-[var(--plan-text)]">{data.programmeSubtitle}</p>
          </div>
          <div className="grid gap-7 lg:grid-cols-[310px_1fr] xl:grid-cols-[320px_1fr]">
            <TestimonialCard data={data.testimonial} />
            <div className="grid gap-5 md:grid-cols-2">
              {data.primaryPlans.map((plan) => (
                <PrimaryPlanCard key={plan.id} plan={plan} courseSlug={data.slug} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SelfPacedCard({ plan, courseSlug }: { plan: SelfPacedPlan; courseSlug: string }) {
  return (
    <div className="relative flex h-[368px] items-center">
      <article className="group relative flex h-[296px] w-full flex-col overflow-hidden rounded-[20px] border border-[var(--plan-card-border)] bg-[var(--plan-card)] px-[15px] pb-[15px] pt-[13px] transition-[height,transform,box-shadow] duration-300 ease-out hover:h-[368px] hover:-translate-y-[1px] hover:shadow-[var(--plan-hover-shadow)] sm:px-[17px]">
        <div className="pointer-events-none absolute left-0 top-0 h-[146px] w-full overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -left-[18px] -top-[93px] h-[205px] w-[345px] rounded-[0_0_65%_0] bg-[var(--plan-card-accent)]" />
        </div>
        <div className="relative z-10">
          <div className="flex items-end gap-4">
            <span className="text-[42px] font-bold leading-none tracking-[-0.03em] text-[var(--plan-ink)] transition-[font-size] duration-300 group-hover:text-[54px]">{plan.price}</span>
            <span className="mb-[6px] text-[12px] font-semibold text-[var(--plan-old-price)] line-through">{plan.oldPrice}</span>
          </div>
          <h3 className="mt-3 text-[20px] font-bold leading-tight text-[var(--plan-ink)] transition-colors duration-300 group-hover:text-[var(--plan-blue)] sm:text-[21px]">{plan.title}</h3>
        </div>
        <div className="relative z-10 mt-5 transition-[margin] duration-300 group-hover:mt-8">
          <h4 className="text-[15px] font-bold text-[var(--plan-text)]">{plan.subtitle}</h4>
          <ul className="mt-2 space-y-[7px]">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-[5px] text-[10px] text-[var(--plan-text)]">
                <CheckIcon className="h-[11px] w-[11px] shrink-0 text-[var(--plan-green)]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative z-10 mt-auto">
          <EnrolButton courseSlug={courseSlug} planId={plan.id} />
        </div>
      </article>
    </div>
  );
}

function SelfPacedSection({ data }: { data: CoursePlanConfig }) {
  return (
    <section className="relative overflow-hidden bg-white py-[56px] lg:py-[62px]">
      <DecorativeRings className="-left-[290px] -top-[148px] w-[760px] rotate-[15deg]" />
      <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
        <div className="mx-auto max-w-[1480px]">
          <h2 className="text-[25px] font-bold tracking-[-0.015em] text-[var(--plan-ink)] sm:text-[26px]">SmartNotes &amp; Self-Paced Mastery Videos</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {data.selfPacedPlans.map((plan) => (
              <SelfPacedCard key={plan.id} plan={plan} courseSlug={data.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HorizontalPlanCard({ plan, courseSlug }: { plan: HorizontalPlan; courseSlug: string }) {
  return (
    <article className="grid gap-7 rounded-[22px] border border-[var(--plan-card-border)] bg-[var(--plan-card)] px-[18px] py-[16px] shadow-[var(--plan-row-shadow)] sm:px-[20px] lg:grid-cols-[1.35fr_0.78fr_0.56fr] lg:gap-8">
      <div className="flex flex-col">
        <div className="flex items-end gap-4">
          <span className="text-[53px] font-bold leading-none tracking-[-0.03em] text-[var(--plan-ink)]">{plan.price}</span>
          <span className="mb-[7px] text-[12px] font-semibold text-[var(--plan-old-price)] line-through">{plan.oldPrice}</span>
        </div>
        <h3 className="mt-2 text-[25px] font-bold leading-tight text-[var(--plan-blue)]">{plan.title}</h3>
        <div className="mt-auto pt-5 lg:max-w-[390px]">
          <EnrolButton courseSlug={courseSlug} planId={plan.id} />
        </div>
      </div>
      <div>
        <h4 className="text-[15px] font-bold text-[var(--plan-text)]">Features</h4>
        <ul className="mt-3 space-y-[7px]">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-[5px] text-[10px] leading-[1.35] text-[var(--plan-text)]">
              <CheckIcon className="mt-[1px] h-[11px] w-[11px] shrink-0 text-[var(--plan-green)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-[var(--plan-divider)] lg:border-l lg:pl-8">
        <h4 className="text-[15px] font-bold text-[var(--plan-text)]">Schedule</h4>
        <div className="mt-3 space-y-3">
          {plan.schedule.map((item) => (
            <div key={`${item.name}-${item.date}`}>
              <div className="flex items-center gap-[4px] text-[9px] font-medium text-[var(--plan-purple)]">
                <ScheduleIcon className="h-[10px] w-[10px]" />
                <span>{item.name}</span>
              </div>
              <p className="mt-[2px] pl-[14px] text-[9px] leading-4 text-[var(--plan-text)]">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function DataInterpretationSection({ data }: { data: CoursePlanConfig }) {
  return (
    <section className="relative overflow-hidden bg-white py-[62px] lg:py-[70px]">
      <DecorativeRings className="-bottom-[170px] right-[-310px] w-[775px] rotate-[20deg]" />
      <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
        <div className="mx-auto max-w-[1480px]">
          <h2 className="text-[25px] font-bold tracking-[-0.015em] text-[var(--plan-ink)] sm:text-[26px]">Data Interpretation Course</h2>
          <div className="mt-7 space-y-4">
            {data.horizontalPlans.map((plan) => (
              <HorizontalPlanCard key={plan.id} plan={plan} courseSlug={data.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MockPlanCard({ plan, courseSlug }: { plan: MockPlan; courseSlug: string }) {
  return (
    <article className="flex min-h-[370px] flex-col rounded-[20px] border border-[var(--plan-card-border)] bg-[var(--plan-card)] px-[16px] pb-[16px] pt-[13px]">
      <div className="flex items-end gap-3">
        <span className="text-[42px] font-bold leading-none tracking-[-0.03em] text-[var(--plan-ink)]">{plan.price}</span>
        <span className="mb-[6px] text-[12px] font-semibold text-[var(--plan-old-price)] line-through">{plan.oldPrice}</span>
      </div>
      <h3 className="mt-3 min-h-[54px] text-[21px] font-bold leading-[1.08] text-[var(--plan-ink)]">{plan.title}</h3>
      <div className="mt-4">
        <h4 className="text-[15px] font-bold text-[var(--plan-text)]">Features</h4>
        <ul className="mt-2 space-y-[7px]">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-[5px] text-[10px] text-[var(--plan-text)]">
              <CheckIcon className="h-[11px] w-[11px] shrink-0 text-[var(--plan-green)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-auto pt-7 text-[15px] font-bold text-[var(--plan-text)]">{plan.note}</p>
      <div className="mt-7">
        <EnrolButton courseSlug={courseSlug} planId={plan.id} />
      </div>
    </article>
  );
}

function MockSection({ data }: { data: CoursePlanConfig }) {
  return (
    <section className="relative overflow-hidden bg-white pb-[82px] pt-[54px] lg:pb-[95px] lg:pt-[66px]">
      <DecorativeRings className="-left-[330px] -top-[55px] w-[810px] rotate-[21deg]" />
      <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
        <div className="mx-auto max-w-[1480px]">
          <h2 className="text-[25px] font-bold tracking-[-0.015em] text-[var(--plan-ink)] sm:text-[26px]">Mock - Online Tests</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {data.mockPlans.map((plan) => (
              <MockPlanCard key={plan.id} plan={plan} courseSlug={data.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CoursePlanPage({ data }: { data: CoursePlanConfig }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[var(--plan-ink)]">
      <Header />
      <main>
        <PlanHero data={data} />
        <ProgrammeSection data={data} />
        <SelfPacedSection data={data} />
        <DataInterpretationSection data={data} />
        <MockSection data={data} />
      </main>
      <Footer />
    </div>
  );
}
