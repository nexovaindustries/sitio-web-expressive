"use client";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block font-playfair ${className}`}>
      E
      {/*
        Voluta calligráfica:
        - Sale de la esquina inferior-izquierda de la E
        - Hace un loop pronunciado hacia abajo-izquierda
        - Se extiende en arco largo hasta debajo de la "r"
      */}
      <svg
        aria-hidden="true"
        viewBox="0 0 360 150"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "3.2em",
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        <path d="M 5,98 C -18,110 -32,126 -12,136 C 6,146 38,140 340,124" />
      </svg>
    </span>
  );
}
