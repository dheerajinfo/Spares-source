import React from 'react';
import { cn } from '../../utils/cn';

function StepLabel({children, className = ''}) {
  return (
    <div className={cn("text-black text-sm font-normal tracking-wider", className)}>
        {children}
    </div>
  )
}

export default StepLabel;
