import React from 'react';

function PageTabs({children, className = ''}) {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  )
}

export default PageTabs;
