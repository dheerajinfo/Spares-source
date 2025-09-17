import React from 'react';

function DatePicker({children, className = ''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default DatePicker;
