import React from 'react';
import Alert from '../../library/components/Alert/Alert';
import AlertTitle from '../../library/components/Alert/AlertTitle';

function AlertDemo() {
  return (
    <Alert className='w-fit bg-black text-white rounded-6'>
        <AlertTitle className='text-sm tracking-widest'>Alert: Your subscription is ending in 3 days.
        </AlertTitle>
    </Alert>
  )
}

export default AlertDemo;
