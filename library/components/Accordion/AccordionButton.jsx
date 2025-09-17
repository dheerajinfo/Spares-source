import React from 'react';

function AccordionButton({
  children,
  className = '',
  icon,
  iconColor = 'black', 
  isOpen = false,
  onClick,
}) {
  const defaultIcon = (
    <svg
      width="5.94"
      height="9"
      viewBox="0 0 6 9"
      fill="none"
      style={{
        transform: isOpen ? 'rotate(270deg)' : 'rotate(90deg)',
        transition: 'transform 0.3s ease',
      }}
    >
      <path
        d="M1.5 7.5L4.5 4.5L1.5 1.5"
        stroke={iconColor}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <button
      onClick={onClick}
      className={`flex flex-row items-center justify-between text-base font-normal tracking-wide ${className}`}
    >
      <span>{children}</span>
      {icon || defaultIcon}
    </button>
  );
}

export default AccordionButton;
