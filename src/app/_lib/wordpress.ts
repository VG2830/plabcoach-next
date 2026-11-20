
import "server-only";
import mysql from "mysql2/promise";

// ==========================================
// DATABASE CONFIGURATION
// ==========================================

const DB_CONFIG = {
  host: process.env.DB_HOST || "92.205.9.207",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "plabcoachuser",
  password: process.env.DB_PASSWORD || "2@41bl13c9",
  database: process.env.DB_NAME || "plabcoachdb",
};

const DB_PREFIX = process.env.DB_PREFIX || "wp_";

if (!/^[a-zA-Z0-9_]+$/.test(DB_PREFIX)) {
  throw new Error("Invalid WordPress database table prefix");
}

if (!DB_CONFIG.password) {
  throw new Error("Missing DB_PASSWORD environment variable");
}

// ==========================================
// MYSQL CONNECTION POOL
// ==========================================

const pool = mysql.createPool({
  ...DB_CONFIG,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
});

// ==========================================
// DATABASE TABLES
// ==========================================

const postsTable = `\`${DB_PREFIX}posts\``;
const metaTable = `\`${DB_PREFIX}postmeta\``;
const usersTable = `\`${DB_PREFIX}users\``;

const FALLBACK_IMAGE = "/blogs_featured_image.webp";

// ==========================================
// TYPES
// ==========================================

export type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    author?: {
      name: string;
    }[];
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
  };
};

export type RecentWordPressPost = {
  id: number;
  slug: string;
  title: string;
  image: string;
};

export type WordPressSitemapPost = {
  slug: string;
  modified: string;
};

// ==========================================
// WORDPRESS IMAGE URL CONVERSION
// ==========================================

/**
 * Converts an old WordPress image URL into a
 * domain-independent local path.
 *
 * Example:
 *
 * https://plabcoach.com/wp-content/uploads/2026/10/a.jpg
 *
 * Becomes:
 *
 * /wp-content/uploads/2026/10/a.jpg
 */

export function getWordPressImagePath(
  imageUrl?: string | null
): string {
  if (!imageUrl) {
    return FALLBACK_IMAGE;
  }

  try {
    const url = new URL(imageUrl, "https://placeholder.local");

    const wpContentIndex = url.pathname.indexOf("/wp-content/");

    if (wpContentIndex === -1) {
      // Already a local WordPress uploads path
      if (url.pathname.startsWith("/wp-content/")) {
        return url.pathname + url.search + url.hash;
      }

      return FALLBACK_IMAGE;
    }

    return (
      url.pathname.substring(wpContentIndex) +
      url.search +
      url.hash
    );
  } catch {
    // Handle an already-relative path
    if (imageUrl.startsWith("/wp-content/")) {
      return imageUrl;
    }

    return FALLBACK_IMAGE;
  }
}

// ==========================================
// CONVERT WORDPRESS IMAGE URLS INSIDE HTML
// ==========================================

/**
 * Rewrites absolute WordPress media URLs inside
 * post HTML to local paths.
 *
 * This handles images embedded inside post_content,
 * not just featured images.
 */

