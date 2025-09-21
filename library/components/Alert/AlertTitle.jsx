import React from 'react';
import { cn } from '../../utils/cn';

function AlertTitle({children, className=''}) {
  return (
    <>
      <div className={cn("text-base font-normal tracking-wider",className)}>
        {children}
      </div>
    </>
  )
}

export default AlertTitle;
