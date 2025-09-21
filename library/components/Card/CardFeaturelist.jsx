import React from 'react';
import { cn } from '../../utils/cn';

function CardFeaturelist({ children, className = '', icon }) {
  const fallbackIcon = (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11C1 11 2.98154 14.0878 3.875 15C4.11364 15.2436 6.98637 10.5725 10 7.5C13.8477 3.57712 18 1 18 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
      {icon || fallbackIcon}
      <p className={cn("text-sm", className)}>{children}</p>
    </div>
  );
}

export default CardFeaturelist;
