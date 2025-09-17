import React from 'react';

function Hovercard({children, className = ''}) {
  return (
    <div className={`relative inline-block group w-auto h-fit ${className}`}>
      {children}
    </div>
  )
}

export default Hovercard;
