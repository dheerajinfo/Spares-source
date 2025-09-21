import React from 'react';
import { cn } from '../../utils/cn';

function Avatar({children, className='' }) {
  return (
    <div className= {cn("w-8 aspect-1/1 flex items-center justify-center", className)}>
      {children}
    </div>
  )
}

export default Avatar;
