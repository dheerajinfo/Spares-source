import React from 'react';

function Sidebar({children, className = ''}) {
  return (
    <div className={`hidden lg:flex flex-col h-screen px-5 py-3 ${className}`}>
      {children}
    </div>
  );
}

export default Sidebar;
