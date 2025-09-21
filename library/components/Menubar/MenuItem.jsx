import React from 'react';
import { cn } from '../../utils/cn';
cn
function MenuItem({children, className = ''}) {
  return (
    <>
        <p className={cn("text-sm font-normal", className)}>
            {children}
        </p>
    </>
  )
}

export default MenuItem;
