"use client";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block font-playfair ${className}`}>
      E
      {/*
        Voluta calligráfica:
        - Sale de la esquina inferior-izquierda de la E
        - Baja, da un loop hacia la izquierda
        - Se extiende en arco largo hacia la derecha hasta debajo de la "r"
      */}
      <svg
        aria-hidden="true"
        viewBox="0 0 280 140"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "2.5em",
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        <path d="M 5,98 C -15,108 -25,120 -10,130 C 2,140 25,136 255,120" />
      </svg>
    </span>
  );
}
