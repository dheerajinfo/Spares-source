import React from "react";
import { cn } from "../../utils/cn";

function Timeline({ children, className = "" }) {
  return (
    <div className={cn("flex flex-col relative", className)}>
      {children}
    </div>
  );
}

export default Timeline;
