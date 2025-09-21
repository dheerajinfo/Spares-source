import React from 'react';
import { cn } from '../utils/cn';

function Box({children, className = ''}) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {children}
    </div>
  )
}

export default Box;
