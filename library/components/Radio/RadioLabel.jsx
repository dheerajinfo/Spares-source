import React from 'react';
import { cn } from '../../utils/cn';

function RadioLabel({ htmlFor, children, className = '' }) {
  return (
    <label htmlFor={htmlFor} className={cn("cursor-pointer text-sm font-medium", className)}>
      {children}
    </label>
  );
}

export default RadioLabel;
