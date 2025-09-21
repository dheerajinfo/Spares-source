import React from 'react';
import { cn } from '../../utils/cn';

function ContextmenuItem({children, className = '', onClick}) {
  return (
    <button onClick={onClick}  className={cn("text-sm font-normal tracking-wider hover:bg-white/10 hover:rounded pl-3 h-8 flex items-center", className)}>
        <span>
            {children}
        </span>
    </button>
  )
}

export default ContextmenuItem;
