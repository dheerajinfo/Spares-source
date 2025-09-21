import React from 'react';
import { cn } from '../../utils/cn';

function Step({children, className = ''}) {
  return (
    <div className={cn("flex flex-row items-center gap-2", className)}>
        {children}
    </div>
  )
}

export default Step;
