import React from 'react';

function ContextSubmenuPanel({children, className = ''}) {
  return (
    <div className={`mt-1 h-fit flex flex-col gap-2 text-sm z-10 rounded-md p-6 ${className}`}>
      {children}
    </div>
  )
}

export default ContextSubmenuPanel;
