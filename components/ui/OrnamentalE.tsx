"use client";

// PNG 1102×604. E body = top 51% / left 37% of image. Swash = bottom 40%, sweeping right.
// Height 1.3em → E body cap ≈ 0.67em, matching Playfair Display's cap height.
// top:0.08em nudges the image down so the E body aligns with the text cap line,
// and the swash falls entirely below the baseline.
export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        width: "0.9em",
        height: "0.9em",
        verticalAlign: "top",
        overflow: "visible",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "0.08em",
          left: 0,
          height: "1.3em",
          width: `${1.3 * (1102 / 604)}em`,
          backgroundImage: "url('/ornamental-e-transparent.png')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0) invert(1)",
          zIndex: -1,
        }}
      />
    </span>
  );
}
