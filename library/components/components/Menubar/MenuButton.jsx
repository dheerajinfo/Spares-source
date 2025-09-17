import React from 'react';

function MenuButton({
  children,
  className = '',
  onClick
}) {
  return (
    <button onClick={onClick}
      className={`flex items-center gap-3 h-10 text-xs font-normal tracking-wider transition hover:bg-opacity-90 ${className}`}
    >
      {children}
    </button>
  )
}

export default MenuButton;
