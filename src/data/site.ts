import type { NavItem, SiteConfig, SocialLink } from "@/types";
import { withBasePath } from "@/lib/paths";

export const siteConfig: SiteConfig = {
  name: "Mauro Molina",
  fullName: "Mauro Molina Mazon",
  title: "Full Stack Developer",
  email: "mauromolinamazon@gmail.com",
  phone: "+53 55592113",
  location: "Cuba",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  github: "https://github.com/Mauro-Molina",
  linkedin: "https://www.linkedin.com/in/mauro-molina-mazon",
  cvUrl: withBasePath(
    `/cv/${encodeURIComponent("Curriculum Profesional Mauro Molina.pdf")}`,
  ),
  description:
    "Full Stack Developer crafting premium web experiences with Laravel, React, Vue, WordPress and modern AI tooling.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: "email",
  },
];

export const typingRoles = [
  "Laravel Developer",
  "React Developer",
  "Vue Developer",
  "WordPress Expert",
  "AI Developer",
  "SaaS Builder",
] as const;

export const heroBadges = [
  "Laravel",
  "React",
  "Vue",
  "WordPress",
  "PHP",
  "TypeScript",
  "MySQL",
] as const;
