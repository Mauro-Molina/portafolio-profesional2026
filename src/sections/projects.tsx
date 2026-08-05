"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/shared/magnetic-button";
import type { Project } from "@/types";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-pad container-premium">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that feel premium"
          description="Large-format case studies — not tiny cards. Each build is designed to demonstrate craft, clarity, and production readiness."
        />
      </div>

      <div className="space-y-8 md:space-y-16">
        {projects.map((project, index) => (
          <ProjectShowcase
            key={project.id}
            project={project}
            reverse={index % 2 === 1}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectShowcase({
  project,
  reverse,
  index,
}: {
  project: Project;
  reverse: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.5]);

  return (
    <motion.article
      ref={ref}
      style={{ opacity }}
      className="section-pad container-premium"
    >
      <div
        className={`grid min-h-[70vh] items-center gap-8 rounded-[24px] border border-white/8 bg-gradient-to-br from-card/90 to-secondary/60 p-5 md:gap-12 md:p-10 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div style={{ y: imageY }} className="relative">
          <div className="absolute -inset-6 rounded-[28px] bg-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#0a0a0a]">
            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
          </div>
        </motion.div>

        <div className="relative z-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge>{project.category}</Badge>
            <span className="text-sm text-muted">{project.year}</span>
          </div>

          <h3 className="font-heading text-3xl font-semibold text-white md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {project.longDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-primary-foreground hover:bg-[#2fbf5e]"
            >
              Visit Website
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            {project.github ? (
              <MagneticButton
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="border border-white/15 bg-secondary text-white hover:border-white/30"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </MagneticButton>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
