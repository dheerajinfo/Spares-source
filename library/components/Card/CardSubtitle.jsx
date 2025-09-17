import React from 'react';

function CardSubtitle({children, className = ''}) {
  return (
    <p className={`${className}`}>
      {children}
    </p>
  )
}

export default CardSubtitle;
