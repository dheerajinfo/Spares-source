import React from 'react';
import { cn } from '../../utils/cn';

function CardOriginalprice({children, className=''}) {
  return (
    <p className={cn("text-sm line-through", className)}>
      {children}
    </p>
  )
}

export default CardOriginalprice;
