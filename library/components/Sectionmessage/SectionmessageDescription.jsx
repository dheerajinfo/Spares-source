import React from 'react';
import { cn } from '../../utils/cn';

function SectionmessageDescription({children, className = ''}) {
  return (
    <div className={cn("text-base", className)}>
        {children}
    </div>
  )
}

export default SectionmessageDescription;
