"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState<"glow" | "fade">("glow");

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // After 1.8s start fade out
    const fadeTimer = setTimeout(() => setPhase("fade"), 1800);
    // Remove preloader after fade completes
    const removeTimer = setTimeout(() => setLoading(false), 2400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      style={{
        opacity: phase === "fade" ? 0 : 1,
        transition: "opacity 0.6s ease-out",
      }}
    >
      {/* LED horizontal glow strip behind the logo */}
      <div className="relative flex flex-col items-center">

        {/* Top LED strip */}
        <div
          className="w-48 h-px mb-8"
          style={{
            background: "linear-gradient(to right, transparent, #BF953F, #FCF6BA, #D4AF37, #FCF6BA, #BF953F, transparent)",
            boxShadow: "0 0 12px 4px rgba(212,175,55,0.6), 0 0 30px 8px rgba(212,175,55,0.25)",
            animation: "ledPulse 1.8s ease-in-out infinite",
          }}
        />

        {/* Logo text with LED glow effect */}
        <div className="relative">
          {/* Glow layer behind text */}
          <p
            className="font-playfair text-4xl tracking-[0.35em] uppercase font-light absolute inset-0 flex items-center justify-center select-none"
            style={{
              color: "#D4AF37",
              filter: "blur(12px)",
              opacity: 0.7,
              animation: "ledPulse 1.8s ease-in-out infinite",
            }}
          >
            Expressive
          </p>
          {/* Crisp text on top */}
          <p
            className="font-playfair text-4xl tracking-[0.35em] uppercase font-light relative"
            style={{
              background: "linear-gradient(135deg, #BF953F 0%, #FCF6BA 40%, #D4AF37 60%, #AA771C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "ledPulse 1.8s ease-in-out infinite",
            }}
          >
            Expressive
          </p>
        </div>

        {/* Bottom LED strip */}
        <div
          className="w-48 h-px mt-8"
          style={{
            background: "linear-gradient(to right, transparent, #BF953F, #FCF6BA, #D4AF37, #FCF6BA, #BF953F, transparent)",
            boxShadow: "0 0 12px 4px rgba(212,175,55,0.6), 0 0 30px 8px rgba(212,175,55,0.25)",
            animation: "ledPulse 1.8s ease-in-out infinite",
          }}
        />

        {/* Subtitle */}
        <p
          className="mt-6 font-montserrat text-[9px] tracking-[0.5em] uppercase text-[#D4AF37]/60"
          style={{ animation: "ledPulse 1.8s ease-in-out infinite" }}
        >
          Estética Facial &amp; Corporal
        </p>
      </div>

      <style>{`
        @keyframes ledPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    
    const interactables = document.querySelectorAll("a, button, [data-cursor]");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[10000] hidden md:block transition-transform duration-100 ease-out"
      style={{ 
        transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0) scale(${isHovering ? 1.5 : 1})` 
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BF953F" />
            <stop offset="25%" stopColor="#FCF6BA" />
            <stop offset="50%" stopColor="#B38728" />
            <stop offset="75%" stopColor="#FBF5B7" />
            <stop offset="100%" stopColor="#AA771C" />
          </linearGradient>
        </defs>
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="url(#goldGradient)"/>
      </svg>
    </div>
  );
}
