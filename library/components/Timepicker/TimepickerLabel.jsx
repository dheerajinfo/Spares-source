import React from 'react';
import { cn } from '../../utils/cn';

function TimepickerLabel({children, className = ''}) {
  return (
    <span className={cn(className)}>
      {children}
    </span>
  )
}

export default TimepickerLabel;
