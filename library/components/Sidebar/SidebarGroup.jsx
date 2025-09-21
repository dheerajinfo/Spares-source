import React from 'react';
import { cn } from '../../utils/cn';

function SidebarGroup({children, className = ''}) {
  return (
    <div className={cn("p-0 m-0", className)}>
      {children}
    </div>
  )
}

export default SidebarGroup;