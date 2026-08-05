import { NextResponse } from "next/server";
import { getContributionStats, getLatestRepos } from "@/lib/github";

export async function GET() {
  const [repos, stats] = await Promise.all([
    getLatestRepos(6),
    getContributionStats(),
  ]);

  return NextResponse.json(
    { repos, stats },
    {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    },
  );
}
