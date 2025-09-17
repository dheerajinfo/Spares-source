import React from 'react';

function DropdownIcon({ children }) {
  const defaultIcon = (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 1L5 5L1 1" stroke="white" strokeLinecap="round" />
    </svg>
  );

  return ( 
    <>
        <div className='w-fit h-fit flex items-center justify-center'>
            {children || defaultIcon}
        </div>
    </>
  );
}

export default DropdownIcon;
