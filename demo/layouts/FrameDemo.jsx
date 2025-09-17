import React from 'react';
import Frame from '../../library/layouts/Frame';

function FrameDemo() {
  return (
    <Frame src="/assets/avatartwo.png" alt="" className='w-32 object-cover rounded-8' ratio={1/1} />
  )
}

export default FrameDemo;
