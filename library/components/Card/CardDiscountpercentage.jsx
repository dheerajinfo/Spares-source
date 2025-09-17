import React from 'react';

function CardDiscountpercentage({children, className=''}) {
  return (
    <p className={`flex items-center justify-center px-2 py-1 text-xs font-normal tracking-wide w-fit h-fit bg-[#DD1616] z-10 ${className}`}>
     {children}
    </p>
  )
}

export default CardDiscountpercentage;
