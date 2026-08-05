import type { TechCategory } from "@/types";

export const techStack: TechCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "HTML",
      "CSS",
      "Framer Motion",
    ],
  },
  {
    id: "backend",
    name: "Backend",
    items: ["Laravel", "PHP", "Node.js", "REST APIs", "Express"],
  },
  {
    id: "database",
    name: "Database",
    items: ["MySQL", "PostgreSQL", "SQL", "Redis"],
  },
  {
    id: "cms",
    name: "CMS",
    items: ["WordPress", "WooCommerce", "Custom Themes", "ACF"],
  },
  {
    id: "cloud",
    name: "Cloud",
    items: ["Vercel", "AWS", "Cloudflare", "cPanel"],
  },
  {
    id: "tools",
    name: "Tools",
    items: ["Git", "Docker", "Figma", "Postman", "Linux", "CI/CD"],
  },
];

export const featuredProduct = {
  name: "Maurometa SEO Writer",
  tagline: "AI-powered SEO assistant for WordPress",
  description:
    "A premium WordPress plugin that helps creators and agencies generate SEO-ready content with multiple AI providers — without leaving the WordPress editor.",
  features: [
    "OpenAI support",
    "Gemini support",
    "Grok support",
    "Native WordPress.org workflow",
    "SEO-focused generation",
    "Editor-ready output",
  ],
  ctaLabel: "Explore Maurometa",
  ctaHref: "#contact",
  badge: "Featured Product",
};
