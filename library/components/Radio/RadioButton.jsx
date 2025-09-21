import React from 'react';
import { cn } from '../../utils/cn';

function RadioButton({ id, name, value, selectedValue, onChange, className = '' }) {
  return (
    <input
      id={id}
      type="radio"
      name={name} 
      value={value}
      checked={selectedValue === value}
      onChange={() => onChange(value)}
      className={cn("cursor-pointer appearance-none w-3 h-3 rounded-full border border-opacity-100", className)}
    />
  );
}

export default RadioButton;
