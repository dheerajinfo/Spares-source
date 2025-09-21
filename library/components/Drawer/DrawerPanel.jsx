import React from "react";
import { cn } from "../../utils/cn";


function DrawerPanel({
  className = "",
  onClick,
  icon,
  children,
}) {
  const defaultIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  return (
    <div
      className={cn("w-full h-3/4 fixed bottom-0 right-0 z-50 bg-black transform", className)}
    >
      <div className="flex flex-col gap-2 py-3">
        <div>
          <div className="mx-auto mb-4 w-16 h-0.5 rounded-full bg-white/10 cursor-grab" />
          <button
            className="w-full flex items-center justify-center"
            onClick={onClick}
          >
            <span>{icon || defaultIcon}</span>
          </button>
        </div>
      </div>

      <div className="overflow-y-auto overflow-x-hidden h-[calc(100%-10px)] px-0 pb-8 noscrollbar">
        {children}
      </div>
    </div>
  );
}

export default DrawerPanel;
