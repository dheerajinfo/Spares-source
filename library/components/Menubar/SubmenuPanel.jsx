import React from 'react';
import { cn } from '../../utils/cn';

function SubmenuPanel({children, className = ''}) {
  return (
    <div className={cn("absolute top-0 mt-1 left-0 h-fit flex flex-col gap-4 text-sm z-10 rounded-4 p-6", className)}>
      {children}
    </div>
  )
}

export default SubmenuPanel;
