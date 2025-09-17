import React from 'react';

function Inline({children, className = ''}) {
  return (
    <div className={`flex w-full flex-row items-center ${className}`}>
        {children}
    </div>
  )
}

export default Inline;
