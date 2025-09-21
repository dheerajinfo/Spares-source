import React from 'react';
import { cn } from '../utils/cn';

function Badge({ children, className = '' }) {
  return (
    <p className={cn("flex items-center justify-center px-2 py-1 text-xs font-medium tracking-wide rounded-full w-fit h-fit", className)}>
      {children}
    </p>
  );
}

export default Badge;
