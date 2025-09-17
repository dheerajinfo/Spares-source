import React, { useState, useRef, useEffect } from 'react';

function LinkdetailsDropdown({
  children,
  className = '',
  buttonclassName = '',
  icon,
  label
}) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const dropdownRef = useRef(null);

  const showDropdown = open || hovered;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const defaultIcon = (
    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 7.5L4.5 4.5L1.5 1.5"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        transform="rotate(90 3 4.5)"
      />
    </svg>
  );

  return (
    <div
      ref={dropdownRef}
      className="relative flex flex-row items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center justify-center gap-3 text-sm font-medium tracking-wide rounded transition hover:bg-white hover:bg-opacity-10 hover:rounded-md ${buttonclassName}`}
      >
        <span>{label}</span>
        <span>{icon || defaultIcon}</span>
      </button>

      {showDropdown && (
        <div className={`absolute top-full left-0 p-3 min-w-max h-fit flex flex-col justify-start items-start gap-2 mt-[6px] text-sm z-10 rounded-md ${className}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export default LinkdetailsDropdown;
