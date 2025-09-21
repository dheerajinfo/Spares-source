import React from "react";
import { cn } from '../utils/cn';

function Button({
  children,
  disabled = false,
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn("flex items-center justify-center gap-3 rounded-4 h-8 text-sm font-normal tracking-wider transition hover:opacity-90 disabled:opacity-80 disabled:cursor-not-allowed", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
