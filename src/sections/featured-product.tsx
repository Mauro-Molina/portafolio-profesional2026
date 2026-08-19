"use client";

import { Sparkles } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { featuredProduct } from "@/data/stack";
import { FeaturedHighlight } from "@/components/shared/featured-highlight";

export function FeaturedProductSection() {
  return (
    <FeaturedHighlight
      content={{
        id: "product",
        badge: featuredProduct.badge,
        badgeIcon: Sparkles,
        name: featuredProduct.name,
        tagline: featuredProduct.tagline,
        description: featuredProduct.description,
        features: featuredProduct.features,
        ctaLabel: featuredProduct.ctaLabel,
        ctaHref: featuredProduct.ctaHref,
        ctaTarget: "_blank",
        panelTitle: "AI Providers",
        panelStatus: "Supported",
        panelItems: [
          { name: "OpenAI", icon: RiOpenaiFill },
          { name: "Gemini", icon: SiGoogle },
          { name: "Groq", icon: Sparkles },
          { name: "WordPress.org", icon: FaWordpress },
        ],
      }}
    />
  );
}
