import React from 'react';

function ScrollArea({ children, className = '' }) {
  return (
    <div className={`w-fit border-opacity-10 rounded p-6 flex flex-col gap-6  ${className}`} 
    >
      {children}
    </div>
  );
}

export default ScrollArea;
