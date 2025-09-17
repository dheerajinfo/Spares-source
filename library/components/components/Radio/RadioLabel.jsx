import React from 'react';

function RadioLabel({ htmlFor, children, className = '' }) {
  return (
    <label htmlFor={htmlFor} className={`cursor-pointer text-sm font-medium ${className}`}>
      {children}
    </label>
  );
}

export default RadioLabel;
