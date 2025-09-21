import React from 'react';
import { cn } from '../../utils/cn';

function ContextmenuPanel({children, className = ''}) {
  return (
     <div className={cn("flex flex-col py-6 pl-3 pr-6 rounded h-fit", className)}>
      {children}
    </div>
  )
}

export default ContextmenuPanel;
