import React from 'react';
import { cn } from '../../utils/cn';

function Sectionmessage({children, className = ''}) {
  return (
    <div className={cn("w-full h-auto rounded", className)}>
      {children}
    </div>
  )
}

export default Sectionmessage;
