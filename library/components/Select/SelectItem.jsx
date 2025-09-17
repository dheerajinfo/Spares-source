import React from 'react';

function SelectItem({children, className = '', onClick}) {
  return (
    <button onClick={onClick}  className={`flex items-center ${className}`}>
        <span>
            {children}
        </span>
    </button>
  )
}

export default SelectItem;
