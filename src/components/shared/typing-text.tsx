"use client";

import { useEffect, useState } from "react";

type TypingTextProps = {
  words: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
};

export function TypingText({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseMs = 1400,
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const timeout = window.setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setDeleting(true);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next.length === 0) {
            setDeleting(false);
            setIndex((value) => (value + 1) % words.length);
          }
        }
      },
      deleting
        ? text.length === current.length
          ? pauseMs
          : deletingSpeed
        : typingSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className="inline-flex min-h-[1.2em] items-center text-primary">
      {text}
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-primary" />
    </span>
  );
}
