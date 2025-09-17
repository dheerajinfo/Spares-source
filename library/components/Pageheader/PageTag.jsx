import React from 'react';

function PageTag({children, className = '', onClick}) {
  return (
    <button onClick={onClick} className={`text-xs font-thin tracking-widest px-2 py-1 w-fit flex items-center justify-center gap-2 rounded ${className}`}>
      {children}
    </button>
  )
}

export default PageTag;
