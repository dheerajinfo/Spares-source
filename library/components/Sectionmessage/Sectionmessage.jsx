import React from 'react';

function Sectionmessage({children, className = ''}) {
  return (
    <div className={`w-full h-auto rounded ${className}`}>
      {children}
    </div>
  )
}

export default Sectionmessage;
