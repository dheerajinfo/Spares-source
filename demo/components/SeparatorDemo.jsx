import React from 'react';
import Separator from '../../library/components/Separator';

function SeparatorDemo() {
  return (
    <div className='flex flex-col gap-0 bg-black rounded-md w-48 text-sm text-white items-center justify-center p-6'>
        <h6 className='p-0 m-0'>Frontend Tech</h6>
        <Separator className ='h-1 border-b border-white/10 my-3'/>
        <div className='h-5 flex flex-row gap-3'>
            <p>Docs</p>
            <Separator className='h-full border-l border-white/10'/>
            <p>Npm</p>
            <Separator direction='vertical' className='border-l border-white/10'/>
            <p>Examples</p>
        </div>
    </div>
  )
}

export default SeparatorDemo;
