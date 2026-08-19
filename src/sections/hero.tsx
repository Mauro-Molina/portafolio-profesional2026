"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { heroBadges, siteConfig, socialLinks, typingRoles } from "@/data/site";
import { TypingText } from "@/components/shared/typing-text";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { SocialOrbs } from "@/components/layout/social-orbs";
import { withBasePath } from "@/lib/paths";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-20 md:pt-32"
    >
      <div className="section-pad container-premium grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-heading text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl"
          >
            MAURO
            <br />
            <span className="text-primary">MOLINA MAZON</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 space-y-3"
          >
            <p className="text-xl text-white md:text-2xl">{siteConfig.title}</p>
            <p className="text-lg text-muted md:text-xl">
              <TypingText words={typingRoles} />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            I craft premium web products with Laravel, React, Vue, WordPress and modern
            AI tooling — experiences that feel inevitable, perform under pressure,
            and convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton
              href="#projects"
              className="bg-primary text-primary-foreground shadow-[0_0_30px_rgba(56,210,107,0.28)] hover:bg-[#2fbf5e]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href={siteConfig.cvUrl}
              download="Curriculum-Profesional-Mauro-Molina.pdf"
              className="border border-white/15 bg-secondary text-white hover:border-white/30 hover:bg-card"
            >
              <Download className="h-4 w-4" />
              Download CV
            </MagneticButton>
          </motion.div>

          
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[90px] animate-pulse-glow sm:h-[420px] sm:w-[420px]" />
            <div className="absolute left-[12%] top-[18%] h-28 w-28 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute bottom-[18%] right-[10%] h-32 w-32 rounded-full bg-primary/20 blur-3xl" />

            {heroBadges.map((badge, index) => {
              const positions = [
                "left-0 top-[18%]",
                "right-0 top-[12%]",
                "left-2 top-[48%]",
                "right-2 top-[42%]",
                "left-8 bottom-[22%]",
                "right-6 bottom-[18%]",
                "left-1/2 bottom-[10%] -translate-x-1/2",
              ];
              return (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.07 }}
                  className={`absolute z-20 rounded-full border border-white/10 bg-[#111111]/85 px-3 py-1.5 text-xs text-white backdrop-blur-xl ${positions[index]} animate-float`}
                  style={{ animationDelay: `${index * 0.35}s` }}
                >
                  {badge}
                </motion.span>
              );
            })}

            <div className="relative z-10 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-secondary">
                <Image
                  src={withBasePath("/images/mauro-molina.png")}
                  alt={`${siteConfig.fullName} portrait`}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 90vw, 480px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <SocialOrbs />
        </motion.div>
      </div>
    </section>
  );
}

