import React from 'react';
import SidebarDemoTwo from '../components/SidebarDemoTwo';
import EmptyDemo from '../components/EmptyDemo';
import DrawerDemo from '../components/DrawerDemo';

function Dashboardblock() {
  return (
    <div className='border border-white/10 w-full h-full flex lg:flex-row flex-col'>
      <div className='hidden lg:block'>
        <SidebarDemoTwo />
      </div>
      <div className='lg:hidden h-14 w-full bg-black text-white px-4 flex flex-row items-center justify-between border-b border-white/10'>
        <h3 className='text-base'>Logo</h3>
        <DrawerDemo />
      </div>
      <div className='h-lvh w-full flex items-center justify-center'>
        <EmptyDemo />
      </div>
    </div>
  )
}

export default Dashboardblock;
