import React from 'react';
import { cn } from '../../utils/cn';

function SidebarUser({
    children,
    username,
    usercontact,
    className = ''
}) {
  return (
    <div className={cn("flex flex-row gap-3 items-start", className)}>
        <div>
            {children}
        </div>
        <div className='flex flex-col gap-1'>
            <h6 className='text-sm font-normal tracking-wider'>{username}</h6>
            <p className='text-xs font-normal tracking-wider'>{usercontact}</p>
        </div>
    </div>
  )
}

export default SidebarUser;
