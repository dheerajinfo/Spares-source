import React from 'react';
import Button from '../../library/components/Button';
import AvatarIcon from '../../library/components/Avatar/AvatarIcon';


function ButtonDemo() {
  return (
    <div className='flex flex-row flex-wrap gap-2'>
        <Button className='bg-black text-white rounded-4 px-5'>Click</Button>
        <Button disabled className='bg-white/5 text-white rounded-4 px-5'>Click</Button>
        <Button className='border bg-black text-white border-white rounded-full px-5'>Outline</Button>
        <Button className='bg-black text-white rounded-4 px-5'>
          <AvatarIcon size={12} />
          Avatar
        </Button>
        <Button className='text-white hover:bg-black/80 rounded-4 px-5'>Ghost</Button>
        <Button className='text-white rounded-4 hover:underline hover:underline-offset-4 px-5'>Link</Button>
        <Button className='bg-black rounded-4 px-2'>
          <svg width="12" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2" cy="2" r="2" fill="white"/>
          <circle cx="8" cy="2" r="2" fill="white"/>
          <circle cx="14" cy="2" r="2" fill="white"/>
          </svg>  
        </Button>
    </div>
  )
}

export default ButtonDemo;
