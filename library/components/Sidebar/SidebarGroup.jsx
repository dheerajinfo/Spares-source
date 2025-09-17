import React from 'react';

function SidebarGroup({children, className = ''}) {
  return (
    <div className={`py-0 px-0 m-0 ${className}`}>
      {children}
    </div>
  )
}

export default SidebarGroup;