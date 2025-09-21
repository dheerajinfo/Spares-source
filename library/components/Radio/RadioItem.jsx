import React from 'react';
import { cn } from '../../utils/cn';

function RadioItem({ children, className = '' }) {
  return (
    <div className={cn("flex flex-row items-center gap-3", className)}>
      {children}
    </div>
  );
}

export default RadioItem;
