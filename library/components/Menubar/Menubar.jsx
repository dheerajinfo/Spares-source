import React from 'react';

function Menubar({ children, className = '' }) {

  return (
    <div className={`relative w-fit h-fit flex flex-row justify-start items-start gap-0 ${className}`}>
      {children}
    </div>
  );
}

export default Menubar;
