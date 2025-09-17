import React from 'react';

function DrawerlinkHeader({children, className = ''}) {
  return (
    <h6 className={`pt-6 mb-1 text-sm font-normal opacity-80 tracking-wide ${className}`}>
      {children}
    </h6>
  )
}

export default DrawerlinkHeader;
