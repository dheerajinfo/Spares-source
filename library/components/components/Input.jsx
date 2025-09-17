import React from 'react';

function Input({
  className = '',
  type = 'text' ,
  placeholder = '',
  onChange,
  value
}) {
  return (
    <input
        type={type}
        placeholder={placeholder}
        className={`text-sm text-white px-2 py-1 bg-black border border-white border-opacity-10 rounded placeholder:text-white placeholder:opacity-60 placeholder:text-xs placeholder:tracking-wider ${className}`}
        onChange={onChange}
        value={value}
    />
  )
}

export default Input;
