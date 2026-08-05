import type { AboutCard } from "@/types";

export const aboutIntro = {
  eyebrow: "About me",
  title: "I build products that feel effortless and perform under pressure.",
  paragraphs: [
    "I'm Mauro Molina, a Full Stack Developer focused on shipping polished digital products — from high-converting WordPress experiences to scalable Laravel and React applications.",
    "I care about clean architecture, measurable performance, and interfaces that feel inevitable. Every project is an opportunity to turn business goals into software people enjoy using.",
    "Whether it's a SaaS platform, an e-commerce storefront, or an AI-assisted workflow, I design systems that are maintainable, fast, and ready to grow.",
  ],
};

export const aboutCards: AboutCard[] = [
  {
    id: "solver",
    title: "Problem Solver",
    description:
      "I break complex product challenges into clear systems and ship solutions that actually move the needle.",
    icon: "solver",
  },
  {
    id: "performance",
    title: "Performance",
    description:
      "Fast by default. Optimized assets, lean queries, and UI that stays smooth under real-world load.",
    icon: "performance",
  },
  {
    id: "code",
    title: "Clean Code",
    description:
      "Readable architecture, typed contracts, and reusable components that keep teams shipping with confidence.",
    icon: "code",
  },
  {
    id: "business",
    title: "Business Mindset",
    description:
      "I build with conversion, retention, and ops in mind — software that supports growth, not just demos.",
    icon: "business",
  },
];
