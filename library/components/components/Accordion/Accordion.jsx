import React from 'react';

function Accordion({children, className = ''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default Accordion;
