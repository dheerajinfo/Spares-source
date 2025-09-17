import React from 'react';

function RadioItem({ children, className = '' }) {
  return (
    <div className={`flex flex-row items-center gap-3 ${className}`}>
      {children}
    </div>
  );
}

export default RadioItem;
