import React from 'react';

function DrawerHeader({children, className = ''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default DrawerHeader;
