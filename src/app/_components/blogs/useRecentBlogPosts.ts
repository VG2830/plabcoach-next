"use client";

import { useEffect, useState } from "react";
import type { RecentWordPressPost } from "../../_lib/wordpress";

function isRecentWordPressPost(value: unknown): value is RecentWordPressPost {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return (
    "id" in value &&
    typeof value.id === "number" &&
    "slug" in value &&
    typeof value.slug === "string" &&
    "title" in value &&
    typeof value.title === "string" &&
    "image" in value &&
    typeof value.image === "string"
  );
}

export function useRecentBlogPosts(initialPosts?: RecentWordPressPost[]) {
  const [posts, setPosts] = useState(initialPosts ?? []);
  const [isLoading, setIsLoading] = useState(initialPosts === undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialPosts !== undefined) {
      return;
    }

    const controller = new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch("/api/recent-posts/", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data: unknown = await response.json();

        if (!Array.isArray(data) || !data.every(isRecentWordPressPost)) {
          throw new Error("The recent posts response was invalid");
        }

        setPosts(data);
      } catch (loadError) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("Failed to load recent blog posts", loadError);
        setError("Recent blog posts are temporarily unavailable.");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void loadPosts();

    return () => controller.abort();
  }, [initialPosts]);

  return { posts, isLoading, error };
}
