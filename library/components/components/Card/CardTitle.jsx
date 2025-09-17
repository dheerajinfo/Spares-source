import React from 'react';

function CardTitle({children, className=''}) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}

export default CardTitle;
