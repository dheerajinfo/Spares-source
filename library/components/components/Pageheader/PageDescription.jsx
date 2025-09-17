import React from 'react';

function PageDescription({children, className = ''}) {
  return (
    <p className={`${className}`}>
      {children}
    </p>
  )
}

export default PageDescription;
