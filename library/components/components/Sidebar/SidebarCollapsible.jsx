import React from 'react';
import { useState } from 'react';

function SidebarCollapsible({ children, className = '', icon, label}) {

  const defaultIcon = (
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L4.5 4.5L8 1" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
  const [openCollapsible, setOpenCollapsible] = useState(false);

  return (
    <div className='bg-black flex flex-col items-start'>
      <button
        onClick={() => setOpenCollapsible(!openCollapsible)}
        className={`bg-black flex gap-4 items-center h-8 w-full text-sm tracking-wide rounded transition hover:bg-opacity-90 ${className}`}
      >
        <span>{label}</span>
        <span>{icon || defaultIcon}</span>
      </button>

      {openCollapsible && (
        <div className='bg-black py-1 px-3 my-1 ml-1 min-w-max h-fit flex flex-col justify-start items-start gap-0 text-sm z-10 border-l border-white/20 rounded-none'>
          {children}
        </div>
      )}
    </div>
  )
}

export default SidebarCollapsible;
