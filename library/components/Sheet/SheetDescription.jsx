import React from 'react';
import { cn } from '../../utils/cn';

function SheetDescription({children, className = ''}) {
  return (
    <p className={cn("text-sm font-normal tracking-wider", className)}>
      {children}
    </p>
  )
}

export default SheetDescription;
