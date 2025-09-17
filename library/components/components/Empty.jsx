import React from 'react';

function Empty({children, className = ''}) {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  )
}

export default Empty;
