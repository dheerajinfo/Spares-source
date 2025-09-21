import React from 'react';
import { cn } from '../../utils/cn';

function Popup({children, className = '' }) {
  return (
    <>
      <div className={cn("relative", className)}>
        {children}
      </div>  
    </>
  )
}

export default Popup;
