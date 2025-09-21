import React from 'react';
import { cn } from '../../utils/cn';

function Sidebaropen({onClick, className = '', size, icon}) {
  const minimizeIcon = (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H5.5M5.5 1H10H14.5H17C18.1046 1 19 1.89543 19 3V17C19 18.1046 18.1046 19 17 19H14.5H10H5.5M5.5 1V19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 6.5L14 9.5L11 13" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <>
      <button onClick={onClick} className={cn(className)}>
        {icon || minimizeIcon}
      </button>  
    </>
  )
}

export default Sidebaropen;
