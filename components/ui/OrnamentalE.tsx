"use client";

import Image from "next/image";

export default function OrnamentalE({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        verticalAlign: "top",
        position: "relative",
        width: "2.4em",
        height: "1.2em",
        marginRight: "-1.75em",
        zIndex: 0,
      }}
    >
      <Image
        src="/ornamental-e-transparent.png"
        alt="E"
        width={1102}
        height={604}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "left top",
        }}
        priority
      />
    </span>
  );
}
