import React from 'react';

function SheetFooter({children, className = ''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default SheetFooter;
