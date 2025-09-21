import React from 'react';
import { cn } from '../../utils/cn';

function AvatarImage({src, className=''}) {
  return (
    <>
        <img src={src} className={cn("w-full h-full object-cover rounded-full", className)} />
    </>
  )
}

export default AvatarImage;
