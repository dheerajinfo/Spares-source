import React from 'react';
import { cn } from '../../utils/cn';

function CardDiscountprice({children, className = ''}) {
  return (
    <p className={cn("text-base font-semibold", className)}>
      {children}
    </p>
  )
}

export default CardDiscountprice;
