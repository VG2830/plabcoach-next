import type { Metadata } from "next";
import PolicyPage from "../_components/PolicyPage";
import { createPageMetadata } from "../_components/pageMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Cookie Policy | PLABcoach",
  description:
    "Learn about cookies, third-party embeds and how they may be used on PLABcoach.",
  canonicalPath: "/cookie-policy/",
  image: "/hero_banner_image.webp",
  imageAlt: "PLABcoach medical exam preparation",
});

export default function CookiePolicyPage() {
  return (
    <PolicyPage title="Cookie Policy">
      <section>
        <h2>What cookies are</h2>
        <p>
          Cookies are small files a website saves on your device. Some are
          needed for the site to work. Others help us understand how the site
          is used and measure our adverts. We will ask for your consent before
          using non-essential analytics or advertising cookies.
        </p>
      </section>

      <section>
        <h2>The cookies and similar technologies we found</h2>
        <p>
          Our code scan on 11 November 2026 did not find PLABcoach cookie
          storage, Google Analytics or Meta advertising tags. It did find
          embedded YouTube and Google Maps content. Those providers may use
          cookies or similar technologies when their embedded content loads or
          you interact with it. Their cookies and retention periods are
          controlled by those providers and can change.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[#dfeaf8]">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-[#dfeaf8] px-4 py-3">Provider</th>
                <th className="border-b border-[#dfeaf8] px-4 py-3">Type</th>
                <th className="border-b border-[#dfeaf8] px-4 py-3">What it does</th>
                <th className="border-b border-[#dfeaf8] px-4 py-3">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-[#e7edf5] px-4 py-3">YouTube (privacy-enhanced embed)</td>
                <td className="border-b border-[#e7edf5] px-4 py-3">Third-party media</td>
                <td className="border-b border-[#e7edf5] px-4 py-3">Displays the video on our About Us page.</td>
                <td className="border-b border-[#e7edf5] px-4 py-3">Set by YouTube; depends on your interaction and settings.</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Google Maps</td>
                <td className="px-4 py-3">Third-party map</td>
                <td className="px-4 py-3">Displays the map on our Contact Us page.</td>
                <td className="px-4 py-3">Set by Google; depends on your interaction and settings.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Videos and links</h2>
        <p>
          Videos on our site are embedded from YouTube in privacy-enhanced
          mode. This mode is intended to limit cookie use before you play a
          video. External links, including our WhatsApp chat button, take you
          to third-party services; their own privacy and cookie policies apply
          when you visit them.
        </p>
      </section>

      <section>
        <h2>Your choices</h2>
        <p>
          We did not find a cookie preference tool on the site during our code
          scan, so cookie settings are not currently available in the footer.
          You can block or delete cookies in your browser settings. Embedded
          maps and videos may not work as expected if you block third-party
          content.
        </p>
        <p>
          We will update this page if we add cookies or a consent tool. Before
          using non-essential analytics or advertising cookies, we will provide
          a way to make and change your choice.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about cookies:{" "}
          <a href="mailto:support@plabcoach.com">support@plabcoach.com</a>.
        </p>
      </section>
    </PolicyPage>
  );
}
