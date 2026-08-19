"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/8 bg-[#050505]/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="section-pad container-premium flex h-[72px] items-center justify-between py-4">
        <Link href="#home" className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[14px] bg-primary font-heading text-lg font-bold text-primary-foreground shadow-[0_0_24px_rgba(56,210,107,0.35)] transition group-hover:scale-[1.03]">
            M
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-white md:block">
            {siteConfig.fullName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm text-muted transition hover:text-white",
                active === item.href && "text-white",
              )}
            >
              {item.label}
              {active === item.href ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-primary"
                />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="icon"
            variant="secondary"
            className="hidden sm:inline-flex"
            aria-label="Download CV"
          >
            <a
              href={siteConfig.cvUrl}
              download="Curriculum-Profesional-Mauro-Molina.pdf"
            >
              <Download className="h-4 w-4" />
            </a>
          </Button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/10 bg-secondary md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-b border-white/8 bg-[#050505]/95 px-5 py-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-[14px] px-4 py-3 text-base text-muted transition hover:bg-white/5 hover:text-white",
                    active === item.href && "bg-primary/10 text-primary",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
