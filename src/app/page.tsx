import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { ProjectsSection } from "@/sections/projects";
import { ExperienceSection } from "@/sections/experience";
import { TechStackSection } from "@/sections/tech-stack";
import { EducationSection } from "@/sections/education";
import { GitHubSection } from "@/sections/github";
import { FeaturedProductSection } from "@/sections/featured-product";
import { ContactSection } from "@/sections/contact";
import { getContributionStats, getLatestRepos } from "@/lib/github";

export default async function HomePage() {
  const [repos, stats] = await Promise.all([
    getLatestRepos(6),
    getContributionStats(),
  ]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <TechStackSection />
      <EducationSection />
      <GitHubSection repos={repos} stats={stats} />
      <FeaturedProductSection />
      <ContactSection />
    </>
  );
}
