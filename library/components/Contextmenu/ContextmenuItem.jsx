import React from 'react';

function ContextmenuItem({children, className = '', onClick}) {
  return (
    <button onClick={onClick}  className={`text-sm font-normal tracking-wider hover:bg-white/10 hover:rounded pl-3 h-8 flex items-center ${className}`}>
        <span>
            {children}
        </span>
    </button>
  )
}

export default ContextmenuItem;
