export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="font-cinzel">E</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 40 100"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        {/* Curva superior — sale por arriba-izquierda del trazo vertical de la E */}
        <path d="M 3,9 C -6,2 -18,-6 -14,3 C -11,10 -1,15 8,12" />
        {/* Curva inferior — sale por abajo-izquierda, simétrica */}
        <path d="M 3,91 C -6,98 -18,106 -14,97 C -11,90 -1,85 8,88" />
      </svg>
    </span>
  );
}
