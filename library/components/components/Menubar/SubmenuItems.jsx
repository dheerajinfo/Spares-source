import React from 'react';

function Submenuitems({children, className = ''}) {
  return (
    <div className={`w-full h-fit flex flex-col justify-start items-between gap-4 text-sm z-10 rounded-md ${className}`}>
      {children}
    </div>
  )
}

export default Submenuitems;
