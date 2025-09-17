import React from 'react';

function ModalButton({ 
    onClick, 
    children, 
    className = ''
 }) {
  return (
    <button onClick={onClick}
      className={`flex items-center justify-center gap-3 px-5 h-8 text-sm font-normal tracking-wide rounded cursor-pointer transition hover:bg-opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}

export default ModalButton;
