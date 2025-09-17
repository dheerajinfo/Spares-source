import React from 'react';

function Badge({ children, className = '' }) {
  return (
    <p className={`flex items-center justify-center px-2 py-1 text-xs font-medium tracking-wide rounded-full w-fit h-fit ${className}`}>
      {children}
    </p>
  );
}

export default Badge;
