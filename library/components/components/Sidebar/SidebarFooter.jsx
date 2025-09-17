import React from 'react';
import SidebarfooterOptions from './SidebarfooterOptions';

function SidebarFooter({children, className = ''}) {
  return (
    <div className={`relative w-full flex flex-row items-center justify-between py-3 ${className}`}>
      {children}
    </div>
  )
}

export default SidebarFooter;
