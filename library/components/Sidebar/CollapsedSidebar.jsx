import React from 'react';

function CollapsedSidebar({children, className = ''}) {
  return (
    <div className={`hidden lg:flex flex-col w-fit h-screen px-5 py-3 ${className}`}>
      {children}
    </div>
  );
}

export default CollapsedSidebar;
