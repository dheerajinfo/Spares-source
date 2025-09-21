import React from 'react';
import { cn } from '../../utils/cn';

function DropdownButton({
  children,
  className = '',
  onClick
}) {
  return (
    <button onClick={onClick}
      className={cn("flex items-center justify-center gap-3 h-8 text-sm font-medium tracking-wide rounded transition hover:bg-opacity-90", className)}
    >
      {children}
    </button>
  )
}

export default DropdownButton;
