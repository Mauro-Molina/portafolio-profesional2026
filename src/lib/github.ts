import type { GitHubRepo } from "@/types";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "mauromolina";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

type GitHubApiRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
  fork: boolean;
};

export async function getLatestRepos(limit = 6): Promise<GitHubRepo[]> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "User-Agent": "mauromolina-portfolio",
    };

    if (GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`,
      {
        headers,
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return [];
    }

    const repos = (await response.json()) as GitHubApiRepo[];

    return repos
      .filter((repo) => !repo.fork)
      .slice(0, limit)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        topics: repo.topics ?? [],
      }));
  } catch {
    return [];
  }
}

export async function getContributionStats() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "User-Agent": "mauromolina-portfolio",
    };

    if (GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers,
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return {
        publicRepos: 0,
        followers: 0,
        following: 0,
        username: GITHUB_USERNAME,
      };
    }

    const data = (await response.json()) as {
      public_repos: number;
      followers: number;
      following: number;
      login: string;
    };

    return {
      publicRepos: data.public_repos,
      followers: data.followers,
      following: data.following,
      username: data.login,
    };
  } catch {
    return {
      publicRepos: 0,
      followers: 0,
      following: 0,
      username: GITHUB_USERNAME,
    };
  }
}
