import React from 'react';

function HovercardTrigger({children, className = ''}) {
  return (
    <button className={`text-sm font-normal flex justify-center items-center rounded cursor-pointer ${className}`}>
      {children}
    </button>
  )
}

export default HovercardTrigger;
