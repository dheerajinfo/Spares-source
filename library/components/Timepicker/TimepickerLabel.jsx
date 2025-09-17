import React from 'react';

function TimepickerLabel({children, className = ''}) {
  return (
    <span className={`${className}`}>
      {children}
    </span>
  )
}

export default TimepickerLabel;
