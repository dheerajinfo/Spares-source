import React from 'react';
import { cn } from '../../utils/cn';

function CollapsedsidebarFooter({children, className = ''}) {
  return (
    <div className={cn("relative w-auto flex text-nowrap flex-row items-center justify-between py-3", className)}>
      {children}
    </div>
  )
}

export default CollapsedsidebarFooter;
