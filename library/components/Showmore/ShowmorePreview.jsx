import React from 'react';

function ShowmorePreview({children, className = ''}) {
  return (
    <p className={`text-sm text-normal tracking-wider ${className}`}>
      {children}
    </p>
  )
}

export default ShowmorePreview;
