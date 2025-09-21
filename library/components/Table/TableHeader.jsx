import React from 'react';
import { cn } from '../../utils/cn';

function TableHeader({ children, className = '', ...props }) {
  return (
    <thead className={cn(className)} {...props}>
      {children}
    </thead>
  );
}

export default TableHeader;
