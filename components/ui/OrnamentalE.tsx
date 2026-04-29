"use client";

import Image from "next/image";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        verticalAlign: "baseline",
        position: "relative",
        top: "0.4em",
        width: "2.75em",
        height: "1.5em",
        marginRight: "-2.1em",
        marginBottom: "-0.5em",
        zIndex: 0,
      }}
    >
      <Image
        src="/ornamental-e-transparent.png"
        alt="E"
        width={200}
        height={200}
        className="w-full h-full object-contain"
        style={{
          filter: "brightness(1.15)",
        }}
        priority
      />
    </span>
  );
}
