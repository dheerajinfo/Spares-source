import React from 'react';
import { cn } from '../../utils/cn';

function TabName({children, className = '', onClick}) {
  return (
    <button onClick={onClick} className={cn("text-sm sm:text-start font-normal tracking-wider", className)}>
        {children}
    </button>
  )
}

export default TabName;
