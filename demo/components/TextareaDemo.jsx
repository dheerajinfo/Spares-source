import React from 'react';
import Textarea from '../../library/components/Textarea';

function TextareaDemo() {
  return (
    <Textarea
      placeholder="Write your feedback..."
      rows={5}
      cols={40}
      className='h-[150px] p-4 border-opacity-10 text-white bg-black placeholder-white/50 focus:outline-none focus:ring-none focus:border-white/30 text-sm rounded-4'
    />
  )
}

export default TextareaDemo;
