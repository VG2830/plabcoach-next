import Image from "next/image";
import Footer from "../Footer";
import Header from "../Header";
import BlogCard from "./BlogCard";
import RecentPost from "./RecentPost";

const blogTitle =
  "OSCE Self-Assessment: 10 Signs You Need More Practice as an International Medical Graduate";

const blogExcerpt =
  "If you're aiming for the UK as an international doctor, you've probably heard two acronyms thrown around constantly: PLAB and UKMLA.";

const featuredBlogs = [1, 2, 3];
const recentPosts = [1, 2, 3];

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-current">
      <circle cx="11" cy="11" r="6.4" strokeWidth="1.7" />
      <path d="m16 16 4 4" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function CarouselArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous featured blogs" : "Next featured blogs"}
      className={`absolute top-[152px] z-20 hidden h-[54px] w-[54px] items-center justify-center rounded-full bg-[var(--blogs-arrow-bg)] text-white shadow-[0_6px_16px_rgba(42,114,194,0.16)] transition-[filter] duration-200 hover:brightness-105 xl:flex ${
        direction === "left" ? "left-[-27px]" : "right-[-27px]"
      }`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-current">
        <path
          d={direction === "left" ? "m14.5 5.5-6.5 6.5 6.5 6.5" : "m9.5 5.5 6.5 6.5-6.5 6.5"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function Blogs() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[var(--blogs-heading)]">
      <Header />

      <main>
        <section id="blogs" className="relative overflow-hidden bg-[var(--blogs-hero-bg)]">
          <Image
            src="/hero_banner_bg_ellipse.webp"
            alt=""
            aria-hidden="true"
            width={1332}
            height={689}
            className="pointer-events-none absolute right-[-220px] top-[-118px] z-0 w-[900px] max-w-none sm:right-[-170px] sm:w-[1020px] lg:right-[131px] lg:-top-[350px] lg:w-[1050px]"
          />

          <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)] xl:h-[520px] 2xl:h-[570px]">
            <div className="relative z-20 max-w-[650px] pb-[38px] pt-[64px] sm:pb-[48px] sm:pt-[82px] xl:max-w-[560px] xl:pb-0 xl:pt-[120px] 2xl:max-w-[610px] 2xl:pt-[145px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.015em] text-[var(--blogs-label)] sm:text-[12px] lg:text-[13px]">
                Blogs
              </p>
              <h1 className="mt-[8px] text-[38px] font-bold leading-[1.04] tracking-[-0.022em] text-[var(--blogs-heading)] sm:text-[46px] xl:text-[48px] 2xl:text-[52px]">
                Insights for Your Medical
                <br className="hidden sm:block" /> Journey
              </h1>
              <p className="mt-[20px] max-w-[620px] text-[12px] leading-[1.6] text-[var(--blogs-muted)] sm:text-[14px] lg:text-[15px]">
                Expert guidance, exam tips, and practical insights to help you prepare with confidence.
              </p>
            </div>

            <Image
              src="/blogs_hero_sec_image.webp"
              alt="Doctors discussing medical learning material"
              width={853}
              height={546}
              priority
              className="relative z-10 mx-auto h-auto w-full max-w-[720px] xl:absolute xl:bottom-0 xl:right-[-10px] xl:w-[700px] xl:max-w-none 2xl:w-[853px]"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-[58px] sm:py-[72px] lg:pb-[88px] lg:pt-[60px]">
          <Image
            src="/featured_courses_ellipse.webp"
            alt=""
            aria-hidden="true"
            width={1332}
            height={689}
            className="pointer-events-none absolute right-[-420px] top-[-42px] z-0 w-[920px] max-w-none rotate-90 sm:right-[-370px] sm:w-[1040px] lg:right-[-350px] lg:top-[-42px] lg:w-[1120px]"
          />

          <div className="relative z-10 mx-auto grid w-[var(--site-width)] max-w-[var(--container-max)] gap-[42px] lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)] lg:gap-[24px] 2xl:grid-cols-[980px_480px] 2xl:gap-[20px]">
            <div className="min-w-0">
              <h2 className="text-[30px] font-bold leading-none tracking-[-0.02em] text-[var(--blogs-heading)] sm:text-[34px] lg:text-[38px]">
                Blogs
              </h2>
              <div className="mt-[18px]">
                <BlogCard
                  image="/blogs_second_sec_main_image.webp"
                  title={blogTitle}
                  excerpt={blogExcerpt}
                  href="#"
                />
              </div>
            </div>

            <aside className="min-w-0">
              <h2 className="text-[30px] font-bold leading-none tracking-[-0.02em] text-[var(--blogs-heading)] sm:text-[34px] lg:text-[38px]">
                Search
              </h2>
              <label className="mt-[18px] flex h-[62px] w-full items-center rounded-full border border-[var(--blogs-search-border)] bg-white px-[18px] text-[var(--blogs-muted)] transition-colors focus-within:border-[var(--blogs-primary)]">
                <span className="sr-only">Search blogs</span>
                <input
                  type="search"
                  placeholder="Type Here"
                  className="min-w-0 flex-1 bg-transparent px-[3px] text-[12px] text-[var(--blogs-heading)] outline-none placeholder:text-[var(--blogs-muted)] sm:text-[13px]"
                />
                <SearchIcon />
              </label>

              <h2 className="mt-[62px] text-[30px] font-bold leading-none tracking-[-0.02em] text-[var(--blogs-heading)] sm:text-[34px] lg:text-[38px]">
                Recent Posts
              </h2>
              <div className="mt-[18px] rounded-[22px] border border-[var(--blogs-border)] bg-white p-[23px]">
                <div className="space-y-[23px]">
                  {recentPosts.map((item) => (
                    <RecentPost key={item} title={blogTitle} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[var(--blogs-featured-bg)] pb-[118px] pt-[118px] sm:pb-[126px] sm:pt-[125px] lg:pb-[120px] lg:pt-[124px]">
          <Image
            src="/featured_courses_ellipse.webp"
            alt=""
            aria-hidden="true"
            width={1332}
            height={689}
            className="pointer-events-none absolute left-[-300px] top-[-152px] z-0 w-[850px] max-w-none sm:left-[-250px] sm:w-[980px] lg:left-[-280px] lg:top-[-150px] lg:w-[1070px]"
          />

          <div className="relative z-10 mx-auto w-[var(--site-width)] max-w-[var(--container-max)]">
            <h2 className="text-[30px] font-bold leading-none tracking-[-0.02em] text-[var(--blogs-heading)] sm:text-[34px] lg:text-[38px]">
              Featured Blogs
            </h2>

            <div className="relative mt-[40px]">
              <CarouselArrow direction="left" />
              <div className="grid grid-cols-1 gap-[34px] sm:grid-cols-2 sm:gap-[24px] xl:grid-cols-3 xl:gap-[24px]">
                {featuredBlogs.map((item) => (
                  <BlogCard
                    key={item}
                    image="/blogs_featured_image.webp"
                    title={blogTitle}
                    excerpt={blogExcerpt}
                    href="#"
                    featured
                  />
                ))}
              </div>
              <CarouselArrow direction="right" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
