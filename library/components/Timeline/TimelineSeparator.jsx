import React from "react";
import { cn } from "../../utils/cn";

function TimelineSeparator({ children, className = "" }) {
  return (
    <div className={cn("flex flex-col items-center mr-4", className)}>
      {children}
    </div>
  );
}

export default TimelineSeparator;
