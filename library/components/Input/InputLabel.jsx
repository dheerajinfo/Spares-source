import React from 'react';
import { cn } from '../../utils/cn';

function InputLabel({ htmlFor, children, className = '' }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(className)}
    >
      {children}
    </label>
  );
}

export default InputLabel;
