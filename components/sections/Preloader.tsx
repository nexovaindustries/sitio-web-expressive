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

        <div className="relative w-32 h-32 mb-6">
          {/* Dim background logo */}
          <img
            src="/loader.png"
            alt="Expressive Logo"
            className="absolute inset-0 w-full h-full object-contain opacity-10 blur-[1px]"
          />
          {/* Illuminated logo that fills from bottom to top */}
          <img
            src="/loader.png"
            alt="Expressive Logo"
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              animation: "fillUp 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
              filter: "drop-shadow(0 0 20px rgba(212,175,55,0.4))",
            }}
          />
        </div>

        {/* Subtitle */}
        <p
          className="font-montserrat text-[9px] tracking-[0.5em] uppercase text-[#D4AF37]/80"
          style={{ animation: "fadeIn 1s ease-in-out forwards 0.5s", opacity: 0 }}
        >
          Estética Facial &amp; Corporal
        </p>
      </div>

      <style>{`
        @keyframes fillUp {
          0% {
            clip-path: inset(100% -20% -20% -20%);
            opacity: 0.8;
          }
          100% {
            clip-path: inset(-20% -20% -20% -20%);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
