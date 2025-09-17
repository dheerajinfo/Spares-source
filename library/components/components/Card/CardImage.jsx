import React from 'react';

function CardImage({src, className=''}) {
  return (
      <img src={src} className={`w-full h-full rounded-4 ${className}`} />
  )
}

export default CardImage;
