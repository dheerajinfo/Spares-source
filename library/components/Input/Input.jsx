import React from 'react';

function Input({children, className=''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default Input;
