import React from 'react';
import { cn } from '../../utils/cn';

function CardHeadline({children, className=''}) {
  return (
    <p className={cn("font-medium text-sm", className)}>
      {children}
    </p>
  )
}

export default CardHeadline;
