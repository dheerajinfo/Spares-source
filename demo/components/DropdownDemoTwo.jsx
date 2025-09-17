import React, { useState, useEffect, useRef } from 'react';
import Avatar from '../../library/components/Avatar/Avatar';
import AvatarIcon from '../../library/components/Avatar/AvatarIcon';
import Dropdown from '../../library/components/Dropdown/Dropdown';
import DropdownButton from '../../library/components/Dropdown/DropdownButton';
import DropdownPanel from '../../library/components/Dropdown/DropdownPanel';
import DropdownItem from '../../library/components/Dropdown/DropdownItem';
import DropdownSubmenu from '../../library/components/Dropdown/DropdownSubmenu';
import DropdownSubmenuitems from '../../library/components/Dropdown/DropdownSubmenuitems';
import DropdownText from '../../library/components/Dropdown/DropdownText';
import DropdownInput from '../../library/components/Dropdown/DropdownInput';
import Separator from '../../library/components/Separator';

function DropdownDemoTwo() {
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
            <DropdownButton className='w-fit h-fit px-0 rounded-full' onClick={() => setOpenPanel(!openPanel)}>
                <Avatar className='bg-black rounded-full'>
                    <AvatarIcon>
                        <svg width="9" height="14" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.33204 9.00001C8.54118 9.00001 10.332 7.20915 10.332 5C10.332 2.79086 8.54118 1 6.33204 1C4.12289 1 2.33203 2.79086 2.33203 5C2.33203 7.20915 4.12289 9.00001 6.33204 9.00001Z" stroke="white" strokeWidth="2px" />
                            <path d="M1 14.3333C1 11.3878 3.38782 9 6.33334 9C9.27886 9 11.6667 11.3878 11.6667 14.3333V15.4C11.6667 16.2837 10.9503 17 10.0667 17H2.6C1.71635 17 1 16.2837 1 15.4V14.3333Z" stroke="white" strokeWidth="2px"/>
                        </svg>
                    </AvatarIcon>
                </Avatar>
            </DropdownButton>
            {openPanel && (
                <DropdownPanel className='text-white bg-black border border-white/10 p-0 w-[240px] absolute left-1/2 -translate-x-1/2 top-full'>
                  <DropdownText className='px-3 pt-6 mb-0 opacity-20'>This is the beta release.</DropdownText>
                  <div className='flex flex-row items-center gap-2 m-0 px-3 pt-0'>
                    <div className='opacity-60'>
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="8" stroke="white"/>
                        <path d="M17.6464 18.3536C17.8417 18.5488 18.1583 18.5488 18.3536 18.3536C18.5488 18.1583 18.5488 17.8417 18.3536 17.6464L18 18L17.6464 18.3536ZM15 15L14.6464 15.3536L17.6464 18.3536L18 18L18.3536 17.6464L15.3536 14.6464L15 15Z" fill="white"/>
                      </svg>
                    </div>
                    <DropdownInput className='border border-transparent h-10' placeholder='Search the option' />
                  </div>
                  <Separator className='opacity-10 m-0 p-0' />
                  <div className='px-3 pb-6 pt-0 flex flex-col gap-3'>
                  <DropdownItem className='text-sm w-full py-2 px-2 hover:bg-surface hover:rounded-4 font-normal tracking-widest'>
                    Profile
                  </DropdownItem>
                  <DropdownItem className='text-sm w-full py-2 px-2 hover:bg-surface hover:rounded-4 font-normal tracking-widest'>
                    Settings
                  </DropdownItem>
                  <DropdownSubmenu
                    label="More.."
                    className="bg-surface hidden lg:flex py-2 px-4 hover:bg-elevation hover:rounded-4 text-sm font-normal tracking-widest"
                  >
                    <DropdownSubmenuitems className='bg-surface w-full'>
                      <DropdownItem className='px-2'>Upgrade</DropdownItem>
                      <DropdownItem className='px-2'>Delete account</DropdownItem>
                    </DropdownSubmenuitems>
                  </DropdownSubmenu>

                  <DropdownButton className='border border-white/10 text-xs font-thin tracking-wider hover:bg-white/10'>Logout</DropdownButton>
                  </div>
                </DropdownPanel>
                )}
        </Dropdown>
      </div>

  )
}

export default DropdownDemoTwo;
