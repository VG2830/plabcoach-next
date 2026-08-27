import Image from "next/image";

export default function RecentPost({
  title,
  href = "#",
}: {
  title: string;
  href?: string;
}) {
  return (
    <a href={href} className="group block">
      <div className="relative aspect-[427/135] w-full overflow-hidden rounded-[13px] bg-[var(--blogs-image-bg)]">
        <Image
          src="/blogs_recent_image.webp"
          alt=""
          fill
          sizes="(max-width: 1023px) calc(100vw - 82px), 427px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
        />
      </div>
      <p className="mt-[10px] text-[12px] leading-[1.45] text-[var(--blogs-muted)] transition-colors duration-200 group-hover:text-[var(--blogs-primary)] sm:text-[13px] lg:text-[14px]">
        {title}
      </p>
    </a>
  );
}
