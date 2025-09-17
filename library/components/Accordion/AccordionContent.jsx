import React from 'react';

function AccordionContent({children, className = ''}) {
  return (
    <p className={`text-base font-normal ${className}`}>{children}</p>
  )
}

export default AccordionContent;
