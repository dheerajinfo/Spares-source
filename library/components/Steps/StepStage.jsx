import React from 'react';
import { cn } from '../../utils/cn';

function StepStage({children, className = ''}) {
  return (
    <div className={cn("flex items-center justify-center rounded-full h-6 w-6 bg-black", className)}>
        {children}
    </div>
  )
}

export default StepStage;
