export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "phone";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  url: string;
  github?: string;
  image: string;
  tech: string[];
  featured: boolean;
  year: string;
  category: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  current?: boolean;
};

export type Education = {
  id: string;
  institution: string;
  program: string;
  period: string;
  description: string;
};

export type TechCategory = {
  id: string;
  name: string;
  items: string[];
};

export type AboutCard = {
  id: string;
  title: string;
  description: string;
  icon: "solver" | "performance" | "code" | "business";
};

export type TimelineItem = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  current?: boolean;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type Locale = "en" | "es";

export type SiteConfig = {
  name: string;
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  url: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  description: string;
};
