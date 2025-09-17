import React from 'react';

function Avatar({children, className='' }) {
  return (
    <div className= {`w-8 aspect-1/1 rounded-full flex items-center justify-center ${className}`}>
      {children}
    </div>
  )
}

export default Avatar;
