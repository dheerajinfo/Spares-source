import React from 'react';

function TimepickerButton({
  children,
  className = '',
  onClick,
  icon
  }) {
  const defaultIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="6" stroke="white"/>
        <path d="M7 4V7L9.7 9.7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <button onClick={onClick}
      className={`flex items-center justify-between gap-3 px-5 h-8 text-sm font-normal tracking-wide rounded transition hover:bg-opacity-90 ${className}`}
    >
      {children}
      {icon || defaultIcon}
    </button>
  )
}

export default TimepickerButton;
