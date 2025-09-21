import React from 'react';
import { cn } from '../utils/cn';

function Inline({children, className = ''}) {
  return (
    <div className={cn("flex w-full flex-row items-center", className)}>
        {children}
    </div>
  )
}

export default Inline;
