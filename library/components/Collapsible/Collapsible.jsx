import React from 'react';
import { cn } from '../../utils/cn';

function Collapsible({children, className=''}) {
  return (
    <div className={cn("flex flex-col w-fit", className)}>
      {children}
    </div>
  )
}

export default Collapsible;
