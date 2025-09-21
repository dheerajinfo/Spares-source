import React from 'react';
import { cn } from '../../utils/cn';

function SelectItem({children, className = '', onClick}) {
  return (
    <button onClick={onClick}  className={cn("flex items-center", className)}>
        <span>
            {children}
        </span>
    </button>
  )
}

export default SelectItem;
