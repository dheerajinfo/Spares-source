import React from 'react';

function PageMeta({children, className = ''}) {
  return (
    <div className={`flex flex-row items-center ${className}`}>
        {children}
    </div>
  )
}

export default PageMeta;
