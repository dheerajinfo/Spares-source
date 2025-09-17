import React from 'react';

function DatepickerButton({
  children,
  className = '',
  onClick,
  icon
  }) {
     const defaultIcon = (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
    >
      <path d="M9 1L5 5L1 1" stroke="white" strokeLinecap="round" />
    </svg> );
  return (
    <button onClick={onClick}
      className={`flex items-center justify-between gap-3 px-5 text-sm font-normal tracking-wide rounded transition hover:bg-opacity-90 ${className}`}
    >
      {children}
      {icon || defaultIcon}
    </button>
  )
}

export default DatepickerButton;
