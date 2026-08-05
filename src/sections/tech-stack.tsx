"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/stack";
import { SectionHeading } from "@/components/ui/section-heading";

export function TechStackSection() {
  return (
    <section id="stack" className="relative py-24 md:py-32">
      <div className="section-pad container-premium">
        <SectionHeading
          eyebrow="Capabilities"
          title="Tech Stack"
          description="Interactive toolkit grouped by discipline — the systems I use to design, build, and ship."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: categoryIndex * 0.06 }}
              className="rounded-[16px] border border-white/8 bg-card p-6"
            >
              <h3 className="font-heading text-xl text-white">{category.name}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item, index) => (
                  <motion.button
                    key={item}
                    type="button"
                    data-cursor="pointer"
                    whileHover={{ y: -4, scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                    className="rounded-full border border-white/10 bg-secondary px-3.5 py-2 text-sm text-white/85 transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    style={{ transitionDelay: `${index * 10}ms` }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
