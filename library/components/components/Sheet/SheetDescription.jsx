import React from 'react';

function SheetDescription({children, className = ''}) {
  return (
    <p className={`text-sm font-normal tracking-wider ${className}`}>
      {children}
    </p>
  )
}

export default SheetDescription;
