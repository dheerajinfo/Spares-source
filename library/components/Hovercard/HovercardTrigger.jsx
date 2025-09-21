import React from 'react';
import { cn } from '../../utils/cn';

function HovercardTrigger({children, className = ''}) {
  return (
    <button className={cn("text-sm font-normal flex justify-center items-center rounded cursor-pointer", className)}>
      {children}
    </button>
  )
}

export default HovercardTrigger;
