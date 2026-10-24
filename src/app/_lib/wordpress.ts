export type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    author?: { name: string }[];
    "wp:featuredmedia"?: { source_url: string }[];
  };
};

const WORDPRESS_API_URL =
  process.env.WORDPRESS_API_URL?.replace(/\/+$/, "") ??
  "https://plabcoach.com/wp-json/wp/v2";

export async function getWordPressPosts() {
  const response = await fetch(`${WORDPRESS_API_URL}/posts?per_page=10&_embed`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch WordPress posts: ${response.status}`);
  }

  const posts = (await response.json()) as WordPressPost[];

  if (!Array.isArray(posts)) {
    throw new Error("WordPress returned an invalid posts response");
  }

  return posts;
}

export async function getWordPressPostBySlug(slug: string) {
  const response = await fetch(
    `${WORDPRESS_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`,
    { next: { revalidate: 3600 } },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch WordPress post: ${response.status}`);
  }

  const posts = (await response.json()) as WordPressPost[];

  if (!Array.isArray(posts)) {
    throw new Error("WordPress returned an invalid post response");
  }

  return posts[0] ?? null;
}

export function toPlainText(html: string) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCodePoint(Number(code)),
    )
    .replace(/&#x([a-f\d]+);/gi, (_, code: string) =>
      String.fromCodePoint(parseInt(code, 16)),
    )
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function toDisplayContent(content: string) {
  const decodedShortcodeQuotes = content.replace(
    /&#(?:8220|8221|8243);/gi,
    '"',
  );

  if (!/\[vc_(?:row|column|column_text|custom_heading)\b/i.test(content)) {
    return content;
  }

  const shortcodePattern =
    /\[vc_column_text\b[^\]]*\]([\s\S]*?)\[\/vc_column_text\]|\[vc_custom_heading\b([^\]]*)\]/gi;
  const blocks: string[] = [];

  for (const match of decodedShortcodeQuotes.matchAll(shortcodePattern)) {
    if (match[1] !== undefined) {
      const body = match[1].replace(/\[\/?vc_[^\]]*\]/gi, "").trim();

      if (body && (toPlainText(body) || /<(img|video|iframe)\b/i.test(body))) {
        blocks.push(body);
      }

      continue;
    }

    const attributes = match[2] ?? "";
    const text = attributes.match(/(?:^|\s)text="([^"]*)"/i)?.[1];

    if (!text?.trim()) {
      continue;
    }

    const headingTag =
      attributes.match(/tag:(h[2-6])\b/i)?.[1]?.toLowerCase() ?? "h2";
    blocks.push(
      `<${headingTag}>${toPlainText(text)}</${headingTag}>`,
    );
  }

  return blocks.length > 0
    ? blocks.join("\n")
    : content.replace(/\[\/?vc_[^\]]*\]/gi, "");
}
