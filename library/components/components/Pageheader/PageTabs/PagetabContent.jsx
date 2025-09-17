import React from 'react';

function PagetabContent({children, className = ''}) {
  return (
    <div className={`py-6 h-fit w-full ${className}`}>
        {children}
    </div>
  )
}

export default PagetabContent;
