import React from 'react';
import { cn } from '../../utils/cn';

function SheetClose({className = '', onClick, icon}) {
    const defaultIcon = (
    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 7.5L4.5 4.5L1.5 1.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
  return (
    <button onClick={onClick} className={cn(className)}>
        <span>{icon || defaultIcon}</span>
    </button>
  )
}

export default SheetClose;
