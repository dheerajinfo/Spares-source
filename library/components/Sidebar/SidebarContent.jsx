import React from 'react';
import { cn } from '../../utils/cn';

function SidebarContent({ children, className = '' }) {
  return (
    <div className={cn("flex-grow overflow-y-auto custom-scrollbar", className)}>
        {children}
    </div>
  );
}

export default SidebarContent;
