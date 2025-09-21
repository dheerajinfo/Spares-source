import React from 'react';
import { cn } from '../../utils/cn';

function CollapsedsidebarIconbutton({
  tooltipText = '',
  children,
  position = 'right',
  className = '', 
}) {
  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2 mr-2';
      case 'right':
      default:
        return 'left-full top-1/2 transform -translate-y-1/2 ml-2';
    }
  };

  return (
    <div className="relative group inline-block">
      <div className="cursor-pointer text-white">
        {children}
      </div>

      <div
        className={cn("invisible z-50 group-hover:visible absolute bg-black bg-opacity-90 text-white text-sm rounded ml-6 px-3 py-1 shadow-lg whitespace-nowrap transition-opacity duration-200",
        getPositionClasses(),
        className
        )}
      >
        {tooltipText}
      </div>
    </div>
  );
}

export default CollapsedsidebarIconbutton;
