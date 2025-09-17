import React from 'react';

function Steps({children, className = ''}) {
  return (
    <div className={`flex ${className}`}>
        {children}
    </div>
  )
}

export default Steps;
