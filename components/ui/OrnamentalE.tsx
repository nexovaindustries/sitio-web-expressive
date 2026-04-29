"use client";

import Image from "next/image";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        width: "0.75em",
        verticalAlign: "top",
        zIndex: 0,
      }}
    >
      <Image
        src="/ornamental-e-transparent.png"
        alt="E"
        width={1102}
        height={604}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "0.9em",
          width: "1.64em",
          filter: "brightness(0) invert(1)",
        }}
        priority
      />
    </span>
  );
}
