import React from 'react';
import { cn } from '../../utils/cn';

function CardSubheadline({children, className=''}) {
  return (
      <p className={cn("text-xs opacity-80", className)}>
      {children}
    </p>
  )
}

export default CardSubheadline;
