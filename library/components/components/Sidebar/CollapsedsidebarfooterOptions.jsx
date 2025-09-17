import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Separator from '../Separator';
import SidebarAvatar from './SidebarAvatar';


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
      <div className={`absolute left-full bottom-0 bg-black rounded ${className}`} >
        {children}
      </div>
      )}
    </div>
  )
}

export default CollapsedsidebarfooterOptions;
