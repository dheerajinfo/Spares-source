import React from 'react';

function TabName({children, className = '', onClick}) {
  return (
    <button onClick={onClick} className={`text-sm sm:text-start font-normal tracking-wider ${className}`}>
        {children}
    </button>
  )
}

export default TabName;
