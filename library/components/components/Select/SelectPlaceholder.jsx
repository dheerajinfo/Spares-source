import React from 'react';

function SelectPlaceholder({children, className = '', icon, onClick}) {
    const defaultIcon = (
    <svg
      width="5.94"
      height="9"
      viewBox="0 0 6 9"
      fill="none"
      style={{transform:"rotate(90deg)"}}
    >
      <path
        d="M1.5 7.5L4.5 4.5L1.5 1.5"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
  return (
    <button onClick={onClick} className={`flex flex-row items-center justify-between w-full ${className}`}>
        {children} 
        {icon || defaultIcon}
    </button>
  )
}

export default SelectPlaceholder;
