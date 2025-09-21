import React from 'react';
import { cn } from '../../utils/cn';

function Card({children, className='' }) {
  return (
    <div className={cn("aspect-auto h-fit rounded-4", className)}>
      {children}
    </div>
  )
}

export default Card;
