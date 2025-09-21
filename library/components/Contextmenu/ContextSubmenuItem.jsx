import React from 'react';
import { cn } from '../../utils/cn';  

function ContextSubmenuItem({children, className = '', onClick}) {
  return (
    <button onClick={onClick}  className={cn("hover:bg-white/10 hover:rounded px-3 h-8 flex items-center", className)}>
        <span>
            {children}
        </span>
    </button>
  )
}

export default ContextSubmenuItem;
