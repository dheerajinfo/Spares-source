import React from 'react';

function PageSubtitle({children, className = ''}) {
  return (
    <p className={`text-xs font-extralight ${className}`}>
      {children}
    </p>
  )
}

export default PageSubtitle;
