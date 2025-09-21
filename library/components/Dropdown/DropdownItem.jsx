import React from 'react';
import { cn } from '../../utils/cn';

function DropdownItem({children, className = ''}) {
  return (
    <p
      className={cn("px-3 py-2 hover:bg-white/10 rounded-4", className)}
    >
      {children}
    </p>
  )
}


export default DropdownItem;
