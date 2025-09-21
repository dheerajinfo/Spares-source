import React from "react";
import { cn } from "../utils/cn";

function Frame({ src, className = "", ratio = 1 }) {
  return (
    <img src={src}
      className={cn("bg-black flex items-center justify-center overflow-clip", className)}
      style={{ aspectRatio: ratio }}
    />
      
  );
}

export default Frame;
