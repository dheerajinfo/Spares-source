import React from 'react';

function SelectPanel({children, className = ''}) {
  return (
    <div className={`rounded ${className}`}>
      {children}
    </div>
  )
}

export default SelectPanel;
