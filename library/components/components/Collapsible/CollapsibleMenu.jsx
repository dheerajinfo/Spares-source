import React, { useState } from 'react';

function CollapsibleMenu({ 
  children, 
  className = '', 
  icon, 
  label, 
  iconColor = 'black'   
}) {
  const defaultIcon = (
    <svg 
      width="9" 
      height="6" 
      viewBox="0 0 9 6" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M1 1L4.5 4.5L8 1" 
        stroke={iconColor}    
        strokeWidth="1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  const [openCollapsible, setOpenCollapsible] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpenCollapsible(!openCollapsible)}
        className={`flex gap-4 items-center justify-between h-8 text-sm tracking-wide rounded transition hover:bg-opacity-90 ${className}`}
      >
        <span>{label}</span>
        <span>{icon || defaultIcon}</span>
      </button>

      {openCollapsible && (
        <div className="py-6 min-w-max h-fit flex flex-col justify-start items-start gap-4 text-sm z-10 rounded-md">
          {children}
        </div>
      )}
    </div>
  );
}

export default CollapsibleMenu;
