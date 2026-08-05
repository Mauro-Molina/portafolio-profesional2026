"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { siteConfig } from "@/data/site";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setState("success");
      event.currentTarget.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Failed to send message");
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section-pad container-premium">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something premium"
          description="Share a bit about your project. This form is ready for Resend — drop in your API key and go live."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[16px] border border-white/8 bg-card p-6 md:p-8"
          >
            <h3 className="font-heading text-2xl text-white">
              Direct channels
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Prefer email or LinkedIn? Reach out anytime — I usually respond
              within 24–48 hours.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block rounded-[14px] border border-white/8 bg-secondary px-4 py-3 text-white transition hover:border-primary/30"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[14px] border border-white/8 bg-secondary px-4 py-3 text-white transition hover:border-primary/30"
              >
                LinkedIn Profile
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[14px] border border-white/8 bg-secondary px-4 py-3 text-white transition hover:border-primary/30"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[16px] border border-white/8 bg-secondary/70 p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-muted">
                Name
                <Input
                  name="name"
                  required
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="space-y-2 text-sm text-muted">
                Email
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </label>
            </div>

            <label className="mt-4 block space-y-2 text-sm text-muted">
              Message
              <Textarea
                name="message"
                required
                placeholder="Tell me about the product, timeline, and goals..."
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <MagneticButton
                type="submit"
                disabled={state === "loading"}
                className="bg-primary text-primary-foreground hover:bg-[#2fbf5e]"
              >
                {state === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : state === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </MagneticButton>

              {state === "success" ? (
                <p className="text-sm text-primary">
                  Message received. I&apos;ll get back soon.
                </p>
              ) : null}
              {state === "error" ? (
                <p className="text-sm text-red-400">{error}</p>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
