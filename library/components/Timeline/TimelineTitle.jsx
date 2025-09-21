import React from "react";
import { cn } from "../../utils/cn";

function TimelineTitle({ children, className = "" }) {
  return (
  <h3 className={cn("font-semibold text-sm mb-1", className)}>      {children}
  </h3>
)
}

export default TimelineTitle;
