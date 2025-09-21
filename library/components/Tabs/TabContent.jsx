import React from 'react';
import { cn } from '../../utils/cn';

function TabContent({children, className = ''}) {
  return (
    <div className={cn("text-base h-fit w-full", className)}>
        {children}
    </div>
  )
}

export default TabContent;
