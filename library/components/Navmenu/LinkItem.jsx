import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

function LinkItem({ children, className = '', link }) {
  return (
    <Link
      to={link}
      className='w-full'
    >
      <p
        className={cn("w-full flex items-center gap-3 text-sm font-medium tracking-wide hover:bg-white/10 hover:rounded-4", className)}
      >
        {children}
      </p>
    </Link>
  );
}

export default LinkItem;
