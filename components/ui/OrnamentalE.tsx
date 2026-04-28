"use client";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block font-playfair ${className}`}>
      E
      <svg
        aria-hidden="true"
        viewBox="-35 -5 350 65"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
        style={{
          position: "absolute",
          left: 0,
          top: "80%",
          height: "50%",
          width: "3.2em",
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        {/* Loop circular (centro en -8,28 radio 22) — counterclockwise */}
        <path d="M 14,28 C 14,16 4,6 -8,6 C -20,6 -30,16 -30,28 C -30,40 -20,50 -8,50 C 4,50 14,40 14,28" />
        {/* Entrada desde la esquina inf-izq de la E + cola larga hasta la R */}
        <path d="M 0,0 C 5,10 10,20 14,28 C 60,22 150,16 280,8" />
      </svg>
    </span>
  );
}
