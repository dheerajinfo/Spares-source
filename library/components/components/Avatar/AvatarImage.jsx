import React from 'react';

function AvatarImage({src, className=''}) {
  return (
    <>
        <img src={src} className={`w-full h-full object-cover rounded-full ${className}`} />
    </>
  )
}

export default AvatarImage;
