"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { featuredProduct } from "@/data/stack";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function FeaturedProductSection() {
  return (
    <section id="product" className="relative py-24 md:py-32">
      <div className="section-pad container-premium">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
          className="relative overflow-hidden rounded-[24px] border border-primary/20 bg-gradient-to-br from-[#0d1a12] via-card to-[#050505] p-8 md:p-14"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-[90px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                {featuredProduct.badge}
              </span>

              <h2 className="mt-6 font-heading text-4xl font-semibold text-white md:text-6xl">
                {featuredProduct.name}
              </h2>
              <p className="mt-4 text-xl text-primary">{featuredProduct.tagline}</p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {featuredProduct.description}
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {featuredProduct.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-white/85"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <MagneticButton
                  href={featuredProduct.ctaHref}
                  className="bg-primary text-primary-foreground shadow-[0_0_35px_rgba(56,210,107,0.28)] hover:bg-[#2fbf5e]"
                >
                  {featuredProduct.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-[20px] p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-muted">
                  AI Providers
                </p>
                <div className="mt-6 grid gap-3">
                  {[
                    { name: "OpenAI", icon: RiOpenaiFill },
                    { name: "Gemini", icon: SiGoogle },
                    { name: "Grok", icon: Sparkles },
                    { name: "WordPress.org", icon: FaWordpress },
                  ].map((provider, index) => (
                    <motion.div
                      key={provider.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.08 }}
                      className="flex items-center justify-between rounded-[14px] border border-white/8 bg-secondary/80 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <provider.icon className="h-5 w-5 text-primary" />
                        <span className="text-sm text-white">{provider.name}</span>
                      </div>
                      <span className="text-xs text-primary">Supported</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
