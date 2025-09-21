import React from 'react';
import { cn } from '../../utils/cn';

function MenuPanel({children, className = ''}) {
  return (
    <div className={cn("absolute top-full mt-1 left-0 h-fit min-w-[160px] flex flex-col gap-4 text-sm z-10 rounded-md p-6", className)}>
      {children}
    </div>
  )
}

export default MenuPanel;
