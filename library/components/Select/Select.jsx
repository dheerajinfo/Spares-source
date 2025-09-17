import React from 'react';

function Select({children, className = ''}) {
  return (
    <div className={`relative rounded ${className}`}>
      {children}
    </div>
  )
}

export default Select;
