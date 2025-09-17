import React, { useState, useRef, useEffect } from 'react';

function LinkDropdown({
  children,
  className = '',
  buttonclassName = '',
  icon,
  label
}) {
  const [openLinkDropdown, setOpenLinkDropdown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);

  const showDropdown = openLinkDropdown || isHovered;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenLinkDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative flex flex-row items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => setOpenLinkDropdown(prev => !prev)}
        className={`text-white flex items-center justify-center gap-3  text-sm font-medium tracking-wide rounded transition hover:bg-white hover:bg-opacity-10 hover:rounded-4 ${buttonclassName}`}
      >
        <span>{label}</span>
        <span>
          {icon || (
            <svg
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 7.5L4.5 4.5L1.5 1.5"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                transform="rotate(90 3 4.5)"
              />
            </svg>
          )}
        </span>
      </button>

      {showDropdown && (
        <div className={`absolute top-full left-0 min-w-max h-fit flex flex-col gap-2 justify-start items-start mt-[6px] text-sm z-10 rounded-4 ${className}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export default LinkDropdown;
