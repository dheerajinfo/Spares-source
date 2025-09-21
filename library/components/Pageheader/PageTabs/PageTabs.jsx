import React from 'react';
import { cn } from '../../../utils/cn';

function PageTabs({children, className = ''}) {
  return (
    <div className={cn("w-full", className)}>
      {children}
    </div>
  )
}

export default PageTabs;
