"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/use-magnetic";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[16px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[#2fbf5e] shadow-[0_0_30px_rgba(56,210,107,0.25)]",
        secondary:
          "bg-secondary text-foreground border border-white/10 hover:bg-card hover:border-white/20",
        outline:
          "border border-primary/50 bg-transparent text-primary hover:bg-primary/10",
        ghost: "hover:bg-white/5 text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 rounded-[14px] px-4",
        lg: "h-14 rounded-[16px] px-8 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  magnetic?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      magnetic = false,
      children,
      onClick,
      disabled,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const magneticProps = useMagnetic(0.28);

    if (magnetic && !asChild) {
      return (
        <motion.button
          ref={(node) => {
            magneticProps.ref.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
          type={type}
          disabled={disabled}
          onClick={onClick}
          style={{ x: magneticProps.x, y: magneticProps.y }}
          onMouseMove={magneticProps.handleMouseMove}
          onMouseLeave={magneticProps.handleMouseLeave}
          className={cn(buttonVariants({ variant, size, className }))}
          aria-label={props["aria-label"]}
        >
          {children}
        </motion.button>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        type={type}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
