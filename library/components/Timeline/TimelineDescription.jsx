import React from "react";
import { cn } from "../../utils/cn";

function TimelineDescription({ children, className = "" }) {
  return (
  <p className={cn("text-xs", className)}>{children}</p>
  );
}

export default TimelineDescription;
