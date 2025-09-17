import React from 'react';

function Box({children, className = ''}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  )
}

export default Box;
