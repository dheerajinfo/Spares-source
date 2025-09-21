import React from 'react';
import { cn } from '../../utils/cn';

function TableHead({ children, className = '', ...props }) {
  return (
    <th
      scope="col"
      className={cn("flex items-center px-6", className)}
      {...props}
    >
      {children}
    </th>
  );
}

export default TableHead;
