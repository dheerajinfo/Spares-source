import React from 'react';

function Card({children, className='' }) {
  return (
    <div className={`aspect-auto h-fit rounded-4 ${className}`}>
      {children}
    </div>
  )
}

export default Card;
