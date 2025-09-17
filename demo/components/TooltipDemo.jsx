import React from 'react';
import Tooltip from '../../library/components/Tooltip/Tooltip';
import TooltipButton from '../../library/components/Tooltip/TooltipButton';
import TooltipContent from '../../library/components/Tooltip/TooltipContent';

function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipButton className='text-white bg-black'>Tooltip</TooltipButton>
      <TooltipContent className='text-white bg-black/90'>Dashboard</TooltipContent>
    </Tooltip>
  )
}

export default TooltipDemo
