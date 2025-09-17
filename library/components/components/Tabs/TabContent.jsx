import React from 'react';

function TabContent({children, className = ''}) {
  return (
    <div className={`text-base h-fit w-full ${className}`}>
        {children}
    </div>
  )
}

export default TabContent;
