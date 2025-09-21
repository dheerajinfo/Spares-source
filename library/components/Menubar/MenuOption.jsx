import React from 'react';
import { cn } from '../../utils/cn';

function MenuOption({ children, className = '' }) {

  return (
    <div className={cn("w-fit h-fit flex flex-row justify-start items-start gap-0", className)}>
      {children}
    </div>
  );
}

export default MenuOption;
