"use client";

// The PNG is 1102×604. The E body occupies roughly the top 55% / left 37% of the image.
// The swash tail lives in the bottom 40%, sweeping right — so we scale the image tall
// enough that the swash falls BELOW the text baseline rather than crossing through it.
export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        // Reserve the width of the E body + loop; xpressive starts right after
        width: "1em",
        // Container height = visible cap height; swash overflows downward
        height: "0.9em",
        verticalAlign: "top",
        overflow: "visible",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          // Scale tall so the swash (bottom 40% of image) falls below the text line
          height: "1.6em",
          width: `${1.6 * (1102 / 604)}em`, // ≈ 2.92em, preserving aspect ratio
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
