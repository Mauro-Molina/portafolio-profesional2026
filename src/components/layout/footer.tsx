import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { siteConfig, socialLinks } from "@/data/site";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: MdEmail,
  phone: MdEmail,
};

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#050505]">
      <div className="section-pad container-premium flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div>
          <p className="font-heading text-lg font-semibold text-white">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            Building premium software experiences.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-secondary text-muted transition hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
