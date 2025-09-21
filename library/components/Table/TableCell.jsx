import React from 'react';
import { cn } from '../../utils/cn';

function TableCell({ children, className = '', ...props }) {
  return (
    <td
      className={cn("w-auto flex items-center px-6", className)}
      {...props}
    >
      {children}
    </td>
  );
}

export default TableCell;
