import React from 'react';
import Badge from '../../library/components/Badge';
import AvatarIcon from '../../library/components/Avatar/AvatarIcon';

function BadgeDemo() {
  return (
    <div className='flex flex-row items-center gap-1 w-36 flex-wrap'>
      <Badge className='text-white bg-black'>Bagde</Badge>
      <Badge className='text-white bg-[#0046ff] border border-white rounded-2'>Category</Badge>
      <Badge className='text-white bg-black'>
        <AvatarIcon size={8} />
      </Badge>
      <Badge className='text-white gap-1 bg-black rounded-full'>
        <svg
          width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 4C1.5 4 2.81593 6.60287 3.18382 6.99338C3.40755 7.23086 9 1 9 1" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Completed
      </Badge>
      <Badge className='text-white bg-black'>10+</Badge>
    </div>
  )
}

export default BadgeDemo;
