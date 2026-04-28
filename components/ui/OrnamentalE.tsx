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
        width: "1.25em",
        height: "1.25em",
        marginRight: "-0.12em",
        marginBottom: "-0.25em",
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
