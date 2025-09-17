import React from 'react';

function CardDiscountprice({children, className = ''}) {
  return (
    <p className={`text-base font-semibold ${className}`}>
      {children}
    </p>
  )
}

export default CardDiscountprice;
