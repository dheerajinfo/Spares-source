import React from 'react';
import { cn } from '../../utils/cn';

function SheetFooter({children, className = ''}) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
}

export default SheetFooter;
