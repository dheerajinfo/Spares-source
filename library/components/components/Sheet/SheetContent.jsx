import React from 'react';

function SheetContent({children, className = ''}) {
  return (
    <div className={`flex flex-col ${className}`}>
      {children}
    </div>
  )
}

export default SheetContent;
