import React from 'react';

function PageHeader({children, className = ''}) {
  return (
    <div className={`w-full h-full p-8 rounded ${className}`}>
      {children}
    </div>
  )
}

export default PageHeader;
