import Image from "next/image";

type BlogCardProps = {
  image: string;
  title: string;
  excerpt: string;
  date?: string;
  author?: string;
  href?: string;
  featured?: boolean;
};

export function BlogMeta({
  date = "December 17,2024",
  author = "Plabcoach",
  compact = false,
}: {
  date?: string;
  author?: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex flex-wrap items-center ${compact ? "gap-[8px]" : "gap-[12px]"}`}>
      <span className="inline-flex h-[28px] items-center gap-[7px] rounded-full bg-[var(--blogs-meta-bg)] px-[12px] text-[10px] font-medium leading-none text-[var(--blogs-muted)] sm:text-[11px]">
        <Image
          src="/calender_icon_blog.svg"
          alt=""
          aria-hidden="true"
          width={24}
          height={24}
          className="h-[15px] w-[15px] shrink-0"
        />
        {date}
      </span>
      <span className="inline-flex h-[28px] items-center gap-[7px] rounded-full bg-[var(--blogs-meta-bg)] px-[12px] text-[10px] font-medium leading-none text-[var(--blogs-muted)] sm:text-[11px]">
        <Image
          src="/User_icon.svg"
          alt=""
          aria-hidden="true"
          width={24}
          height={24}
          className="h-[15px] w-[15px] shrink-0"
        />
        {author}
      </span>
    </div>
  );
}

export default function BlogCard({
  image,
  title,
  excerpt,
  date,
  author,
  href = "#",
  featured = false,
}: BlogCardProps) {
  if (featured) {
    return (
      <article className="min-w-0">
        <div className="relative aspect-[477/359] w-full overflow-hidden rounded-[22px] bg-[var(--blogs-image-bg)]">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 48vw, 477px"
            className="object-cover"
          />
        </div>

        <div className="mt-[13px]">
          <BlogMeta date={date} author={author} compact />
          <h3 className="mt-[18px] text-[20px] font-bold leading-[1.08] tracking-[-0.015em] text-[var(--blogs-heading)] sm:text-[22px] lg:text-[24px]">
            {title}
          </h3>
          <p className="mt-[14px] text-[12px] leading-[1.6] text-[var(--blogs-muted)] sm:text-[13px] lg:text-[14px]">
            {excerpt}
          </p>
          <a
            href={href}
            className="mt-[30px] inline-flex h-[60px] min-w-[228px] items-center justify-center gap-[15px] rounded-[7px] bg-[var(--blogs-primary)] px-[24px] text-[12px] font-bold text-white transition-[filter] duration-200 hover:brightness-105 sm:text-[13px]"
          >
            Read More
            <Image src="/courses_arrow.svg" alt="" aria-hidden="true" width={20} height={15} className="h-[15px] w-[20px]" />
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-[22px] border border-[var(--blogs-border)] bg-white p-[24px] sm:p-[25px]">
      <div className="relative aspect-[929/450] w-full overflow-hidden rounded-[22px] bg-[var(--blogs-image-bg)]">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="(max-width: 1023px) calc(100vw - 82px), 930px"
          className="object-cover"
        />
      </div>

      <div className="mt-[14px]">
        <BlogMeta date={date} author={author} />
        <h2 className="mt-[20px] text-[22px] font-bold leading-[1.08] tracking-[-0.015em] text-[var(--blogs-heading)] sm:text-[24px] lg:text-[25px]">
          {title}
        </h2>
        <p className="mt-[17px] max-w-[900px] text-[13px] leading-[1.55] text-[var(--blogs-muted)] sm:text-[14px]">
          {excerpt}
        </p>
        <a
          href={href}
          className="mt-[31px] inline-flex h-[60px] min-w-[228px] items-center justify-center gap-[15px] rounded-[7px] bg-[var(--blogs-primary)] px-[24px] text-[12px] font-bold text-white transition-[filter] duration-200 hover:brightness-105 sm:text-[13px]"
        >
          Read More
          <Image src="/courses_arrow.svg" alt="" aria-hidden="true" width={20} height={15} className="h-[15px] w-[20px]" />
        </a>
      </div>
    </article>
  );
}
