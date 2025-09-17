import React from 'react';

function CollapsedsidebarHeader({children, className = ''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default CollapsedsidebarHeader;
