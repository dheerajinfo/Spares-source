import React from 'react';

function ShowmoreDetails({children, className = ''}) {
  return (
    <p className={`text-sm text-normal tracking-wider ${className}`}>
      {children}
    </p>
  )
}

export default ShowmoreDetails;
