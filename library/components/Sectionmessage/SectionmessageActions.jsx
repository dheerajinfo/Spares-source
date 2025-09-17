import React from 'react';

function SectionmessageActions({children, className}) {
  return (
    <div className={`flex flex-row ${className}`}>
      {children}
    </div>
  )
}

export default SectionmessageActions;
