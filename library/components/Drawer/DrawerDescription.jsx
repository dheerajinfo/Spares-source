import React from 'react';
import { cn } from '../../utils/cn';


function DrawerDescription({children, className = ''}) {
  return (
    <p className={cn("text-sm font-normal tracking-wider", className)}>
      {children}
    </p>
  )
}

export default DrawerDescription;
