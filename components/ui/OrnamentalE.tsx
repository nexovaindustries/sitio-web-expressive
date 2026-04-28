"use client";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-pinyon ${className}`}
      style={{
        display: "inline-block",
        transform: "rotate(-8deg)",
        WebkitTextStroke: "1.5px currentColor",
        marginRight: "-0.05em",
        paddingRight: "0.05em",
      }}
    >
      E
    </span>
  );
}
