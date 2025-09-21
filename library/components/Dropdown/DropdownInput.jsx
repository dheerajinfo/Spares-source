import React from 'react';
import { cn } from '../../utils/cn';


function DropdownInput({
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
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={cn("text-sm px-2 py-1 bg-black border border-white border-opacity-10 rounded w-full placeholder:text-white placeholder:opacity-60 placeholder:text-xs placeholder:tracking-wider", className)}
    />
  )
}

export default DropdownInput;
