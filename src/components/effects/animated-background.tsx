"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useMediaQuery } from "@/hooks/use-media-query";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useMousePosition();
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;

    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.00035,
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > 1) particle.vx *= -1;
        if (particle.y < 0 || particle.y > 1) particle.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = "rgba(56, 210, 107, 0.45)";
        ctx.arc(particle.x * width, particle.y * height, particle.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [reduceMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      <div className="animate-pulse-glow absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="animate-pulse-glow absolute -right-24 top-[40%] h-[380px] w-[380px] rounded-full bg-primary/10 blur-[110px] [animation-delay:2s]" />
      <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[100px]" />

      <div
        className="absolute h-[420px] w-[420px] rounded-full opacity-40 blur-[90px] transition-transform duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(56,210,107,0.28) 0%, transparent 70%)",
          transform: `translate(${mouse.x - 210}px, ${mouse.y - 210}px)`,
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
    </div>
  );
}
