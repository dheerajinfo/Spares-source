import React from 'react';

function PageActions({children, className = ''}) {
  return (
    <div className={`flex flex-row ${className}`}>
      {children}
    </div>
  )
}

export default PageActions;
