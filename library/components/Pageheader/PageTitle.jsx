import React from 'react';
import { cn } from '../../utils/cn';

function PageTitle({children, className = ''}) {
  return (
    <div className={cn("text-xl font-medium", className)}>
      {children}
    </div>
  )
}

export default PageTitle;
