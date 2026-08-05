"use client";

import { motion } from "framer-motion";
import { GitFork, Star, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import type { GitHubRepo } from "@/types";
import { siteConfig } from "@/data/site";

type GitHubSectionProps = {
  repos: GitHubRepo[];
  stats: {
    publicRepos: number;
    followers: number;
    following: number;
    username: string;
  };
};

export function GitHubSection({ repos, stats }: GitHubSectionProps) {
  return (
    <section id="github" className="relative py-24 md:py-32">
      <div className="section-pad container-premium">
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub Activity"
          description="Latest repositories pulled live from the GitHub API — automatically refreshed."
          action={
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[16px] border border-white/10 bg-secondary px-4 py-2 text-sm text-white transition hover:border-primary/40 hover:text-primary"
            >
              <FaGithub className="h-4 w-4" />
              @{stats.username || "mauromolina"}
            </a>
          }
        />

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Public Repos", value: stats.publicRepos },
            { label: "Followers", value: stats.followers },
            { label: "Following", value: stats.following },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[16px] border border-white/8 bg-card p-5"
            >
              <p className="text-sm text-muted">{stat.label}</p>
              <p className="mt-2 font-heading text-3xl text-white">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {repos.length > 0 ? (
            repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-[16px] border border-white/8 bg-secondary/80 p-5 transition hover:border-primary/30 hover:shadow-[0_0_30px_rgba(56,210,107,0.1)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg text-white group-hover:text-primary">
                    {repo.name}
                  </h3>
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted transition group-hover:text-primary" />
                </div>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                  {repo.description || "No description provided."}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted">
                  {repo.language ? (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {repo.language}
                    </span>
                  ) : null}
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3.5 w-3.5" />
                    {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork className="h-3.5 w-3.5" />
                    {repo.forks_count}
                  </span>
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>
              </motion.a>
            ))
          ) : (
            <div className="col-span-full rounded-[16px] border border-dashed border-white/10 bg-card/50 p-10 text-center text-muted">
              GitHub repositories will appear here automatically once the API
              username is configured. Set <code className="text-primary">GITHUB_USERNAME</code> in your environment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
