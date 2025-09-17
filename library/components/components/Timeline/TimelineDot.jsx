import React from "react";

function TimelineDot({ variant = "filled", className = "", size = "12px" }) {
  const base = "rounded-full border-2 flex-shrink-0";
  const styles =
    variant === "filled"
      ? "bg-black border-black"
      : "bg-white border-black";

  return (
    <div
      className={`${base} ${styles} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export default TimelineDot;
