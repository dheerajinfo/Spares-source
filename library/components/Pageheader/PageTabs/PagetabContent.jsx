import React from 'react';
import { cn } from '../../../utils/cn';

function PagetabContent({children, className = ''}) {
  return (
    <div className={cn("py-6 h-fit w-full", className)}>
        {children}
    </div>
  )
}

export default PagetabContent;
