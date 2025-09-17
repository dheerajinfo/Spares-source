import React from 'react';

function SelectPanel({children, className = ''}) {
  return (
    <div className={`absolute top-full left-0 mt-1 flex flex-col gap-3 rounded w-full h-fit ${className}`}>
      {children}
    </div>
  )
}

export default SelectPanel;
