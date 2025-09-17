import React from 'react';

function DropdownPanel({children, className = ''}) {
  return (
    <div className={`absolute top-full mt-1 left-0 flex flex-col gap-4 text-sm z-10 rounded-4 ${className}`}>
      {children}
    </div>
  )
}

export default DropdownPanel;
