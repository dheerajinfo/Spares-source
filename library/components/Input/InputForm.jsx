import React from 'react';

function InputForm({
  id,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  disabled = false,
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`text-sm text-white px-2 py-1 bg-black border border-white border-opacity-10 rounded placeholder:opacity-60  ${className}`}
    />
  );
}

export default InputForm;
