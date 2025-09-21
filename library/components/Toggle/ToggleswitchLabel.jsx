import React from 'react';
import { cn } from '../../utils/cn';

function ToggleswitchLabel({
    children,
    className = ''
}) {
  return (
    <p className={cn(className)}>
      {children}
    </p>
  )
}

export default ToggleswitchLabel;
