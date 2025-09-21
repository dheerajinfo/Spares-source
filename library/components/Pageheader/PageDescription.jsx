import React from 'react';
import { cn } from '../../utils/cn';

function PageDescription({children, className = ''}) {
  return (
    <p className={cn(className)}>
      {children}
    </p>
  )
}

export default PageDescription;
