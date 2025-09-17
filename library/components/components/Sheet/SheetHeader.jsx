import React from 'react';

function SheetHeader({children, className = ''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default SheetHeader;
