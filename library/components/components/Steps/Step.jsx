import React from 'react';

function Step({children, className = ''}) {
  return (
    <div className={`flex flex-row items-center gap-2 ${className}`}>
        {children}
    </div>
  )
}

export default Step;
