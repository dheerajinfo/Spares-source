import React from 'react';

function StepContent({children, className = ''}) {
  return (
    <div className={`${className}`}>
        {children}
    </div>
  )
}

export default StepContent;
