import React from 'react';
import { cn } from '../../utils/cn';

function Select({children, className = ''}) {
  return (
    <div className={cn("relative rounded", className)}>
      {children}
    </div>
  )
}

export default Select;
