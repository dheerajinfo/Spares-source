import React from 'react';
import Input from '../../library/components/Input/Input';
import InputLabel from '../../library/components/Input/InputLabel';
import InputForm from '../../library/components/Input/InputForm';

function InputDemo() {
  return (
    <Input className='text-white flex flex-col gap-2 p-8'>
      <InputLabel className='text-tiny'>Userid</InputLabel>
      <InputForm className='text-white w-40 h-10 placeholder:text-white placeholder:text-sm focus:outline-none focus:ring-none focus:border-white/30' placeholder='username, id, contact'/>
    </Input>
  )
}

export default InputDemo;
