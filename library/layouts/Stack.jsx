import React from "react";
import { cn } from "../utils/cn";

function Stack({ children, className = "" }) {
  return (
    <div className={cn("flex flex-col", className)}>
      {children}
    </div>
  );
}

export default Stack;
