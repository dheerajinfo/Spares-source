import React from 'react';
import Hovercard from '../../library/components/Hovercard/Hovercard';
import HovercardTrigger from '../../library/components/Hovercard/HovercardTrigger';
import HovercardContent from '../../library/components/Hovercard/HovercardContent';

function HovercardDemoOne() {
  return (
    <Hovercard>
        <HovercardTrigger className='px-5 h-8 bg-black text-white'>Trigger</HovercardTrigger>
        <HovercardContent className='mt-2 rounded-8 w-48 bg-black text-white'>
            <div className='p-6 flex flex-col gap-3'>
                <h1 className='text-xl'>Card Title</h1>
                <p className='text-tiny'>Lorem ipsum dolor sit amet consectetur. </p>
            </div>
        </HovercardContent>
    </Hovercard>
  )
}

export default HovercardDemoOne;
