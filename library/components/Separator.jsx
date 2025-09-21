import React from 'react';
import { cn } from '../utils/cn';

function Separator({ direction = 'horizontal', className = '' }) {
  return (
    <>
      {direction === 'horizontal' && (
        <div className={cn("w-full h-[1px] m-0 p-0 border-b", className)} />
      )}
      {direction === 'vertical' && (
        <div className={cn("h-auto w-[1px] m-0 p-0 border-r", className)} />
      )}
    </>
  );
}

export default Separator;
