import React from 'react';
import Avatar from '../../library/components/Avatar/Avatar';
import AvatarIcon from '../../library/components/Avatar/AvatarIcon';
import Hovercard from '../../library/components/Hovercard/Hovercard';
import HovercardTrigger from '../../library/components/Hovercard/HovercardTrigger';
import HovercardContent from '../../library/components/Hovercard/HovercardContent';

function HovercardDemoTwo() {
  return (
    <Hovercard>
        <HovercardTrigger className='h-8 w-8'>
            <Avatar className='bg-black rounded-full'>
            <AvatarIcon>
                <svg width="9" height="14" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.33204 9.00001C8.54118 9.00001 10.332 7.20915 10.332 5C10.332 2.79086 8.54118 1 6.33204 1C4.12289 1 2.33203 2.79086 2.33203 5C2.33203 7.20915 4.12289 9.00001 6.33204 9.00001Z" stroke="white" strokeWidth="2px" />
                  <path d="M1 14.3333C1 11.3878 3.38782 9 6.33334 9C9.27886 9 11.6667 11.3878 11.6667 14.3333V15.4C11.6667 16.2837 10.9503 17 10.0667 17H2.6C1.71635 17 1 16.2837 1 15.4V14.3333Z" stroke="white" strokeWidth="2px"/>
                </svg>
            </AvatarIcon>
            </Avatar>
        </HovercardTrigger>
        <HovercardContent className='bg-black text-white bottom-full left-1/2 -translate-x-1/2 w-48 mb-2 rounded-8'>
            <div className='p-6 flex flex-col gap-3'>
                <h1 className='text-xl'>Card Title</h1>
                <p className='text-tiny'>Lorem ipsum dolor sit amet consectetur. </p>
            </div>
        </HovercardContent>
    </Hovercard>
  )
}

export default HovercardDemoTwo;
