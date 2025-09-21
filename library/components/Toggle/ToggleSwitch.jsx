import React, { useState } from 'react';
import { cn } from '../../utils/cn';

function ToggleSwitch({ 
  defaultChecked = false, 
  onChange, 
  className = '', 
  disabled = false 
}) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    if (disabled) return;
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) onChange(newChecked);
  };

  return (
    <button
      onClick={handleToggle}
      disabled={disabled}
      className={cn(
        "w-9 h-6 flex items-center rounded-full p-1 transition-colors",
        checked ? "bg-black" : "bg-black/30",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className
      )}
    >

      <div
        className={`
          w-4 h-4 bg-white rounded-full shadow-md transform transition-transform
          ${checked ? 'translate-x-3' : 'translate-x-0'}
        `}
      />
    </button>
  );
}

export default ToggleSwitch;
