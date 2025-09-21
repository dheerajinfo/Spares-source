import React from 'react';
import { cn } from '../../utils/cn';

function AccordionContent({children, className = ''}) {
  return (
    <p className={cn("text-base font-normal", className)}>{children}</p>
  )
}

export default AccordionContent;
