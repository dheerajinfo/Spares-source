import React from 'react';

function SheetPanel({ className = '', isOpen = false, children }) {

  const panelStyle = {
    overflowY: 'auto',
    overflowX: 'hidden',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',       
    msOverflowStyle: 'none',      
  };

  const hideScrollbarStyle = {
    ...panelStyle,
  };

  return (
    <div
      style={hideScrollbarStyle}
      className={`h-full fixed bottom-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      } ${className}`}
    >
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div className='flex flex-col gap-2 py-6'>
        {children}
      </div>
    </div>
  );
}

export default SheetPanel;
