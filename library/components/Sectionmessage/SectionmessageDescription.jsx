import React from 'react';

function SectionmessageDescription({children, className = ''}) {
  return (
    <div className={`text-base ${className}`}>
        {children}
    </div>
  )
}

export default SectionmessageDescription;
