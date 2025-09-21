import React from 'react';
import { cn } from '../../utils/cn';

function Dropdown({ children, className = '' }) {

  return (
    <div className={cn("relative w-fit h-fit flex flex-col justify-start items-start gap-0.5", className)}>
      {children}
    </div>
  );
}

export default Dropdown;
