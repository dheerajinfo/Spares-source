import React from 'react';
import { cn } from '../../utils/cn';


function DatepickerLabel({children, className = ''}) {
  return (
    <span className={cn("text-sm font-normal tracking-wider", className)}>
      {children}
    </span>
  )
}

export default DatepickerLabel;
