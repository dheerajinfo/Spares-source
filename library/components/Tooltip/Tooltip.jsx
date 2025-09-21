import React from 'react';
import { cn } from '../../utils/cn';

function Tooltip({children, className = ''}) {
  return (
    <div className={cn("relative inline-block group w-auto h-fit", className)}>
      {children}
    </div>
  )
}

export default Tooltip;
