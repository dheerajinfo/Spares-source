import React from 'react';

function Upload({children, className = ''}) {
  return (
    <div className={`${className}`}>
        {children}
    </div>
  )
}

export default Upload;
