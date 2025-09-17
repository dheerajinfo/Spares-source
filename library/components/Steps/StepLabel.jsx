import React from 'react';

function StepLabel({children, className = ''}) {
  return (
    <div className={`text-black text-sm font-normal tracking-wider ${className}`}>
        {children}
    </div>
  )
}

export default StepLabel;
