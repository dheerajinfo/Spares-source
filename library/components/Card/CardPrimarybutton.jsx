import React from 'react';
import { cn } from '../../utils/cn';

function CardPrimarybutton({children, className = ''}) {

  return (
    <button
      className={cn("flex items-center justify-center gap-3 px-5 h-8 text-sm font-normal tracking-wider rounded transition hover:bg-opacity-90", className)}
    >
      {children}
    </button>
  )
}

export default CardPrimarybutton;
