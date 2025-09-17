import React from 'react';

function Collapsible({children, className=''}) {
  return (
    <div className={`flex flex-col w-fit ${className}`}>
      {children}
    </div>
  )
}

export default Collapsible;
