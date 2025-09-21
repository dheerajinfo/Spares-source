import React from 'react';
import { cn } from '../../utils/cn';

function SheetTitle({children, className = ''}) {
  return (
    <h3 className={cn("text-xl font-bold tracking-wider", className)}>
        {children}
    </h3>
  )
}

export default SheetTitle;
