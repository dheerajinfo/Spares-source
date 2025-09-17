import React from 'react';

function TabsNav({children, className = ''}) {
  return (
    <div className= {`flex flex-row ${className}`}>
        {children}
    </div>
  )
}

export default TabsNav;
