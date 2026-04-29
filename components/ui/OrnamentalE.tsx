"use client";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-pinyon ${className}`}
      style={{
        display: "inline-block",
        transform: "rotate(-18deg)",
        transformOrigin: "bottom center",
        marginRight: "0.1em",
      }}
    >
      E
    </span>
  );
}
