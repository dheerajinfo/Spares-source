import React from 'react';
import { cn } from '../../utils/cn';

function AvatarInitials({children, className='', defaultInitials = "DS"}) {
  return (
    <p className={cn("text-base font-medium", className)}>
      {children  || defaultInitials}
    </p>
  )
}

export default AvatarInitials;
