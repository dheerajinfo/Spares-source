import React from "react";
import { cn } from "../../utils/cn";

function TimelineLine({ className = "" }) {
  return (
    <div className={cn("w-[1px]", className)} />
  );
}

export default TimelineLine;
