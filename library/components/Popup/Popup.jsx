import React from 'react';

function Popup({children, className = '' }) {
  return (
    <>
      <div className={`relative ${className}`}>
        {children}
      </div>  
    </>
  )
}

export default Popup;
