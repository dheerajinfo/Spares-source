import React from 'react';

function AvatarInitials({children, className='', defaultInitials = "DS"}) {
  return (
    <p className={`text-base font-medium ${className}`}>
      {children  || defaultInitials}
    </p>
  )
}

export default AvatarInitials;
