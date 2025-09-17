import React from 'react';

function PageBoundary({children, className = ''}) {
  return (
    <div className={`lg:px-16 px-4 w-full h-full flex flex-col items-center justify-center ${className}`}>
        {children}
    </div>
  )
}

export default PageBoundary;
