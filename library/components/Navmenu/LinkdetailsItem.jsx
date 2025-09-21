import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

function LinkdetailsItem({
  label,
  children,
  className = '',
  link
}) {
  return (
    <Link to={link} className={cn("block transition hover:rounded-4 hover:bg-white hover:bg-opacity-10", className)}>
      <div className="flex flex-col gap-0 px-3 py-2">
        <h6 className="text-sm font-medium tracking-wide">
          {label}
        </h6>
        <p className="text-sm text-white/70 mt-1">
          {children}
        </p>
      </div>
    </Link>
  );
}

export default LinkdetailsItem;
