import React from 'react';

function DropdownItem({children, className = ''}) {
  return (
    <>
        <p className={`text-sm font-normal ${className}`}>
            {children}
        </p>
    </>
  )
}

export default DropdownItem;
