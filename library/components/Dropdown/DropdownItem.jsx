import React from 'react';

function DropdownItem({children, className = ''}) {
  return (
    <p
      className={`px-3 py-2 hover:bg-white/10 rounded-4 ${className}`}
    >
      {children}
    </p>
  )
}


export default DropdownItem;
