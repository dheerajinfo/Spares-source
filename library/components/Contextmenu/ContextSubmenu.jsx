import React, { useState } from 'react';

function ContextSubmenu({ children, className = '', icon, label }) {
  const defaultIcon = (
    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 7.5L4.5 4.5L1.5 1.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );

  const [openSubmenu, setOpenSubmenu] = useState(false);

  return (
    <div
      className="relative flex flex-row items-center"
      onMouseEnter={() => setOpenSubmenu(true)}   
      onMouseLeave={() => setOpenSubmenu(false)} 
    >
      <button
        className={`flex gap-4 items-center justify-between h-8 w-full text-sm tracking-wide rounded transition hover:bg-opacity-90 ${className}`}
      >
        <span>{label}</span>
        <span>{icon || defaultIcon}</span>
      </button>

      {openSubmenu && (
        <div className="absolute top-0 left-full ml-1 bg-black rounded-md shadow-lg z-50">
          {children} 
        </div>
      )}
    </div>
  );
}

export default ContextSubmenu;
