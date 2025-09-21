import React from 'react';
import { cn } from '../../utils/cn';

function CommandAction({
  children,
  className = '',
  onClick
}) {
  return (
     <button onClick={onClick}
      className={cn("bg-white/10 text-white flex items-center gap-3 text-sm font-normal border border-white/20 tracking-wide rounded transition hover:bg-opacity-90", className)}
    >
      {children}
    </button>
  )
}

export default CommandAction;
