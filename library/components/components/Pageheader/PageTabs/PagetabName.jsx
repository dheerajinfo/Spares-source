import React from 'react';

function PagetabName({children, className = '', onClick}) {
  return (
    <button onClick={onClick} className={`text-sm font-normal tracking-wider focus:underline focus:underline-offset-8 ${className}`}>
        {children}
    </button>
  )
}

export default PagetabName;
