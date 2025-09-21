import React from 'react';
import { cn } from '../../utils/cn';

function PageHeader({children, className = ''}) {
  return (
    <div className={cn("w-full h-full p-8 rounded", className)}>
      {children}
    </div>
  )
}

export default PageHeader;
