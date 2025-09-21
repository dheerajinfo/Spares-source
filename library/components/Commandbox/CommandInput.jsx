import React from 'react';
import { cn } from '../../utils/cn';

function CommandInput({
  className = '',
  type = 'text' ,
  placeholder = '',
  onChange,
  value,
  id
}) {
  return (
    <div className='flex flex-row gap-2 items-center'>
        <div className='opacity-40'>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.64706" cy="6.64706" r="5.64706" stroke="white"/>
                <path d="M12.6464 13.3536C12.8417 13.5488 13.1583 13.5488 13.3535 13.3536C13.5488 13.1583 13.5488 12.8417 13.3535 12.6464L13 13L12.6464 13.3536ZM10.8823 10.8824L10.5288 11.2359L12.6464 13.3536L13 13L13.3535 12.6464L11.2359 10.5288L10.8823 10.8824Z" fill="white"/>
            </svg>
        </div>

    <input
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={cn("text-sm px-2 py-1 border border-white/10 rounded w-full placeholder:text-white placeholder:opacity-60 placeholder:text-xs placeholder:tracking-wider", className)}
    />
    </div>
  )
}

export default CommandInput;
