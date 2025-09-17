import React from 'react';

function SheetButton ({
  children,
  className = '',
  onClick
}) {
  return (
    <button onClick={onClick}
      className={`flex items-center justify-center gap-3 px-5 h-8 text-sm font-normal tracking-wide rounded transition hover:bg-opacity-90 ${className}`}
    >
      {children}
    </button>
  );
};

export default SheetButton;
