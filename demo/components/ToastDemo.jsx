import React from 'react';
import ToastButton from '../../library/components/Toast/ToastButton';
import ToastContent from '../../library/components/Toast/ToastContent';

function ToastDemo() {
  return (
    <ToastButton className='bg-black text-white' label="Toast">
      <ToastContent className='bg-black border border-white/5'>
        <h1 className="text-white text-sm font-semibold">Toast Notification is working great</h1>
      </ToastContent>
    </ToastButton>
  )
}

export default ToastDemo;
