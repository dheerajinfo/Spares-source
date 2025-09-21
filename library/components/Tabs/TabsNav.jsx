import React from 'react';
import { cn } from '../../utils/cn';

function TabsNav({children, className = ''}) {
  return (
    <div className= {cn("flex flex-row", className)}>
        {children}
    </div>
  )
}

export default TabsNav;
