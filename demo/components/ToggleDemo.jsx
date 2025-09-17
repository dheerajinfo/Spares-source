import React, { useState } from 'react'; 
import Toggle from '../../library/components/Toggle/Toggle';
import ToggleSwitch from '../../library/components/Toggle/ToggleSwitch';
import ToggleswitchLabel from '../../library/components/Toggle/ToggleswitchLabel';

function ToggleDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className='flex flex-row gap-4'>
      <Toggle className='flex flex-row items-center gap-2'>
        <ToggleSwitch 
          defaultChecked={checked}
          onChange={setChecked}
          className={checked ? 'bg-white/40' : 'bg-white/10'}
        />
        <ToggleswitchLabel className='text-white text-sm font-semibold tracking-wider'>
          Airplane Mode
        </ToggleswitchLabel>
      </Toggle>
      <ToggleSwitch disabled className='bg-white/10' />
    </div>
  )
}

export default ToggleDemo;
