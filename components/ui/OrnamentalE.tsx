"use client";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block font-playfair ${className}`}>
      E
      <svg
        aria-hidden="true"
        viewBox="-50 -15 390 90"
        fill="none"
        stroke="#D4AF37"
        strokeLinecap="round"
        strokeWidth="1.5"
        style={{
          position: "absolute",
          left: 0,
          top: "76%",
          height: "68%",
          width: "3.6em",
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        <path d="M 5,2 C -5,2 -30,8 -32,25 C -34,42 -20,55 -5,55 C 10,55 20,45 18,30 C 16,18 8,10 5,2 C 20,-2 80,-8 285,-12" />
      </svg>
    </span>
  );
}
