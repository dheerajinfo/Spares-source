import React from 'react';

function SidebarContent({ children, className = '' }) {
  return (
    <div className={`flex-grow overflow-y-auto custom-scrollbar ${className}`}>
        {children}
    </div>
  );
}

export default SidebarContent;
