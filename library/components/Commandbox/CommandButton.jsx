import React from 'react';
import { cn } from '../../utils/cn';

function CommandButton({children, className = '', icon, onClick}) {

    const defaultIcon = (
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 7.86365L3.36364 10.7273L6.22727 7.86365" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.22729 3.86365L3.36366 1.00001L0.500022 3.86365" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

  );
  return (
    <button onClick={onClick} className={cn("flex flex-row items-center justify-between rounded-4 h-10 w-full px-6", className)}>
        {children}
        {icon || defaultIcon}
    </button>
  )
}

export default CommandButton;
