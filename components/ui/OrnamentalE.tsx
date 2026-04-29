"use client";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        width: "0.6em",
        verticalAlign: "top",
        zIndex: 0,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ornamental-e-transparent.png"
        alt="E"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "0.9em",
          width: "auto",
          filter: "brightness(0) invert(1)",
        }}
      />
    </span>
  );
}
