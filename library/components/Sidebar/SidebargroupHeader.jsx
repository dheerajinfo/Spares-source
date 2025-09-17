import React from 'react';

function SidebargroupHeader({children, className = ''}) {
  return (
    <h6 className={`text-sm font-normal opacity-80 tracking-wide ${className}`}>
      {children}
    </h6>
  )
}

export default SidebargroupHeader;
