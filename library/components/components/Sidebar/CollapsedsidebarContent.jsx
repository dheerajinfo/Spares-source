import React from 'react';

function CollapsedsidebarContent({ children, className = '' }) {
  return (
    <div className={`flex-grow relative custom-scrollbar ${className}`}>
        {children}
    </div>
  );
}

export default CollapsedsidebarContent;
