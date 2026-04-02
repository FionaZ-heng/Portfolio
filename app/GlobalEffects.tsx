"use client";
import { useEffect } from "react";

export default function GlobalEffects() {
  useEffect(() => {
    // ── 🐾 PAW TRAIL ──
    let pawCount = 0;
    const PAW = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 100 100">
      <ellipse cx="50" cy="68" rx="22" ry="18" fill="#fda4af" opacity="0.85"/>
      <ellipse cx="25" cy="42" rx="11" ry="13" fill="#fda4af" opacity="0.85"/>
      <ellipse cx="50" cy="36" rx="11" ry="13" fill="#fda4af" opacity="0.85"/>
      <ellipse cx="75" cy="42" rx="11" ry="13" fill="#fda4af" opacity="0.85"/>
      <ellipse cx="15" cy="65" rx="9" ry="11" fill="#fda4af" opacity="0.85"/>
      <ellipse cx="85" cy="65" rx="9" ry="11" fill="#fda4af" opacity="0.85"/>
    </svg>`;

    const onMouseMove = (e: MouseEvent) => {
      pawCount++;
      if (pawCount % 15 !== 0) return; // every 5th move
      const el = document.createElement("div");
      el.innerHTML = PAW;
      const angle = Math.random() * 40 - 20;
      Object.assign(el.style, {
        position: "fixed",
        left: e.clientX - 14 + "px",
        top:  e.clientY - 14 + "px",
        pointerEvents: "none",
        zIndex: "9999",
        transform: `rotate(${angle}deg)`,
        transition: "opacity 0.8s ease",
        opacity: "1",
      });
      document.body.appendChild(el);
      requestAnimationFrame(() => {
        setTimeout(() => { el.style.opacity = "0"; }, 300);
        setTimeout(() => { el.remove(); }, 1100);
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── 📜 SCROLL REVEAL ──
    const style = document.createElement("style");
    style.textContent = `
      .reveal {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.55s ease, transform 0.55s ease;
      }
      .reveal.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    const observe = () => {
      document.querySelectorAll<HTMLElement>(
        "article, section, .proj-card, .interest-card, .photo-card, .currently-card"
      ).forEach((el) => {
        if (!el.classList.contains("reveal")) el.classList.add("reveal");
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const i = [...document.querySelectorAll(".reveal")].indexOf(el);
              setTimeout(() => el.classList.add("visible"), (i % 6) * 80);
              io.unobserve(el);
            }
          });
        },
        { threshold: 0.1 }
      );
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
      return io;
    };

    // slight delay so page has rendered
    const timer = setTimeout(() => { observe(); }, 400);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(timer);
      style.remove();
    };
  }, []);

  return null;
}
