"use client";

import { motion } from "framer-motion";
import { experiences, timeline } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/effects/reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="section-pad container-premium">
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          description="A path shaped by shipping real products — freelance ownership, production systems, and continuous craft."
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            {experiences.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.08}>
                <article className="rounded-[16px] border border-white/8 bg-card p-6 transition hover:-translate-y-1 hover:border-primary/30">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-xl text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm text-primary">{item.company}</p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm text-white/80"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="relative rounded-[16px] border border-white/8 bg-secondary/70 p-6 md:p-8">
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Timeline
              </p>
              <div className="relative space-y-8 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-px before:bg-white/10">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative pl-10"
                  >
                    <span
                      className={`absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border ${
                        item.current
                          ? "border-primary bg-primary/20"
                          : "border-white/15 bg-card"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          item.current ? "bg-primary" : "bg-white/40"
                        }`}
                      />
                    </span>
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="font-heading text-lg text-white">
                        {item.title}
                      </h4>
                      <span className="text-xs text-muted">{item.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-primary">{item.subtitle}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
