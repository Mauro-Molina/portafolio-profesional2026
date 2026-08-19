import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { ProjectsSection } from "@/sections/projects";
import { ExperienceSection } from "@/sections/experience";
import { TechStackSection } from "@/sections/tech-stack";
import { EducationSection } from "@/sections/education";
import { FeaturedProductSection } from "@/sections/featured-product";
import { FeaturedGameSection } from "@/sections/featured-game";
import { ContactSection } from "@/sections/contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FeaturedProductSection />
      <FeaturedGameSection />
      <ExperienceSection />
      <TechStackSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
