import React from 'react';

function DrawerDescription({children, className = ''}) {
  return (
    <p className={`text-sm font-normal tracking-wider ${className}`}>
      {children}
    </p>
  )
}

export default DrawerDescription;
