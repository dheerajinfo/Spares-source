import React from 'react';

function Table({ children, className = '', ...props }) {
  return (
    <table
      className={`w-full ${className}`}
      {...props}
    >
      {children}
    </table>
  );
}

export default Table;
