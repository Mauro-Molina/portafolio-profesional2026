"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  download?: boolean | string;
  target?: string;
  rel?: string;
  disabled?: boolean;
};

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  type = "button",
  download,
  target,
  rel,
  disabled,
}: MagneticButtonProps) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic(0.3);

  const sharedClass = cn(
    "inline-flex items-center justify-center gap-2 rounded-[16px] px-6 py-3 text-sm font-medium transition will-change-transform disabled:pointer-events-none disabled:opacity-60",
    className,
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        download={download}
        target={target}
        rel={rel}
        style={{ x, y }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={sharedClass}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={sharedClass}
    >
      {children}
    </motion.button>
  );
}
