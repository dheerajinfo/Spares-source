import React from 'react';

function PopupContent({
    children, 
    className = '' 
}) {
  return (
    <div className={`w-fit h-fit flex flex-col justify-start items-start gap-4 text-sm z-50 rounded-md border border-white/10 ${className}`}>
        {children}
    </div>
  )
}

export default PopupContent;
