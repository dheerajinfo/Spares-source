import React from 'react';

function Dropdown({ children, className = '' }) {

  return (
    <div className={`relative w-fit h-fit flex flex-col justify-start items-start gap-0.5 ${className}`}>
      {children}
    </div>
  );
}

export default Dropdown;
