import React from 'react';

function TableRow({ children, className = '', ...props }) {
  return (
    <tr className={`${className}`} {...props}>
      {children}
    </tr>
  );
}

export default TableRow;
