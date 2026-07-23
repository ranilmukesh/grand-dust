"use client";

import { useEffect, useRef, useCallback } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale";
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  animation = "reveal",
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    []
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin: "0px 0px -50px 0px",
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [handleIntersect, threshold]);

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div ref={ref} className={`${animation} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
