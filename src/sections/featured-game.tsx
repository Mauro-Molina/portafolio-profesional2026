"use client";

import { Gamepad2 } from "lucide-react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { FeaturedHighlight } from "@/components/shared/featured-highlight";
import { featuredGame } from "@/data/stack";

export function FeaturedGameSection() {
  return (
    <FeaturedHighlight
      content={{
        id: "game",
        badge: featuredGame.badge,
        badgeIcon: Gamepad2,
        name: featuredGame.name,
        tagline: featuredGame.tagline,
        description: featuredGame.description,
        features: featuredGame.features,
        ctaLabel: featuredGame.ctaLabel,
        ctaHref: featuredGame.ctaHref,
        ctaTarget: "_blank",
        panelTitle: "Built with",
        panelStatus: "Used",
        panelItems: [
          { name: "JavaScript", icon: FaJs },
          { name: "React", icon: FaReact },
          { name: "HTML5", icon: FaHtml5 },
          { name: "CSS", icon: FaCss3Alt },
        ],
      }}
    />
  );
}
