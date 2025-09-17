import React from 'react';

function AlertDescription({children, className = '' }) {
  return (
    <>
      <div className={`text-sm ${className}`}>
        {children}
      </div>
    </>
  )
}

export default AlertDescription;
