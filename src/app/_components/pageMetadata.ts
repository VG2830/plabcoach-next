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
  const canonicalUrl = `${siteUrl}${canonicalPath.endsWith("/") ? canonicalPath : `${canonicalPath}/`}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
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
