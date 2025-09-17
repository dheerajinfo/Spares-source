import React from 'react';

function SidebarAvatar({ children, iconsize = 16, className= '', color = 'white', stroke='1.75' }) {
  const fallbackIcon = (
    <svg
      width={iconsize}
      height={iconsize}
      viewBox="0 0 13 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.33204 9.00001C8.54118 9.00001 10.332 7.20915 10.332 5C10.332 2.79086 8.54118 1 6.33204 1C4.12289 1 2.33203 2.79086 2.33203 5C2.33203 7.20915 4.12289 9.00001 6.33204 9.00001Z"
        stroke={color}
        strokeWidth={stroke}
      />
      <path
        d="M1 14.3333C1 11.3878 3.38782 9 6.33334 9C9.27886 9 11.6667 11.3878 11.6667 14.3333V15.4C11.6667 16.2837 10.9503 17 10.0667 17H2.6C1.71635 17 1 16.2837 1 15.4V14.3333Z"
        stroke={color}
        strokeWidth={stroke}
      />
    </svg>
  );

  return <>
    <div className={`bg-white bg-opacity-5 h-8 w-8 rounded-full flex items-center justify-center ${className}`}>
        {children || fallbackIcon}
    </div>
  </>;
}

export default SidebarAvatar;
