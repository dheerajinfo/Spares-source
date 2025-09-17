import React from 'react';

function DropdownSubmenuitems({children, className = ''}) {
  return (
    <div className={`bg-black w-full h-fit flex flex-col justify-start items-between gap-4 text-sm z-10 rounded-md ${className}`}>
      {children}
    </div>
  )
}

export default DropdownSubmenuitems;
