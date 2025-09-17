import React from 'react';

function SidebarHeader({children, className = ''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default SidebarHeader;
