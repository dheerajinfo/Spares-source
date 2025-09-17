import React from 'react';
import ScrollArea from '../../library/components/Scrollarea';

function ScrollAreaDemoOne() {
  return (
    <ScrollArea className='text-white bg-black h-[100px] custom-scrollbar overflow-y-auto flex-grow'>
        <p className='text-sm text-white'>Products</p>
        <a href="https://example.com" className="text-white text-sm">Docs</a>
        <p className='text-sm text-white'>Components</p>
        <p className='text-sm text-white'>Layouts</p>
        <p className='text-sm text-white'>Pricing</p>
    </ScrollArea>
  )
}

export default ScrollAreaDemoOne;
