import React from 'react';
import { cn } from '../../utils/cn';

function Alert({children, className='' }) {
  return (
    <>
        <div className={cn("rounded-4 w-fit px-8 py-4", className)}>
            {children}
        </div>
    </>
  )
}

export default Alert;
