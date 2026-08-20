"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LayoutGroup, motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const contactOrbs = [
  { icon: MapPin, label: "Cuba", detail: siteConfig.location },
  {
    icon: Phone,
    label: "Phone",
    detail: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    detail: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    detail: "LinkedIn",
    href: siteConfig.linkedin,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    detail: "GitHub",
    href: siteConfig.github,
  },
] as const;

const spring = {
  type: "spring" as const,
  stiffness: 320,
  damping: 24,
  mass: 0.7,
};

export function SocialOrbs() {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [floating, setFloating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = anchorRef.current;
    if (!el) return;

    const desktop = window.matchMedia("(min-width: 768px)");

    const observer = new IntersectionObserver(
      ([entry]) => setFloating(desktop.matches && !entry.isIntersecting),
      { threshold: 0.2, rootMargin: "-96px 0px 0px 0px" },
    );

    observer.observe(el);

    const onViewport = () => {
      if (!desktop.matches) setFloating(false);
    };
    desktop.addEventListener("change", onViewport);

    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", onViewport);
    };
  }, []);

  return (
    <LayoutGroup id="social-orbs">
      <div
        ref={anchorRef}
        className={cn(
          "relative z-20 mt-6 flex min-h-[88px] flex-wrap items-start justify-center gap-3 sm:gap-4",
          floating && "pointer-events-none",
        )}
      >
        {!floating
          ? contactOrbs.map((orb, index) => (
              <ContactOrb
                key={orb.label}
                {...orb}
                index={index}
                floating={false}
              />
            ))
          : null}
      </div>

      {mounted && floating
        ? createPortal(
            <motion.aside
              aria-label="Social links"
              className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 md:flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="pointer-events-auto relative flex flex-col items-center gap-2 rounded-full border border-primary/25 bg-[#0a0a0a]/80 p-2 shadow-[0_0_50px_rgba(56,210,107,0.22)] backdrop-blur-2xl"
                initial={{ x: 72, scale: 0.72, rotate: 8 }}
                animate={{ x: 0, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                <motion.span
                  className="pointer-events-none absolute inset-y-4 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/70 to-transparent"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ delay: 0.18, duration: 0.45 }}
                />
                <motion.span
                  className="pointer-events-none absolute -inset-6 rounded-full bg-primary/20 blur-2xl"
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 0.35, scale: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                />
                {contactOrbs.map((orb, index) => (
                  <ContactOrb
                    key={orb.label}
                    {...orb}
                    index={index}
                    floating
                  />
                ))}
              </motion.div>
            </motion.aside>,
            document.body,
          )
        : null}
    </LayoutGroup>
  );
}

function ContactOrb({
  icon: Icon,
  label,
  detail,
  href,
  index,
  floating,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  detail: string;
  href?: string;
  index: number;
  floating: boolean;
}) {
  const className = cn(
    "group relative flex flex-col items-center",
    floating ? "gap-0" : "gap-2",
  );

  const inner = (
    <>
      <span className="relative">
        {floating ? (
          <motion.span
            className="absolute inset-0 rounded-full border border-primary"
            initial={{ scale: 1, opacity: 0.85 }}
            animate={{ scale: 2.1, opacity: 0 }}
            transition={{ duration: 0.65, delay: index * 0.07 }}
          />
        ) : null}
        <motion.span
          layout="position"
          className="glass relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-primary shadow-[0_0_24px_rgba(56,210,107,0.12)] transition group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground"
          initial={floating ? { scale: 0.72, rotate: 16 } : false}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 14,
            delay: index * 0.06,
          }}
        >
          <Icon className="h-4 w-4" />
        </motion.span>
      </span>

      <motion.span
        className="overflow-hidden text-[10px] font-medium uppercase tracking-[0.14em] text-white/65"
        initial={false}
        animate={{
          opacity: floating ? 0 : 1,
          height: floating ? 0 : "auto",
          y: floating ? 8 : 0,
        }}
        transition={{ duration: 0.28, delay: index * 0.04 }}
      >
        {label}
      </motion.span>

      {floating ? (
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#111111]/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 opacity-0 shadow-lg backdrop-blur-xl transition group-hover:opacity-100">
          {label}
        </span>
      ) : null}
    </>
  );

  const motionProps = {
    layoutId: `social-orb-${label}`,
    transition: { layout: { ...spring, delay: index * 0.05 } },
    className,
    "aria-label": detail,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        {...motionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return <motion.div {...motionProps}>{inner}</motion.div>;
}
