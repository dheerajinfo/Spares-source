import React from 'react';
import { cn } from '../utils/cn';

function ScrollArea({ children, className = '' }) {
  return (
    <div className={cn("w-fit border-opacity-10 rounded p-6 flex flex-col gap-6", className)}>
      {children}
    </div>
  );
}

export default ScrollArea;
