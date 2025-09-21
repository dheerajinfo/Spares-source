import React from 'react';
import { cn } from '../../utils/cn';

function PageSubtitle({children, className = ''}) {
  return (
    <p className={cn("text-xs font-extralight", className)}>
      {children}
    </p>
  )
}

export default PageSubtitle;
