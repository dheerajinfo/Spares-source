import React, { useState } from 'react';
import RadioItem from '../../library/components/Radio/RadioItem';
import RadioButton from '../../library/components/Radio/RadioButton';
import RadioLabel from '../../library/components/Radio/RadioLabel';

function RadioDemo() {
  const [selected, setSelected] = useState('');
  const options = [
    { id: 'apple', label: 'Apple' },
    { id: 'banana', label: 'Banana' },
    { id: 'cherry', label: 'Cherry' },
  ];

  return (
    <div className="flex flex-col gap-2">
      {options.map(({ id, label }) => (
        <RadioItem key={id}>
          <RadioButton
            id={id}
            name="fruit"
            value={id}
            selectedValue={selected}
            onChange={setSelected}
            className='border-white focus:bg-white'
          />
          <RadioLabel className='text-white' htmlFor={id}>{label}</RadioLabel>
        </RadioItem>
      ))}
    </div>
  );
}

export default RadioDemo;
