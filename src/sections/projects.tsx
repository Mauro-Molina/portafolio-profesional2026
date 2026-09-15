"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  Pause,
  Play,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/shared/magnetic-button";
import type { Project } from "@/types";

const AUTO_MS = 6500;

function shuffleProjects(items: Project[]) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function ProjectsSection() {
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [homeProjects, setHomeProjects] = useState<Project[]>([]);
  const [archiveProjects, setArchiveProjects] = useState(projects);

  useEffect(() => {
    setHomeProjects(shuffleProjects(projects).slice(0, 4));
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("portfolio:modal", { detail: { open: archiveOpen } }),
    );
    document.body.style.overflow = archiveOpen ? "hidden" : "";

    if (!archiveOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setArchiveOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [archiveOpen]);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-pad container-premium">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that feel premium"
          description="A rotating selection from the catalog. The rest lives in the archive."
        />

        <div className="grid min-h-[32rem] gap-6 md:grid-cols-2 md:gap-8">
          {homeProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <motion.div
            className="relative"
            animate={{ y: -6 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.7,
              ease: "easeInOut",
            }}
          >
            <span className="pointer-events-none absolute -inset-5 rounded-full bg-primary/35 blur-2xl animate-pulse-glow" />
            <span className="pointer-events-none absolute -inset-1 rounded-[28px] border-2 border-primary/70 animate-cta-ring" />
            <span className="pointer-events-none absolute -inset-3 rounded-[32px] border border-primary/30 animate-cta-ring [animation-delay:0.7s]" />

            <MagneticButton
              onClick={() => {
                setArchiveProjects(shuffleProjects(projects));
                setArchiveOpen(true);
              }}
              className="relative z-10 overflow-hidden bg-primary px-10 py-5 text-base font-semibold text-primary-foreground shadow-[0_0_50px_rgba(56,210,107,0.5)] hover:bg-[#2fbf5e] md:px-12 md:py-6 md:text-lg"
            >
              <span className="pointer-events-none absolute inset-0 overflow-hidden">
                <span className="absolute inset-y-0 w-1/3 bg-white/25 blur-md animate-cta-shimmer" />
              </span>
              <Grid3x3 className="relative h-5 w-5 md:h-6 md:w-6" />
              <span className="relative">View more projects</span>
              <ArrowUpRight className="relative h-5 w-5 md:h-6 md:w-6" />
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {archiveOpen ? (
          <ProjectsArchive
            onClose={() => setArchiveOpen(false)}
            projects={archiveProjects}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function ProjectsArchive({
  onClose,
  projects: archiveProjects,
}: {
  onClose: () => void;
  projects: Project[];
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (next: number, dir: number) => {
      const total = archiveProjects.length;
      setDirection(dir);
      setIndex(((next % total) + total) % total);
    },
    [archiveProjects.length],
  );

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      goTo(index + 1, 1);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [index, paused, goTo]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goTo(index + 1, 1);
      if (event.key === "ArrowLeft") goTo(index - 1, -1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, index]);

  const project = archiveProjects[index];

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center px-3 py-3 sm:px-8 sm:py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
    >
      <motion.button
        type="button"
        aria-label="Close projects archive"
        className="absolute inset-0 bg-[#050505]/80 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="projects-archive-title"
        data-lenis-prevent
        data-lenis-prevent-touch
        data-lenis-prevent-wheel
        className="relative z-10 flex h-[min(92dvh,100%)] min-h-0 w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-primary/20 bg-gradient-to-br from-[#0d1a12] via-card to-[#050505] shadow-[0_0_80px_rgba(56,210,107,0.18)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-[90px]" />

        <div className="relative z-10 flex shrink-0 items-center justify-between gap-3 border-b border-white/8 px-4 py-3 md:px-8 md:py-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary md:text-xs">
              Archive
            </p>
            <h3
              id="projects-archive-title"
              className="mt-0.5 font-heading text-lg text-white md:mt-1 md:text-2xl"
            >
              All projects
            </h3>
            <p className="text-sm text-muted">
              {index + 1} / {archiveProjects.length}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Play carousel" : "Pause carousel"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-secondary text-white transition hover:border-primary/40 hover:text-primary"
            >
              {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-secondary text-white transition hover:border-primary/40 hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative h-1 shrink-0 overflow-hidden bg-white/5">
          <motion.div
            key={`${index}-${paused}`}
            className="h-full origin-left bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: paused ? 0 : 1 }}
            transition={
              paused
                ? { duration: 0 }
                : { duration: AUTO_MS / 1000, ease: "linear" }
            }
          />
        </div>

        <div className="relative min-h-0 flex-1">
          <div
            data-lenis-prevent
            data-lenis-prevent-touch
            className="absolute inset-0 overflow-y-scroll overscroll-contain touch-pan-y [-webkit-overflow-scrolling:touch]"
            onWheel={(event) => event.stopPropagation()}
            onTouchMove={(event) => event.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="grid gap-0 lg:min-h-full lg:grid-cols-[1.05fr_0.95fr]"
              >
                <div className="relative aspect-[16/10] max-h-[26vh] min-h-[120px] lg:aspect-auto lg:max-h-none lg:min-h-[420px]">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>

                <div className="flex flex-col p-5 pb-10 md:p-8 lg:justify-center lg:p-10">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <Badge>{project.category}</Badge>
                    <span className="text-sm text-muted">{project.year}</span>
                  </div>
                  <h4 className="font-heading text-2xl font-semibold text-white md:text-4xl">
                    {project.title}
                  </h4>
                  <div className="mt-5 flex flex-wrap gap-3">
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
                  <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
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
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <button
            type="button"
            aria-label="Previous project"
            onClick={() => goTo(index - 1, -1)}
            className="absolute left-3 top-[18%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#111111]/80 text-white backdrop-blur-xl transition hover:border-primary/40 hover:text-primary lg:left-4 lg:top-1/2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => goTo(index + 1, 1)}
            className="absolute right-3 top-[18%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#111111]/80 text-white backdrop-blur-xl transition hover:border-primary/40 hover:text-primary lg:right-4 lg:top-1/2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="relative z-10 flex shrink-0 gap-1.5 overflow-x-auto border-t border-white/8 px-4 py-3 md:px-8 md:py-4">
          {archiveProjects.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to ${item.title}`}
              onClick={() => goTo(itemIndex, itemIndex > index ? 1 : -1)}
              className={`h-1.5 shrink-0 rounded-full transition ${
                itemIndex === index
                  ? "w-8 bg-primary"
                  : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay: (index % 2) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col overflow-hidden rounded-[24px] border border-white/8 bg-gradient-to-br from-card/90 to-secondary/60"
    >
      <div className="relative overflow-hidden">
        <div className="absolute -inset-8 bg-primary/10 blur-3xl transition duration-700 group-hover:bg-primary/20" />
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a]">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
            loading={index < 2 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/55 via-transparent to-transparent" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-7">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <Badge>{project.category}</Badge>
          <span className="text-sm text-muted">{project.year}</span>
        </div>

        <h3 className="font-heading text-2xl font-semibold text-white md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
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
    </motion.article>
  );
}
