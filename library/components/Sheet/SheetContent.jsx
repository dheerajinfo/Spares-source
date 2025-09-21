import React from 'react';
import { cn } from '../../utils/cn';

function SheetContent({children, className = ''}) {
  return (
    <div className={cn("flex flex-col", className)}>
      {children}
    </div>
  )
}

export default SheetContent;
