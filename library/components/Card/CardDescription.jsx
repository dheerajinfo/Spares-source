import React from 'react';
import { cn } from '../../utils/cn';

function CardDescription({children, className=''}) {
  return (
    <p className={cn("text-tiny font-normal", className)}>
      {children}
    </p>
  )
}

export default CardDescription;
