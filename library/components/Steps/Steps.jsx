import React from 'react';
import { cn } from '../../utils/cn';

function Steps({children, className = ''}) {
  return (
    <div className={cn("flex", className)}>
        {children}
    </div>
  )
}

export default Steps;
