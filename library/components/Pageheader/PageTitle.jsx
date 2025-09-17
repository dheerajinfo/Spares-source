import React from 'react';

function PageTitle({children, className = ''}) {
  return (
    <div className={`text-xl font-medium ${className}`}>
      {children}
    </div>
  )
}

export default PageTitle;
