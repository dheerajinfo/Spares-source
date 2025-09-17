import React from 'react';

function StepFooter({children, className = ''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default StepFooter;
