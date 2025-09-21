import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const UploadButton = forwardRef(function UploadButton(
  { 
    onFileChange, 
    className = '',
    label = "Upload",
    icon 
  },
  ref
) {
  const defaultIcon = (
    <svg
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M9.35355 0.646447C9.15829 0.451185 8.84171 0.451185 8.64645 0.646447L5.46447 3.82843C5.2692 4.02369 5.2692 4.34027 5.46447 4.53553C5.65973 4.7308 5.97631 4.7308 6.17157 4.53553L9 1.70711L11.8284 4.53553C12.0237 4.7308 12.3403 4.7308 12.5355 4.53553C12.7308 4.34027 12.7308 4.02369 12.5355 3.82843L9.35355 0.646447ZM8.5 8C8.5 8.27614 8.72386 8.5 9 8.5C9.27614 8.5 9.5 8.27614 9.5 8H9H8.5ZM9 8H9.5L9.5 1H9H8.5L8.5 8H9Z"
        fill="white"
      />
      <path
        d="M1 12V13C1 13.5523 1.44772 14 2 14H16C16.5523 14 17 13.5523 17 13V12"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <label
      className={cn("px-5 py-2 text-sm rounded tracking-wide cursor-pointer transition hover:bg-opacity-90 flex items-center gap-3", className)}
    >
      {icon || defaultIcon}
      {label}
      <input
        ref={ref}
        type="file"
        className="hidden"
        onClick={(e) => { e.target.value = ''; }} 
        onChange={(e) => onFileChange?.(e.target.files[0] || null)}
      />
    </label>
  );
});

export default UploadButton;
