"use client";

import { useEffect, useState } from "react";

import { useRef } from "react";

export function Typewriter({
  text,
  speed = 120,
  className,
  showCursor = true,
}: {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}) {
  const [out, setOut] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setOut("");
    let raf: number | null = null;
    const tick = () => {
      setOut((prev) => {
        if (prev.length < text.length) {
          return prev + text[prev.length];
        }
        return prev;
      });
      raf = window.setTimeout(() => {
        setOut((prev) => {
          if (prev.length < text.length) {
            tick();
          }
          return prev;
        });
      }, speed);
    };
    tick();
    return () => {
      if (raf) window.clearTimeout(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, mounted]);

  if (!mounted) return null;

  return (
    <span className={className} aria-label={text}>
      {out}
      {showCursor ?
        <span
          className="ml-1 inline-block h-6 w-0.5 translate-y-0.5 bg-foreground animate-pulse"
          aria-hidden
        />
      : null}
    </span>
  );
}
