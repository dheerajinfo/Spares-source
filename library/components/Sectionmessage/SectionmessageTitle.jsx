import React from 'react';
import { cn } from '../../utils/cn';

function SectionmessageTitle({children, className = '' }) {
  return (
    <div className={cn("text-xl", className)}>
        {children}
    </div>
  )
}

export default SectionmessageTitle;
