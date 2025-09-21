import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';


function DrawerLink({ children, className = '', link }) {
  return (
    <Link
      to={link}
      className={cn("w-full h-10 flex items-center gap-3 text-sm font-medium tracking-wide rounded-md transition", className)}
    >
      {children}
    </Link>
  );
}

export default DrawerLink;
