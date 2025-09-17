import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Separator from '../Separator';


function SidebarfooterOptions({className = '', children, icon}) {
    const[showOptions, setShowOptions] = useState(false);
    const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }

    if (showOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOptions]);

  const defaultIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="18" height="18" rx="2" stroke="white"/>
      <path d="M7 13L13 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 11.2V13H8.8M11.2 7H13V8.8" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <div ref={dropdownRef}>
       <button className='focus:bg-white/5 w-8 h-8 flex items-center justify-center rounded' onClick={()=>setShowOptions(!showOptions)}>
       {icon || defaultIcon}
      </button>
    
     {showOptions && (
      <div className={`absolute w-full left-full ml-6 bottom-0 ${className}`} >
        {children}
      </div>
      )}
    </div>
  )
}

export default SidebarfooterOptions;
