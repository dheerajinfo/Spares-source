import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../library/components/Dropdown/Dropdown';
import DropdownButton from '../../library/components/Dropdown/DropdownButton';
import DropdownIcon from '../../library/components/Dropdown/DropdownIcon';
import DropdownPanel from '../../library/components/Dropdown/DropdownPanel';
import DropdownItem from '../../library/components/Dropdown/DropdownItem';

function DropdownDemoOne() {
    const [openPanel, setOpenPanel] = useState(false);
    const dropdownRef = useRef(null);

    useEffect (() => {function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenPanel(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);   
    
  return (
    <div ref={dropdownRef} className="relative inline-block">
    <Dropdown>
        <DropdownButton className='px-5 bg-black text-white' onClick={() => setOpenPanel(!openPanel)}>
            Menu
            <DropdownIcon />
        </DropdownButton>
        {openPanel && (
            <DropdownPanel className='text-white bg-black border border-white/10 p-6'>
                <DropdownItem>
                    <Link to=''>Profile</Link>
                </DropdownItem>
                <DropdownItem>Settings</DropdownItem>
            </DropdownPanel>
        )}
    </Dropdown>
    </div>
  )
}

export default DropdownDemoOne;
