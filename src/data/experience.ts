import type { Education, Experience, TimelineItem } from "@/types";

export const experiences: Experience[] = [
  {
    id: "freelance",
    role: "Full Stack Developer",
    company: "Freelance / Remote Clients",
    period: "2022 — Present",
    current: true,
    description:
      "Designing and shipping premium web products for international clients across e-commerce, SaaS, tourism, and brand platforms.",
    highlights: [
      "Delivered production WordPress, Laravel, and React experiences for US and LATAM brands",
      "Improved conversion and performance through UX refinement and technical optimization",
      "Owned end-to-end delivery: architecture, UI implementation, CMS, SEO, and deployment",
    ],
  },
  {
    id: "professional-projects",
    role: "Web Developer",
    company: "Professional Client Projects",
    period: "2021 — 2024",
    description:
      "Built and maintained production websites and applications with a focus on reliability, maintainability, and polished interfaces.",
    highlights: [
      "Implemented custom themes, APIs, and admin workflows",
      "Collaborated with stakeholders to translate business needs into shipping software",
      "Maintained long-term product quality across iterative releases",
    ],
  },
];

export const education: Education[] = [
  {
    id: "ironhack",
    institution: "Ironhack",
    program: "Web Development Bootcamp",
    period: "Intensive Program",
    description:
      "Full-stack training focused on modern JavaScript, React, APIs, and product-driven development practices.",
  },
  {
    id: "uci",
    institution: "Universidad de las Ciencias Informáticas (UCI)",
    program: "Computer Science Studies",
    period: "University",
    description:
      "Formal foundations in software engineering, algorithms, databases, and systems thinking.",
  },
  {
    id: "instituto",
    institution: "Instituto de Informática",
    program: "Technical Computing Studies",
    period: "Technical Institute",
    description:
      "Hands-on technical education covering programming fundamentals and applied informatics.",
  },
];

export const timeline: TimelineItem[] = [
  {
    id: "ironhack",
    title: "Ironhack",
    subtitle: "Web Development",
    period: "Bootcamp",
    description:
      "Accelerated full-stack training that sharpened modern frontend and backend delivery skills.",
  },
  {
    id: "university",
    title: "University Path",
    subtitle: "UCI + Technical Institute",
    period: "Academic",
    description:
      "Built strong computer science fundamentals and practical informatics experience.",
  },
  {
    id: "freelance",
    title: "Freelance",
    subtitle: "Independent Delivery",
    period: "2021+",
    description:
      "Started shipping client projects end-to-end with ownership over product quality.",
  },
  {
    id: "professional",
    title: "Professional Projects",
    subtitle: "Production Systems",
    period: "2022+",
    description:
      "Delivered commercial websites and platforms for brands across multiple industries.",
  },
  {
    id: "current",
    title: "Current",
    subtitle: "Full Stack Developer",
    period: "Now",
    description:
      "Building premium digital products with Laravel, React, WordPress, and AI-powered tooling.",
    current: true,
  },
];
