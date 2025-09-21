import React from 'react';
import { cn } from '../utils/cn';

function Backdrop({ className = '' }) {
  return (
    <div className={cn("fixed inset-0 bg-white/5 backdrop-blur-sm z-40", className)}
    />
  );
}

export default Backdrop;
