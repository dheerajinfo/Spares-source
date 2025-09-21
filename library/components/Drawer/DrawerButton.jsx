import React from 'react';
import { cn } from '../../utils/cn';

function DrawerButton ({
  children,
  className = '',
  onClick
}) {
  return (
    <button onClick={onClick}
      className={cn("flex items-center justify-center gap-3 px-5 h-8 text-sm font-normal tracking-wide rounded transition hover:bg-opacity-90", className)}
    >
      {children}
    </button>
  );
};

export default DrawerButton;
