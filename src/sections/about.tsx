"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Gauge,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";
import { aboutCards, aboutIntro } from "@/data/about";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/effects/reveal";

const icons = {
  solver: BrainCircuit,
  performance: Gauge,
  code: Code2,
  business: BriefcaseBusiness,
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-pad container-premium">
        <SectionHeading
          eyebrow={aboutIntro.eyebrow}
          title={aboutIntro.title}
          description={aboutIntro.paragraphs[0]}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {aboutIntro.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-[16px] p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">
                Focus
              </p>
              <p className="mt-4 font-heading text-2xl text-white md:text-3xl">
                Premium interfaces. Reliable systems. Real business outcomes.
              </p>
              <p className="mt-4 text-muted">
                From marketing sites to SaaS platforms, I design and ship software
                that looks refined and runs with intent.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {aboutCards.map((card, index) => {
            const Icon = icons[card.icon];
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group rounded-[16px] border border-white/8 bg-card p-6 transition hover:border-primary/30 hover:shadow-[0_0_40px_rgba(56,210,107,0.12)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-xl text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
