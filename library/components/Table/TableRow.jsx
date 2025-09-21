import React from 'react';
import { cn } from '../../utils/cn';

function TableRow({ children, className = '', ...props }) {
  return (
    <tr className={cn(className)} {...props}>
      {children}
    </tr>
  );
}

export default TableRow;
