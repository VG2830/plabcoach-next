import { getRecentWordPressPosts } from "../../_lib/wordpress";

export async function GET() {
  const posts = await getRecentWordPressPosts();

  return Response.json(posts);
}
