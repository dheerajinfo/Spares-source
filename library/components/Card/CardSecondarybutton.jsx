import React from 'react';

function CardSecondarybutton({children, className = ''}) {
  return (
    <button
      className={`flex items-center justify-center gap-3 px-5 h-8 text-sm font-normal tracking-wider rounded transition hover:bg-opacity-90 ${className}`}
    >
      {children}
    </button>
  )
}

export default CardSecondarybutton;
