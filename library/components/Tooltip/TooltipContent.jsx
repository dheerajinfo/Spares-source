import React from 'react';

function TooltipContent({ children, className = '' }) {
  return (
    <div className={`absolute top-0 left-full px-3 py-1 ml-1 rounded-4 text-sm flex-col justify-start items-start z-50 hidden group-hover:flex min-w-max whitespace-nowrap transition-opacity duration-200 ${className}`}>
        {children}
    </div>
  )
}

export default TooltipContent;
