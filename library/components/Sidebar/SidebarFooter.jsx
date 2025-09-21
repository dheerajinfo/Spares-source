import React from 'react';
import { cn } from '../../utils/cn';

function SidebarFooter({children, className = ''}) {
  return (
    <div className={cn("relative w-full flex flex-row items-center justify-between py-3", className)}>
      {children}
    </div>
  )
}

export default SidebarFooter;
