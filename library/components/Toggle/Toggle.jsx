import React from 'react';

function Toggle({children, className = ''}) {
  return (
    <div className={`flex flex-row ${className}`}>
      {children}
    </div>
  )
}

export default Toggle;
