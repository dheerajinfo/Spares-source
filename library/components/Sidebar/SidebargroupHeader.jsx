import React from 'react';
import { cn } from '../../utils/cn';

function SidebargroupHeader({children, className = ''}) {
  return (
    <h6 className={cn("text-sm font-normal opacity-80 tracking-wide", className)}>
      {children}
    </h6>
  )
}

export default SidebargroupHeader;
