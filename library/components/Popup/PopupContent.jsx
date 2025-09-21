import React from 'react';
import { cn } from '../../utils/cn';

function PopupContent({
    children, 
    className = '' 
}) {
  return (
    <div className={cn("h-fit flex flex-col justify-start items-start gap-4 text-sm z-50 rounded-4 border border-white/10", className)}>
        {children}
    </div>
  )
}

export default PopupContent;
