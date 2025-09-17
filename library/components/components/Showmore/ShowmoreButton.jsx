import React from 'react';

function ShowmoreButton({
  children,
  className = '',
  onClick
}) {
  return (
    <button onClick={onClick}
      className={`flex items-center justify-center gap-3 text-sm font-normal tracking-wide transition ${className}`}
    >
      {children}
    </button>
  )
}

export default ShowmoreButton;
