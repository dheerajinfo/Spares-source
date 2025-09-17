import React, { useState } from 'react';

function CollapsedsidebarCollapsible({
  children,
  className = '',
  icon,
  label,
  tooltipText = ''
}) {
  const defaultIcon = (
    <svg
      width="6"
      height="9"
      viewBox="0 0 6 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none" // Prevent SVG hover
    >
      <path
        d="M1.5 7.5L4.5 4.5L1.5 1.5"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );

  const [openCollapsible, setOpenCollapsible] = useState(false);

  return (
    <div className="bg-black flex flex-col items-start relative">
      <div className="relative w-full flex items-center">
        <button
          onClick={() => setOpenCollapsible(!openCollapsible)}
          className={`bg-black flex gap-4 items-center h-8 w-full text-sm tracking-wide rounded transition hover:bg-opacity-90 ${className}`}
        >
          <span className="relative group">
            {label}

            {tooltipText && (
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-11 invisible group-hover:visible bg-black bg-opacity-90 text-white text-sm rounded px-3 py-1 shadow-lg z-20 whitespace-nowrap transition-opacity duration-200">
                {tooltipText}
              </div>
            )}
          </span>
          <span>{icon || defaultIcon}</span>
        </button>
      </div>

      {openCollapsible && (
        <div className="absolute left-full ml-6 p-3 bg-black min-w-max h-fit flex flex-col justify-start items-start gap-3 text-sm z-10 rounded">
          {children}
        </div>
      )}
    </div>
  );
}

export default CollapsedsidebarCollapsible;
