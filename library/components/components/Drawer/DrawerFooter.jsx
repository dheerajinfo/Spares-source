import React from 'react';

function DrawerFooter({children, className = ''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default DrawerFooter;
