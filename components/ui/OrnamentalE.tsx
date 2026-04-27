"use client";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block font-playfair ${className}`}>
      E
      {/* Doble voluta calligráfica en la base de la E, igual al logo */}
      <svg
        aria-hidden="true"
        viewBox="-15 -2 85 52"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
        style={{
          position: "absolute",
          left: "-0.05em",
          top: "55%",
          height: "48%",
          width: "0.75em",
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        {/* Primer arco: sale de la base de la E, curva hacia la izquierda */}
        <path d="M 15,0 C 5,3 -8,8 -10,18 C -12,26 -3,30 10,28" />
        {/* Segundo arco: continúa desde el extremo izquierdo, curva hacia la derecha */}
        <path d="M 0,24 C -6,32 0,44 12,48 C 28,52 50,46 68,36" />
      </svg>
    </span>
  );
}
