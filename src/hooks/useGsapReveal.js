import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGsapReveal(selector = ".reveal-section") {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mm = gsap.matchMedia();

    const animate = (start, useBlur) => {
      gsap.utils.toArray(selector).forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 50,
            scale: 0.98,
            ...(useBlur ? { filter: "blur(8px)" } : {}),
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: prefersReduced ? 0.01 : 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start,
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    };

    mm.add("(min-width: 768px)", () => animate("top 80%", !prefersReduced));
    mm.add("(max-width: 767px)", () => animate("top 95%", false));

    return () => mm.revert();
  }, [selector]);
}

export function useHeroAnimation(ref) {
  useEffect(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
      gsap.from(".hero-fade", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.4,
        ease: "power2.out",
      });
    }, ref);

    return () => ctx.revert();
  }, [ref]);
}

export function useStatsCounter(ref, stats) {
  useEffect(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    stats.forEach((stat) => {
      const el = ref.current.querySelector(`[data-stat-id="${stat.id}"]`);
      if (!el) return;

      const counter = { val: 0 };
      gsap.to(counter, {
        val: stat.value,
        duration: prefersReduced ? 0.01 : 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = Math.round(counter.val) + (stat.suffix || "");
        },
      });
    });
  }, [ref, stats]);
}
