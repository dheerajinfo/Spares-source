import React from 'react';

function AlertTitle({children, className=''}) {
  return (
    <>
      <div className={`text-base font-normal tracking-wider ${className}`}>
        {children}
      </div>
    </>
  )
}

export default AlertTitle;
