import React from 'react';
import { cn } from '../../utils/cn';

function DropdownSubmenuitems({children, className = ''}) {
  return (
    <div
      className={cn("bg-black h-fit flex flex-col justify-start items-stretch gap-1 text-sm z-10 rounded-4 w-full", className)}
    >
      {children}
    </div>
  )
}

export default DropdownSubmenuitems;
