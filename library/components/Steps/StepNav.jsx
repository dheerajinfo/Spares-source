import React from 'react';

function StepNav({children, className = ''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default StepNav;
