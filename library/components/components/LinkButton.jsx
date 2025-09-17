import React from 'react';
import { Link } from 'react-router-dom';

function LinkButton({
    children,
    className = '',
    link
}) {
  return (
    <Link to={link}>
        <button
        className={`flex items-center justify-center gap-3 text-sm font-medium tracking-wide rounded transition hover:bg-opacity-90 ${className}`}
        >
            {children}
        </button>
    </Link>

  )
}

export default LinkButton;
