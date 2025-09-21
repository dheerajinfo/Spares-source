import React from 'react';
import { cn } from '../../utils/cn';

function TableBody({ children, className = '', ...props }) {
  return (
    <tbody className={cn(className)} {...props}>
      {children}
    </tbody>
  );
}

export default TableBody;
