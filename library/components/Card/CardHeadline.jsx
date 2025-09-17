import React from 'react';

function CardHeadline({children, className=''}) {
  return (
    <p className={`font-medium text-sm ${className}`}>
      {children}
    </p>
  )
}

export default CardHeadline;
