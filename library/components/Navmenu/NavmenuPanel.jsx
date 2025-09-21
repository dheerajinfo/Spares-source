import React from 'react';
import { cn } from '../../utils/cn';

function NavmenuPanel({children, className = ''}) {
  return (
    <div className={cn("w-fit rounded flex flex-row items-center justify-center", className)}>
      {children}
    </div>
  )
}

export default NavmenuPanel;
