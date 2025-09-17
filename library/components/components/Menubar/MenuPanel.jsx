import React from 'react';

function MenuPanel({children, className = ''}) {
  return (
    <div className={`absolute top-full mt-1 left-0 h-fit min-w-[160px] flex flex-col gap-4 text-sm z-10 rounded-md p-6 ${className}`}>
      {children}
    </div>
  )
}

export default MenuPanel;
