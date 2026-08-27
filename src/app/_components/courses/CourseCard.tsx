import Image from "next/image";

type CourseCardProps = {
  image: string;
  title: string;
  assessment: string;
  description: string;
  buttonLabel: string;
  href?: string;
};

const cardFeatures = [
  { icon: "/smart_banks_icon.svg", label: "SmartQBank" },
  { icon: "/smart_notes_icon.svg", label: "SmartNotes" },
  { icon: "/smart_mocks_cour_icon.svg", label: "SmartMocks" },
  { icon: "/exam_style_icon.svg", label: "Exam-style practice" },
];

export default function CourseCard({
  image,
  title,
  assessment,
  description,
  buttonLabel,
  href = "#",
}: CourseCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[20px] border border-[var(--courses-card-border)] bg-white p-[16px]">
      <div className="relative aspect-[679/229] w-full overflow-hidden rounded-[17px] bg-[var(--courses-feature-bg)]">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1200px) 46vw, 460px"
          className="object-cover"
        />
      </div>

      <div className="pt-[10px]">
        <h3 className="text-[16px] font-bold leading-[1.15] text-[var(--courses-card-heading)] sm:text-[24px]">
          {title}
        </h3>
        <p className="mt-[5px] text-[10px] font-semibold leading-[1.3] text-[var(--courses-card-heading)] sm:text-[14px]">
          {assessment}
        </p>
        <p className="mt-[8px] min-h-[38px] text-[11px] leading-[1.55] text-[var(--courses-copy)] sm:text-[16px]">
          {description}
        </p>
      </div>

      <div className="my-[15px] h-px w-full bg-[var(--courses-divider)]" />

      <div className="grid grid-cols-2 gap-[10px] sm:grid-cols-4 sm:gap-[12px]">
        {cardFeatures.map((feature) => (
          <div
            key={feature.label}
            className="flex min-h-[62px] flex-col items-start justify-center rounded-[10px] bg-[var(--courses-feature-bg)] px-[10px] py-[8px] sm:min-h-[60px] sm:px-[9px]"
          >
            <Image
              src={feature.icon}
              alt=""
              aria-hidden="true"
              width={38}
              height={38}
              className="h-[24px] w-[24px] object-contain sm:h-[25px] sm:w-[25px]"
            />
            <span className="mt-[5px] whitespace-nowrap text-[9px] font-semibold leading-none text-[var(--courses-card-heading)] sm:text-[14px]">
              {feature.label}
            </span>
          </div>
        ))}
      </div>

      <a
        href={href}
        className="mt-[26px] flex h-[42px] w-full items-center justify-center gap-[10px] rounded-[7px] bg-[var(--courses-cta)] px-[14px] text-[10px] font-bold text-white transition-[filter,transform] duration-200 hover:-translate-y-[1px] hover:brightness-105 sm:text-[16px]"
      >
        <span>{buttonLabel}</span>
        {/* <ArrowIcon /> */}
        <Image
          src="/courses_arrow.svg"
          alt=""
          aria-hidden="true"
          width={18}
          height={14}
          className="h-[14px] w-[18px] object-contain"
        />
      </a>
    </article>
  );
}
