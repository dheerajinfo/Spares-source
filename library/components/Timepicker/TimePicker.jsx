import React from 'react';
import { cn } from '../../utils/cn';

function TimePicker({children, className = ''}) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
}

export default TimePicker;
