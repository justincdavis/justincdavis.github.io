import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add stagger delay based on element index within parent
            const parent = entry.target.parentElement;
            if (parent) {
              const siblings = Array.from(parent.querySelectorAll(".fade-up"));
              const idx = siblings.indexOf(entry.target as Element);
              (entry.target as HTMLElement).style.transitionDelay = `${idx * 0.08}s`;
            }
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const elements = el.querySelectorAll(".fade-up");
    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  return ref;
}
