import React from 'react';
import { cn } from '../../utils/cn';

function CardImage({src, className=''}) {
  return (
      <img src={src} className={cn("w-full h-full rounded-4", className)} />
  )
}

export default CardImage;
