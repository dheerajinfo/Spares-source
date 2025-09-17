import React from 'react';
import Avatar from '../../library/components/Avatar/Avatar';
import AvatarInitials from '../../library/components/Avatar/AvatarInitials';
import AvatarIcon from '../../library/components/Avatar/AvatarIcon';
import AvatarImage from '../../library/components/Avatar/AvatarImage';


function AvatarDemo() {
  return (
    <div className='flex flex-row items-center gap-2 h-full'>
    <Avatar className='rounded-4 bg-[#0046ff]'>
        <AvatarInitials className='text-xs text-white font-bold'></AvatarInitials>
    </Avatar>

     <Avatar className='rounded-full bg-black'>
        <AvatarIcon>
            <svg width="9" height="14" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.33204 9.00001C8.54118 9.00001 10.332 7.20915 10.332 5C10.332 2.79086 8.54118 1 6.33204 1C4.12289 1 2.33203 2.79086 2.33203 5C2.33203 7.20915 4.12289 9.00001 6.33204 9.00001Z" stroke="white" strokeWidth="2px" />
              <path d="M1 14.3333C1 11.3878 3.38782 9 6.33334 9C9.27886 9 11.6667 11.3878 11.6667 14.3333V15.4C11.6667 16.2837 10.9503 17 10.0667 17H2.6C1.71635 17 1 16.2837 1 15.4V14.3333Z" stroke="white" strokeWidth="2px"/>
            </svg>
        </AvatarIcon>
    </Avatar>

    <Avatar className='rounded-full'>
      <AvatarImage className='rounded-full' src='public/assets/executive.png'/>
    </Avatar>

    <div className='flex flex-row'>
    <Avatar className='rounded-full'>
      <AvatarImage className='rounded-full' src='public/assets/avtarone.png'/>
    </Avatar>
    <Avatar className='rounded-full -ml-4'>
      <AvatarImage className='rounded-full' src='public/assets/avatartwo.png'/>
    </Avatar>
    </div>
    </div>    
  )
}

export default AvatarDemo;
