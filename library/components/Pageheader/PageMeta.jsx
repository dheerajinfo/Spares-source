import React from 'react';
import { cn } from '../../utils/cn';

function PageMeta({children, className = ''}) {
  return (
    <div className={cn("flex flex-row items-center", className)}>
        {children}
    </div>
  )
}

export default PageMeta;
