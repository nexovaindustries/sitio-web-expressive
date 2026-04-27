"use client";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-block font-cinzel ${className}`}
      style={{ paddingLeft: "0.5em" }}
    >
      {/* SVG con las dos curvas ornamentales */}
      <svg
        aria-hidden="true"
        viewBox="0 0 50 100"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.8"
        style={{
          position: "absolute",
          right: "calc(100% - 0.5em)",
          top: 0,
          height: "100%",
          width: "0.5em",
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        {/* Curva superior: sale del trazo izquierdo de la E hacia arriba-izquierda */}
        <path d="M 50,12 C 32,2 8,-12 2,4 C -3,18 18,30 44,24" />
        {/* Curva inferior: espejo, sale hacia abajo-izquierda */}
        <path d="M 50,88 C 32,98 8,112 2,96 C -3,82 18,70 44,76" />
      </svg>

      E
    </span>
  );
}
