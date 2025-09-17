import React from 'react';
import NavmenuPanel from '../../library/components/Navmenu/NavmenuPanel';
import LinkItem from '../../library/components/Navmenu/LinkItem';
import LinkDropdown from '../../library/components/Navmenu/LinkDropdown';
import LinkdetailsDropdown from '../../library/components/Navmenu/LinkdetailsDropdown';
import LinkdetailsItem from '../../library/components/Navmenu/LinkdetailsItem';

function NavmenuDemo() {
  return (
    <NavmenuPanel className='lg:px-5 gap-1 lg:gap-3 px-0 bg-black'>
        <LinkItem className='h-8 px-2 hidden lg:flex lg:px-5 text-white'>Simple</LinkItem>
        <LinkDropdown className='p-3 lg:p-5 bg-black' buttonclassName='px-2 lg:px-5 bg-black h-8 text-white h-inherit' label='Show'>
          <LinkItem className='h-8 px-3 flex lg:hidden lg:px-5 text-white'>Simple</LinkItem>
          <LinkItem className='text-white bg-black flex flex-row items-center justify-start h-8 px-3'>Content</LinkItem>
          <LinkItem className='text-white bg-black flex flex-row items-center justify-start h-8 px-3'>Component</LinkItem> <LinkItem className='text-white bg-black flex flex-row items-center justify-start h-8 px-3'>Layout</LinkItem> <LinkItem className='text-white bg-black flex flex-row items-center justify-start h-8 px-3'>Blocks</LinkItem>
        </LinkDropdown>
    
        <LinkdetailsDropdown label='components' buttonclassName='h-8 text-white px-2 lg:px-5 bg-black' className='lg:px-5 bg-black'>
          <div className='flex flex-col lg:grid lg:grid-flow-col'>
          <LinkdetailsItem label='Alert' className='text-white w-32 lg:w-56'>Alert displays a short message depending on user actions.
          </LinkdetailsItem>
          <LinkdetailsItem label='Avatar' className='text-white w-32 lg:w-56'>Avatar is used to display a user's identity or entity.
          </LinkdetailsItem>
          </div>
          <div>
          <LinkdetailsItem label='Badge' className='text-white w-32 lg:w-56'>Badge is used to indicate status about other UI component.
          </LinkdetailsItem>
          </div>
        </LinkdetailsDropdown>
        <LinkDropdown buttonclassName='h-8 lg:hidden flex pr-3 bg-black text-white' className='bg-black p-3 text-white h-inherit' label='' icon={<svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="1.6" fill="white"/>
            <circle cx="8" cy="2" r="1.6" fill="white"/>
            <circle cx="14" cy="2" r="1.6" fill="white"/>
        </svg>}>
            <LinkItem className='h-8 text-white flex flex-row items-center justify-start px-3'>
              <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 7.5L4.5 4.5L1.5 1.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
              </svg>
              Side Arrow
            </LinkItem> 
            <LinkItem className='h-8 text-white flex flex-row items-center justify-start px-3'>
              <svg width="9" height="14" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.33204 9.00001C8.54118 9.00001 10.332 7.20915 10.332 5C10.332 2.79086 8.54118 1 6.33204 1C4.12289 1 2.33203 2.79086 2.33203 5C2.33203 7.20915 4.12289 9.00001 6.33204 9.00001Z" stroke="white" strokeWidth="2px" />
                <path d="M1 14.3333C1 11.3878 3.38782 9 6.33334 9C9.27886 9 11.6667 11.3878 11.6667 14.3333V15.4C11.6667 16.2837 10.9503 17 10.0667 17H2.6C1.71635 17 1 16.2837 1 15.4V14.3333Z" stroke="white" strokeWidth="2px"/>
              </svg>
            Avatar
            </LinkItem>
        </LinkDropdown>
        <div className='hidden lg:flex'>
          <LinkDropdown buttonclassName='h-8 px-2 lg:px-5 bg-black text-white' className='bg-black p-3 lg:p-5 text-white h-inherit' label='Icon'>
            <LinkItem className='h-8 text-white flex flex-row items-center justify-start px-3'>
              <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 7.5L4.5 4.5L1.5 1.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
              </svg>
              Side Arrow
            </LinkItem> 
            <LinkItem className='h-8 text-white flex flex-row items-center justify-start px-3'>
              <svg width="9" height="14" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.33204 9.00001C8.54118 9.00001 10.332 7.20915 10.332 5C10.332 2.79086 8.54118 1 6.33204 1C4.12289 1 2.33203 2.79086 2.33203 5C2.33203 7.20915 4.12289 9.00001 6.33204 9.00001Z" stroke="white" strokeWidth="2px" />
                <path d="M1 14.3333C1 11.3878 3.38782 9 6.33334 9C9.27886 9 11.6667 11.3878 11.6667 14.3333V15.4C11.6667 16.2837 10.9503 17 10.0667 17H2.6C1.71635 17 1 16.2837 1 15.4V14.3333Z" stroke="white" strokeWidth="2px"/>
              </svg>
            Avatar
            </LinkItem>
          </LinkDropdown>
        </div>
    </NavmenuPanel>
  )
}

export default NavmenuDemo;
