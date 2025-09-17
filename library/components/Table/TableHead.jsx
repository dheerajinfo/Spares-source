import React from 'react';

function TableHead({ children, className = '', ...props }) {
  return (
    <th
      scope="col"
      className={`flex items-center px-6 ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}

export default TableHead;
