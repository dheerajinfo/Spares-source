import React from 'react';

function Tabs({children, className = ''}) {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  )
}

export default Tabs;
