import React from 'react';
import { cn } from '../../utils/cn';

function Table({ children, className = '', ...props }) {
  return (
    <table
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </table>
  );
}

export default Table;
