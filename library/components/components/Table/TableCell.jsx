import React from 'react';

function TableCell({ children, className = '', ...props }) {
  return (
    <td
      className={`w-auto flex items-center px-6 ${className}`}
      {...props}
    >
      {children}
    </td>
  );
}

export default TableCell;
