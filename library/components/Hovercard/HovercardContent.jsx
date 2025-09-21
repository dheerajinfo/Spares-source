import React from 'react';
import { cn } from '../../utils/cn';

function HovercardContent({ children, className = '' }) {
  return (
    <div
      className={cn("absolute flex-col justify-start items-start z-50 hidden group-hover:flex", className)}
    >
      {children}
    </div>
  );
}

export default HovercardContent;
