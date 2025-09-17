import React from 'react';

function NavmenuPanel({children, className = ''}) {
  return (
    <div className={`w-fit rounded flex flex-row items-center justify-center gap-3 ${className}`}>
      {children}
    </div>
  )
}

export default NavmenuPanel;
