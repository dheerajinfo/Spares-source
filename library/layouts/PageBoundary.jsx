import React from 'react';
import { cn } from '../utils/cn';

function PageBoundary({children, className = ''}) {
  return (
    <div className={cn("lg:px-16 px-4 w-full h-full flex flex-col items-center justify-center", className)}>
        {children}
    </div>
  )
}

export default PageBoundary;
