import React from 'react';
import { cn } from '../../utils/cn';

function MenuInput({
  className = '',
  type = 'text' ,
  placeholder = '',
  onChange,
  value,
  id
}) {
  return (
    <input
      id={id}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={cn("text-sm px-2 py-1 border border-white border-opacity-10 rounded w-full placeholder:opacity-60 placeholder:text-sm placeholder:tracking-wider", className)}
    />
  )
}

export default MenuInput;
