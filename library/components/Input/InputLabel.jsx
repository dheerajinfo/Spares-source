import React from 'react';

function InputLabel({ htmlFor, children, className = '' }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`${className}`}
    >
      {children}
    </label>
  );
}

export default InputLabel;
