import React from 'react';

function ToggleswitchLabel({
    children,
    className = ''
}) {
  return (
    <p className={`${className}`}>
      {children}
    </p>
  )
}

export default ToggleswitchLabel;
