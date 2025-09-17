import React from 'react';

function DatepickerLabel({children, className = ''}) {
  return (
    <span className={`text-sm font-normal tracking-wider ${className}`}>
      {children}
    </span>
  )
}

export default DatepickerLabel;
