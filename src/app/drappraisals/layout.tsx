import type { Metadata } from "next";
import { createPageMetadata } from "../_components/pageMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Doctor Appraisal & Revalidation Services | PLABcoach",
  description:
    "Get expert support with GMC-compliant doctor appraisals, revalidation, portfolio reviews, interview preparation and career services.",
  canonicalPath: "/drappraisals",
  image: "/gmc_hero_image.webp",
  imageAlt: "Medical professionals supported by PLABcoach",
});

export default function DrAppraisalsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
