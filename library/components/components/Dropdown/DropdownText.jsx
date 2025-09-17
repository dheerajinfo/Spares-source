import React from 'react';

function DropdownText({children, className = ''}) {
  return (
    <p className={`text-sm font-normal ${className}`}>
      {children}
    </p>
  )
}

export default DropdownText;
