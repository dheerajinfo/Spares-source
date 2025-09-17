import React from 'react';

function Separator({ direction = 'horizontal', className = '' }) {
  return (
    <>
      {direction === 'horizontal' && (
        <div className={`w-full h-[1px] m-0 p-0 border-b ${className}`} />
      )}
      {direction === 'vertical' && (
        <div className={`h-auto w-[1px] m-0 p-0 border-r ${className}`} />
      )}
    </>
  );
}

export default Separator;
