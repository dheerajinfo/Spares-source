import React from 'react';

function MenuItem({children, className = ''}) {
  return (
    <>
        <p className={`text-sm font-normal ${className}`}>
            {children}
        </p>
    </>
  )
}

export default MenuItem;
