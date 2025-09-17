import React, { useEffect, useRef, useState } from 'react';
import Inline from '../../library/layouts/Inline';
import Dropdown from '../../library/components/Dropdown/Dropdown';
import DropdownIcon from '../../library/components/Dropdown/DropdownIcon';
import DropdownButton from '../../library/components/Dropdown/DropdownButton';
import DropdownPanel from '../../library/components/Dropdown/DropdownPanel';
import DropdownItem from '../../library/components/Dropdown/DropdownItem';
import LinkButton from '../../library/components/LinkButton';
import Button from '../../library/components/Button';

function HeaderDemo() {

    const [openExplore, setOpenExplore] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);
    const [openMore, setOpenMore] = useState(false);

    const exploreRef = useRef(null);
    const moreRef = useRef(null);
    const mobileRef = useRef(null);    
    
   
    useEffect(() => {
        function handleClickOutside(event) {
        if (exploreRef.current && !exploreRef.current.contains(event.target)) {
            setOpenExplore(false);
        }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
        if (moreRef.current && !moreRef.current.contains(event.target)) {
            setOpenMore(false);
        }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
        if (mobileRef.current && !mobileRef.current.contains(event.target)) {
            setOpenMobile(false);
        }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);     

  return (
    <Inline className='relative h-16 text-white w-full justify-between'>
        <p>LOGO</p>
        <div className='sm:flex lg:hidden'>
            <div ref={mobileRef}> 
                <DropdownButton className='px-5' onClick={() => setOpenMobile((prev) => !prev)}>
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H9" stroke="white" strokeLinecap="round"/>
                        <path d="M1 8.5H17" stroke="white" strokeLinecap="round"/>
                    </svg>
                </DropdownButton>
                {openMobile && (
                    <div className='text-white flex flex-col gap-4 w-full absolute left-0 bg-black z-50 top-16 py-6 border-b border-white/10'>
                        <DropdownItem className='opacity-50'>
                            Explore
                        </DropdownItem>
                        <DropdownItem>
                            Destinations
                        </DropdownItem>
                        <DropdownItem>
                            Experiences
                        </DropdownItem>
                        <DropdownItem>
                            Tours
                        </DropdownItem>
                        <DropdownItem>
                            Activities
                        </DropdownItem>
                        <DropdownItem>
                            Guides
                        </DropdownItem>
                        <DropdownItem className='opacity-50 mt-4'>
                            More
                        </DropdownItem>
                        <DropdownItem>
                            About
                        </DropdownItem>
                        <DropdownItem>
                            Team
                        </DropdownItem>
                    </div>
                )}
            </div>
        </div>
        <div className='lg:flex items-center gap-4 sm:hidden'>
            <LinkButton className='px-5'>
                Home
            </LinkButton>
            <div ref={exploreRef} className="relative inline-block">
                <Dropdown>
                    <DropdownButton className='px-5' onClick={() => setOpenExplore(!openExplore)}>
                        Explore
                        <DropdownIcon />
                    </DropdownButton>
                    {openExplore && (
                        <DropdownPanel className='bg-black text-white border border-white/10 p-6'>
                            <DropdownItem>
                                Destinations
                            </DropdownItem>
                            <DropdownItem>
                                Experiences
                            </DropdownItem>
                            <DropdownItem>
                                Tours
                            </DropdownItem>
                            <DropdownItem>
                                Activities
                            </DropdownItem>
                            <DropdownItem>
                                Guides
                            </DropdownItem>
                        </DropdownPanel>
                    )}
                </Dropdown>
            </div>
            <div ref={moreRef} className="relative inline-block"> 
                <Dropdown>
                    <DropdownButton className='px-5' onClick={() => setOpenMore(!openMore)}>
                        <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="white"/>
                            <circle cx="8" cy="2" r="2" fill="white"/>
                            <circle cx="14" cy="2" r="2" fill="white"/>
                        </svg>
                    </DropdownButton>
                    {openMore && (
                        <DropdownPanel className='bg-black text-white border border-white/10 p-6'>
                            <DropdownItem>
                                About
                            </DropdownItem>
                            <DropdownItem>
                                Team
                            </DropdownItem>
                        </DropdownPanel>
                    )}
                </Dropdown>
            </div>
        </div>
        <div className='lg:flex sm:hidden'> 
            <Button className='bg-elevation px-5'>Free Trial</Button>
        </div>
    </Inline>
  )
}

export default HeaderDemo;
