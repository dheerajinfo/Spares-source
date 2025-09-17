import React from 'react';

function HovercardContent({ children, className = '' }) {
  return (
    <div
      className={`absolute flex-col justify-start items-start z-50 hidden group-hover:flex ${className}`}
    >
      {children}
    </div>
  );
}

export default HovercardContent;
