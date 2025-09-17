import React from 'react';

function SheetTitle({children, className = ''}) {
  return (
    <h3 className={`text-xl font-bold tracking-wider ${className}`}>
        {children}
    </h3>
  )
}

export default SheetTitle;
