import React, { useState } from 'react';
import SheetButton from '../../library/components/Sheet/SheetButton';
import SheetPanel from '../../library/components/Sheet/SheetPanel';
import SheetHeader from '../../library/components/Sheet/SheetHeader';
import SheetTitle from '../../library/components/Sheet/SheetTitle';
import SheetDescription from '../../library/components/Sheet/SheetDescription';
import SheetClose from '../../library/components/Sheet/SheetClose';
import SheetContent from '../../library/components/Sheet/SheetContent';
import SheetInput from '../../library/components/Sheet/SheetInput';
import Button from '../../library/components/Button';

function SheetDemo() {
    const[openSheet, setOpenSheet] = useState(false);
  return (
    <>
    <SheetButton className='bg-black text-white' onClick={()=>setOpenSheet(true)}>Sheet</SheetButton>
      {openSheet && ( 
        <SheetPanel  className='px-4 border-l border-white/5 bg-black lg:w-1/4' isOpen={openSheet} onClick={() => setOpenSheet(false)}>
          <SheetHeader className='flex flex-row items-center justify-between sm:gap-6'>
            <div className='flex flex-col gap-2'>
            <SheetTitle className='text-white'>Sheet Title</SheetTitle>
            <SheetDescription className='text-white'>This is the sheet description.</SheetDescription>
            </div>
            <SheetClose onClick={() => setOpenSheet(false)} />
          </SheetHeader>
          <SheetContent className='py-6 gap-2'>
            <SheetDescription className='text-white'>Name</SheetDescription>
            <SheetInput className='bg-black text-white border border-white/10 w-full h-10 placeholder:text-sm' placeholder='Write your name' />
            <div className='flex flex-row gap-3 mt-3 w-full'>
              <Button className='w-1/2 text-white border border-white/10'>Save</Button>
              <Button className='w-1/2 text-white border border-white/10' onClick={() => setOpenSheet(false)}>Cancel</Button>
            </div>
          </SheetContent>
    </SheetPanel>
    )}
    </>
  )
}

export default SheetDemo;
