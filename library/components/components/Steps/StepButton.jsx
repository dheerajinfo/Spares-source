import React from 'react';

function StepButton ({
  children,
  className = '',
  onClick
}) {
  return (
    <button onClick={onClick}
      className={`bg-black flex items-center justify-center gap-3 px-5 h-8 text-sm font-normal border border-white/20 tracking-wide rounded transition hover:bg-opacity-90 ${className}`}
    >
      {children}
    </button>
  )
}

export default StepButton;