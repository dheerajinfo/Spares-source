import React from "react";
import { cn } from "../../utils/cn";

function TimelineItem({ children, className = "" }) {
  return (
    <div className={cn("flex items-start relative", className)}>
      {children}
    </div>
  );
}

export default TimelineItem;
