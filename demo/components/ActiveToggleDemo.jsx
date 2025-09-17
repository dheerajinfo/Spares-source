import React, { useState } from 'react'; 
import Toggle from '../../library/components/Toggle/Toggle';
import ToggleSwitch from '../../library/components/Toggle/ToggleSwitch';

function ActiveToggleDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className='flex flex-row gap-4'>
      <Toggle className='flex flex-col items-center gap-2'>
        <ToggleSwitch 
          defaultChecked={checked}
          onChange={setChecked}
          className={checked ? 'bg-white/40' : 'bg-white/10'}
        />
      </Toggle>
    </div>
  )
}

export default ActiveToggleDemo;
