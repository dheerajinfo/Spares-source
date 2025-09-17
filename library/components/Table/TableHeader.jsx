import React from 'react';

function TableHeader({ children, className = '', ...props }) {
  return (
    <thead className={className} {...props}>
      {children}
    </thead>
  );
}

export default TableHeader;
