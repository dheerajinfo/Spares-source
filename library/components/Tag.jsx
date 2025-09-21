import React from "react";
import { cn } from "../utils/cn";

function Tag({ 
  children,
  className = ""
}) {
  return (
    <p
      className={cn("px-2 py-1 flex items-center justify-center gap-2 rounded", className)}
    >
      {children}
    </p>
  );
}
export default Tag;
