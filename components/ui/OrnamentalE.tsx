"use client";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        width: "0.75em",
        height: "0.9em",
        verticalAlign: "top",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "1.64em",
          height: "0.9em",
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
