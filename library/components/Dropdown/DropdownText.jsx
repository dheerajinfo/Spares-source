import React from 'react';
import { cn } from '../../utils/cn';

function DropdownText({children, className = ''}) {
  return (
    <p className={cn("text-sm font-normal", className)}>
      {children}
    </p>
  )
}

export default DropdownText;
