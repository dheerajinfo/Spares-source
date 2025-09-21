import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

function SidebarLink({
    children,
    className = '',
    link
}) {
  return (
    <Link to={link}>
        <button
        className={cn("flex items-center gap-3 h-8 text-sm font-medium tracking-wide rounded transition hover:bg-opacity-90", className)}>
            {children}
        </button>
    </Link>

  )
}

export default SidebarLink;
