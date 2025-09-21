import React from 'react';
import { cn } from '../../utils/cn';

function Sidebarclose({onClick, className = '', size, icon, children}) {
  const maximizeIcon = (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 1H10H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H10H14.5M14.5 1H17C18.1046 1 19 1.89543 19 3V17C19 18.1046 18.1046 19 17 19H14.5M14.5 1V19M10 6.5L7 10L10 13" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <>
      <button onClick={onClick} className={cn(className)}>
        {icon || maximizeIcon}
        {children}
      </button>
    </>
  )
}

export default Sidebarclose;
