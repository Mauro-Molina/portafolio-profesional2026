"use client";

import { GraduationCap } from "lucide-react";
import { education } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/effects/reveal";

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="section-pad container-premium">
        <SectionHeading
          eyebrow="Learning"
          title="Education"
          description="Foundations that support how I think about systems, products, and craft."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <article className="h-full rounded-[16px] border border-white/8 bg-secondary/80 p-6 transition hover:-translate-y-1 hover:border-primary/30">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {item.period}
                </p>
                <h3 className="mt-2 font-heading text-xl text-white">
                  {item.institution}
                </h3>
                <p className="mt-2 text-sm text-primary">{item.program}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
