import React from "react";

function CheckboxSelector({
  id,
  label,
  checked,
  onChange,
  className = "",
  boxClassName = "",
  checkmarkClassName = "",
}) {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 cursor-pointer select-none ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />

      <span
        className={`
          relative h-4 w-4 rounded-4 border bg-transparent
          flex items-center justify-center
          ${boxClassName}
        `}
      >
        <span
          className={`
            text-white text-xs leading-none
            hidden peer-checked:flex items-center justify-center
            ${checkmarkClassName}
          `}
        >
          ✓
        </span>
      </span>

      <span className="">{label}</span>
    </label>
  );
}

export default CheckboxSelector;
