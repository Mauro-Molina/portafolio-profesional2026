import type { TechCategory } from "@/types";

export const techStack: TechCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    items: [
      "React",
      "Vue",
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
    "Groq support",
    "Rank Math & Yoast integration",
    "SEO-focused generation",
    "Live on WordPress.org",
  ],
  ctaLabel: "View on WordPress.org",
  ctaHref: "https://wordpress.org/plugins/maurometa-seo-writer/",
  badge: "Featured Product",
};

export const featuredGame = {
  name: "Captura al Pollo",
  tagline: "Browser game built during my studies",
  description:
    "A playful web game I built while studying — an abstract take on everyday Cuban life: collect chickens, dodge shopkeepers, and reach 20 points to win.",
  features: [
    "Study-time personal project",
    "Playable in the browser",
    "Collect chickens to score",
    "Dodge shopkeepers",
    "Keyboard controls",
    "Created by Mauro Molina Mazon",
  ],
  ctaLabel: "Play the game",
  ctaHref: "https://mauro-molina.github.io/captura-el-pollo/",
  badge: "Study Project",
};
