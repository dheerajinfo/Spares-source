import React from 'react';

function SectionmessageButton({
  children,
  className = '',
  onClick
}) {
  return (
    <button onClick={onClick}
      className={`flex items-center justify-center gap-3 h-8 text-sm font-normal focus:underline focus:underline-offset-4 hover:underline hover:underline-offset-4 tracking-wide rounded transition ${className}`}
    >
      {children}
    </button>
  )
}

export default SectionmessageButton;
