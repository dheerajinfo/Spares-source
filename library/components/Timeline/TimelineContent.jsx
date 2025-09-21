import React from "react";
import { cn } from "../../utils/cn";

function TimelineContent({ children, className = "" }) {
  return (
    <div className={cn("flex flex-col", className)}>
      {children}
    </div>
  );
}

export default TimelineContent;
