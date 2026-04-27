"use client";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block font-cinzel ${className}`}>
      E
      <svg
        aria-hidden="true"
        viewBox="0 0 25 100"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        style={{
          position: "absolute",
          left: "-0.08em",
          top: 0,
          height: "100%",
          width: "0.22em",
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        {/* Curl superior: sale del trazo superior de la E, curva arriba-izquierda y regresa */}
        <path d="M 22,10 C 12,3 2,-3 0,6 C -2,13 12,16 22,14" />
        {/* Curl inferior: espejo, sale abajo-izquierda y regresa */}
        <path d="M 22,90 C 12,97 2,103 0,94 C -2,87 12,84 22,86" />
      </svg>
    </span>
  );
}
