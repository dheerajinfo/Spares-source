import React from 'react';

function Tooltip({children, className = ''}) {
  return (
    <div className={`relative inline-block group w-auto h-fit ${className}`}>
      {children}
    </div>
  )
}

export default Tooltip;
