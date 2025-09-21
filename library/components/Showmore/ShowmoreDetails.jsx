import React from 'react';
import { cn } from '../../utils/cn';

function ShowmoreDetails({children, className = ''}) {
  return (
    <p className={cn("text-sm text-normal tracking-wider", className)}>
      {children}
    </p>
  )
}

export default ShowmoreDetails;
