import React from 'react';

function SectionmessageTitle({children, className = '' }) {
  return (
    <div className={`text-xl ${className}`}>
        {children}
    </div>
  )
}

export default SectionmessageTitle;
