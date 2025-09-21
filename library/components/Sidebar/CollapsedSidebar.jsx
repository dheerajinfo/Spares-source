import React from 'react';
import { cn } from '../../utils/cn';

function CollapsedSidebar({children, className = ''}) {
  return (
    <div className={cn("hidden lg:flex flex-col w-fit h-screen px-5 py-3", className)}>
      {children}
    </div>
  );
}

export default CollapsedSidebar;
