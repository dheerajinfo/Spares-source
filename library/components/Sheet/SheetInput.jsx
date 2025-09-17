import React from 'react';

function SheetInput({
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
        className={`text-sm px-2 py-1 rounded  placeholder:text-white placeholder:opacity-60 placeholder:text-xs placeholder:tracking-wider ${className}`}
    />
  )
}

export default SheetInput;
