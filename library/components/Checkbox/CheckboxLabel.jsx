import React from 'react';

function CheckboxLabel({children, className = ''}) {
  return (
    <p className={`text-sm font-normal ${className}`}>{children}</p>
  )
}

export default CheckboxLabel;
