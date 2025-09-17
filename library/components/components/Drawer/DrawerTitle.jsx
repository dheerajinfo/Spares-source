import React from 'react';

function DrawerTitle({children, className = ''}) {
  return (
    <h3 className={`text-xl font-bold tracking-wider ${className}`}>
        {children}
    </h3>
  )
}

export default DrawerTitle;
