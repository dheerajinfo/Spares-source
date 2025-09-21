import React from 'react';
import { cn } from '../../utils/cn';

function AlertDescription({children, className = '' }) {
  return (
    <>
      <div className={cn("text-sm", className)}>
        {children}
      </div>
    </>
  )
}

export default AlertDescription;
