import React from 'react';
import { cn } from '../../utils/cn';


function DrawerlinkHeader({children, className = ''}) {
  return (
    <h6 className={cn("pt-6 mb-1 text-sm font-normal opacity-80 tracking-wide", className)}>
      {children}
    </h6>
  )
}

export default DrawerlinkHeader;
