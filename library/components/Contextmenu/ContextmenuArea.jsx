import React from "react";
import { cn } from "../../utils/cn";

function ContextmenuArea({ children, className = "", onContextMenu }) {
  return (
    <div
      onContextMenu={onContextMenu}
      className={cn("relative", className)}
    >
      {children}
    </div>
  );
}

export default ContextmenuArea;
