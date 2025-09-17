import React from 'react';

function CardDescription({children, className=''}) {
  return (
    <p className={`text-tiny font-normal ${className}`}>
      {children}
    </p>
  )
}

export default CardDescription;
