import React from 'react';
import { cn } from '../../utils/cn';

function CollapsedsidebarContent({ children, className = '' }) {
  return (
    <div className={cn("flex-grow relative custom-scrollbar", className)}>
        {children}
    </div>
  );
}

export default CollapsedsidebarContent;
