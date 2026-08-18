import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const siteUrl = siteConfig.url.replace(/\/$/, "");
const ogImage = `${siteUrl}/og.svg`;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Full Stack Developer",
    "Laravel",
    "React",
    "Next.js",
    "WordPress",
    "TypeScript",
    "Mauro Molina",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/`,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
};

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    jobTitle: siteConfig.title,
    url: `${siteUrl}/`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CU",
    },
    sameAs: [siteConfig.github, siteConfig.linkedin],
  };
}
