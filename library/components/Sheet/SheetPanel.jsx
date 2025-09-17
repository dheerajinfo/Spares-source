import React from 'react';

function SheetPanel({ className = '', isOpen = false, children }) {

  return (
    <div className={`h-full fixed bottom-0 right-0 z-50 transition-transform duration-300 ease-in-out vertical-scrollbar ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      } ${className}`}
    >
      <div className='flex flex-col gap-2 py-6'>
        {children}
      </div>
    </div>
  );
}

export default SheetPanel;
