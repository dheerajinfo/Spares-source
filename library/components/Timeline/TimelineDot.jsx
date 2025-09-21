import React from "react";
import { cn } from "../../utils/cn";

function TimelineDot({ className = ""}) {

  return (
    <div className={cn("w-3 h-3 rounded-full", className)}  />
  );
}

export default TimelineDot;
