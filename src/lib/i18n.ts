import type { Locale } from "@/types";

/**
 * i18n-ready dictionary scaffold.
 * Swap dictionary source later for CMS / next-intl without rewriting UI.
 */
const dictionaries = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      stack: "Stack",
      contact: "Contact",
    },
    hero: {
      hello: "Hello, I'm",
      ctaProjects: "View Projects",
      ctaCv: "Download CV",
    },
    contact: {
      title: "Let's build something premium",
      subtitle: "Tell me about your project. I'll get back within 24–48 hours.",
      send: "Send message",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      stack: "Stack",
      contact: "Contacto",
    },
    hero: {
      hello: "¡Hola! Soy",
      ctaProjects: "Ver proyectos",
      ctaCv: "Descargar CV",
    },
    contact: {
      title: "Construyamos algo premium",
      subtitle: "Cuéntame sobre tu proyecto. Respondo en 24–48 horas.",
      send: "Enviar mensaje",
    },
  },
} as const;

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    projects: string;
    experience: string;
    stack: string;
    contact: string;
  };
  hero: {
    hello: string;
    ctaProjects: string;
    ctaCv: string;
  };
  contact: {
    title: string;
    subtitle: string;
    send: string;
  };
};

export function getDictionary(locale: Locale = "en"): Dictionary {
  return dictionaries[locale];
}
