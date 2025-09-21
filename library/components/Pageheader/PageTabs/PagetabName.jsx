import React from 'react';
import { cn } from '../../../utils/cn';

function PagetabName({children, className = '', onClick}) {
  return (
    <button onClick={onClick} className={cn("text-sm font-normal tracking-wider focus:underline focus:underline-offset-8", className)}>
        {children}
    </button>
  )
}

export default PagetabName;
