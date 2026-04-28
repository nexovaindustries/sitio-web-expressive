"use client";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-pinyon ${className}`}
      style={{
        display: "inline-block",
        transform: "skewX(-12deg)",
        WebkitTextStroke: "0.5px currentColor",
        marginRight: "0.2em",
      }}
    >
      E
    </span>
  );
}
