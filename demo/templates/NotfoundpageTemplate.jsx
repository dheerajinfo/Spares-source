import React from 'react';

function NotfoundpageTemplate() {
  return (
    <div className="bg-black text-white w-full h-screen flex flex-col px-4 lg:px-16">
      <div className="w-full h-14 flex items-center">
        <h3 className="text-base">Logo</h3>
      </div>
      <div className="flex-1 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-2xl">404 | Page not found</h1>
        <p className="text-base">Go back to home page</p>
      </div>
      <div className='flex flex-row items-center justify-between h-14'>
        <h3 className="text-sm">Logo</h3>
        <p className="text-sm">Terms and Conditions</p>
        <p className="text-sm">Copyright</p>
      </div>
    </div>
  );
}

export default NotfoundpageTemplate;
