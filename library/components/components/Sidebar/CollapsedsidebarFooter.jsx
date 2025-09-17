import React from 'react';

function CollapsedsidebarFooter({children, className = ''}) {
  return (
    <div className={`relative w-auto flex text-nowrap flex-row items-center justify-between py-3 ${className}`}>
      {children}
    </div>
  )
}

export default CollapsedsidebarFooter;
