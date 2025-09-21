import React from 'react';
import { cn } from '../../utils/cn';

function SelectPanel({children, className = ''}) {
  return (
    <div className={cn("rounded", className)}>
      {children}
    </div>
  )
}

export default SelectPanel;
