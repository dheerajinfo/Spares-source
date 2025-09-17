import React from 'react';

function TimePicker({children, className = ''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default TimePicker;
