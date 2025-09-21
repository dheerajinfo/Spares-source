import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';


function CollapsedsidebarfooterOptions({className = '', children, optionsButton}) {
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
  return (
    <div ref={dropdownRef}>
       <button className='flex items-center justify-center' onClick={()=>setShowOptions(!showOptions)}>
        {optionsButton}
      </button>
    
     {showOptions && (
      <div className={cn("absolute left-full bottom-0 rounded", className)} >
        {children}
      </div>
      )}
    </div>
  )
}

export default CollapsedsidebarfooterOptions;
