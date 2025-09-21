import React from 'react';
import { cn } from '../../utils/cn';

function ContextSubmenuPanel({children, className = ''}) {
  return (
    <div className={cn("mt-1 h-fit flex flex-col gap-2 text-sm z-10 rounded-md p-6", className)}>
      {children}
    </div>
  )
}

export default ContextSubmenuPanel;
