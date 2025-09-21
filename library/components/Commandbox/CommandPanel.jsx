import React from 'react';
import { cn } from '../../utils/cn';

function CommandPanel({children, className = ''}) {
  return (
    <div className={cn("rounded-4 z-50", className)}>
      {children}
    </div>
  )
}

export default CommandPanel;
