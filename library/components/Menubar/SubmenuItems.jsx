import React from 'react';
import { cn } from '../../utils/cn';

function Submenuitems({children, className = ''}) {
  return (
    <div className={cn("w-full h-fit flex flex-col justify-start items-between gap-4 text-sm z-10 rounded-4", className)}>
      {children}
    </div>
  )
}

export default Submenuitems;