export function rewriteWordPressMediaUrls(
  content: string
): string {
  if (!content) {
    return "";
  }

  return content.replace(
    /(?:https?:)?\/\/[^"'<> \t\r\n]+/gi,
    (originalUrl) => {
      const localPath = getWordPressImagePath(originalUrl);

      if (localPath === FALLBACK_IMAGE) {
        return originalUrl;
      }

      return localPath;
    }
  );
}

// ==========================================
// COMMON POST QUERY
// ==========================================

const POST_QUERY = `
  SELECT
    p.ID AS id,
    p.post_name AS slug,
    p.post_date AS date,
    p.post_title AS title,
    p.post_excerpt AS excerpt,
    p.post_content AS content,
    u.display_name AS author,
    image.guid AS featured_image

  FROM ${postsTable} p

  LEFT JOIN ${usersTable} u
    ON u.ID = p.post_author

  LEFT JOIN ${metaTable} thumbnail
    ON thumbnail.post_id = p.ID
    AND thumbnail.meta_key = '_thumbnail_id'

  LEFT JOIN ${postsTable} image
    ON image.ID = CAST(thumbnail.meta_value AS UNSIGNED)
    AND image.post_type = 'attachment'

  WHERE p.post_type = 'post'
    AND p.post_status = 'publish'
`;

// ==========================================
// MAP DATABASE ROW TO WORDPRESS POST FORMAT
// ==========================================

function mapPost(row: any): WordPressPost {
  const featuredImage = getWordPressImagePath(
    row.featured_image
  );

  return {
    id: Number(row.id),
    slug: row.slug,
    date: row.date,
    link: `/blogs/${row.slug}`,

    title: {
      rendered: row.title || "",
    },

    excerpt: {
      rendered: rewriteWordPressMediaUrls(
        row.excerpt || ""
      ),
    },

    content: {
      rendered: rewriteWordPressMediaUrls(
        row.content || ""
      ),
    },

    _embedded: {
      author: row.author
        ? [{ name: row.author }]
        : [],

      "wp:featuredmedia": row.featured_image
        ? [{ source_url: featuredImage }]
        : [],
    },
  };
}

// ==========================================
// GET LATEST WORDPRESS POSTS
// ==========================================

export async function getWordPressPosts():
  Promise<WordPressPost[]> {

  const [rows] = await pool.query(
    `${POST_QUERY}
     ORDER BY p.post_date DESC
     LIMIT 10`
  );

  return (rows as any[]).map(mapPost);
}

// ==========================================
// GET ALL POSTS FOR SITEMAP
// ==========================================

export async function getWordPressPostsForSitemap():
  Promise<WordPressSitemapPost[]> {

  const [rows] = await pool.query(
    `SELECT
       post_name AS slug,
       post_modified AS modified

     FROM ${postsTable}

     WHERE post_type = 'post'
       AND post_status = 'publish'

     ORDER BY post_modified DESC`
  );

  return (rows as any[]).map((row) => ({
    slug: row.slug,
    modified: row.modified,
  }));
}

// ==========================================
// GET RECENT POSTS
// ==========================================

export async function getRecentWordPressPosts():
  Promise<RecentWordPressPost[]> {

  const posts = await getWordPressPosts();

  return posts.slice(0, 3).map((post) => ({
    id: post.id,
    slug: post.slug,
    title: toPlainText(post.title.rendered),

    image:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      FALLBACK_IMAGE,
  }));
}

// ==========================================
// GET SINGLE POST BY SLUG
// ==========================================

export async function getWordPressPostBySlug(
  slug: string
): Promise<WordPressPost | null> {

  const [rows] = await pool.execute(
    `${POST_QUERY}
     AND p.post_name = ?
     LIMIT 1`,
    [slug]
  );

  const posts = rows as any[];

  return posts.length > 0
    ? mapPost(posts[0])
    : null;
}

// ==========================================
// CONVERT HTML TO PLAIN TEXT
// ==========================================

export function toPlainText(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")

    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCodePoint(Number(code))
    )

    .replace(/&#x([a-f\d]+);/gi, (_, code: string) =>
      String.fromCodePoint(parseInt(code, 16))
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

// ==========================================
// CONVERT WORDPRESS SHORTCODES TO DISPLAY HTML
// ==========================================

export function toDisplayContent(content: string): string {
  const decodedShortcodeQuotes = content.replace(
    /&#(?:8220|8221|8243);/gi,
    '"'
  );

  // No supported WPBakery shortcodes found
  if (
    !/\[vc_(?:row|column|column_text|custom_heading)\b/i.test(
      decodedShortcodeQuotes
    )
  ) {
    return rewriteWordPressMediaUrls(content);
  }

  const shortcodePattern =
    /\[vc_column_text\b[^\]]*\]([\s\S]*?)\[\/vc_column_text\]|\[vc_custom_heading\b([^\]]*)\]/gi;

  const blocks: string[] = [];

  for (const match of decodedShortcodeQuotes.matchAll(
    shortcodePattern
  )) {
    // Column text
    if (match[1] !== undefined) {
      const body = match[1]
        .replace(/\[\/?vc_[^\]]*\]/gi, "")
        .trim();

      const rewrittenBody = rewriteWordPressMediaUrls(body);

      if (
        rewrittenBody &&
        (
          toPlainText(rewrittenBody) ||
          /<(img|video|iframe)\b/i.test(rewrittenBody)
        )
      ) {
        blocks.push(rewrittenBody);
      }

      continue;
    }

    // Custom heading
    const attributes = match[2] ?? "";

    const text = attributes.match(
      /(?:^|\s)text="([^"]*)"/i
    )?.[1];

    if (!text?.trim()) {
      continue;
    }

    const headingTag =
      attributes.match(
        /(?:^|\s)tag="?(h[2-6])"?/i
      )?.[1]?.toLowerCase() ?? "h2";

    blocks.push(
      `<${headingTag}>${toPlainText(text)}</${headingTag}>`
    );
  }

  return blocks.length > 0
    ? rewriteWordPressMediaUrls(blocks.join("\n"))
    : rewriteWordPressMediaUrls(
        decodedShortcodeQuotes.replace(
          /\[\/?vc_[^\]]*\]/gi,
          ""
        )
      );
}
