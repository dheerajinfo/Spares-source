import React from "react";
import { cn } from "../../utils/cn";

function TimelineMeta({ children, className = "" }) {
  return (
  <span className={cn("text-sm", className)}>{children}</span>
  )
}

export default TimelineMeta;
