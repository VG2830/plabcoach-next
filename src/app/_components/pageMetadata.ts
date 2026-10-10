import type { Metadata } from "next";

const siteUrl = "https://plabcoach.cogniq.in";

type PageMetadataOptions = {
  title: string;
  description: string;
  canonicalPath: string;
  image: string;
  imageAlt: string;
};

export function createPageMetadata({
  title,
  description,
  canonicalPath,
  image,
  imageAlt,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${canonicalPath}`,
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}${canonicalPath}`,
      title,
      description,
      images: [
        {
          url: `${siteUrl}${image}`,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}${image}`],
    },
  };
}
