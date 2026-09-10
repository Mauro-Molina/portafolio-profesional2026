"use client";

import { FileSpreadsheet, Inbox, Paintbrush, ShieldCheck, Wrench } from "lucide-react";
import { featuredCf7Plugin } from "@/data/stack";
import { FeaturedHighlight } from "@/components/shared/featured-highlight";

export function FeaturedCf7Section() {
  return (
    <FeaturedHighlight
      content={{
        id: "cf7-plugin",
        badge: featuredCf7Plugin.badge,
        badgeIcon: Wrench,
        name: featuredCf7Plugin.name,
        tagline: featuredCf7Plugin.tagline,
        description: featuredCf7Plugin.description,
        features: featuredCf7Plugin.features,
        ctaLabel: featuredCf7Plugin.ctaLabel,
        ctaHref: featuredCf7Plugin.ctaHref,
        ctaTarget: "_blank",
        panelTitle: "Included tools",
        panelStatus: "Ready",
        panelItems: [
          { name: "Submissions", icon: Inbox },
          { name: "Form Styler", icon: Paintbrush },
          { name: "CSV Export", icon: FileSpreadsheet },
          { name: "Privacy controls", icon: ShieldCheck },
        ],
      }}
    />
  );
}
