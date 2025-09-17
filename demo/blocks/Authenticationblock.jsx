import React from 'react';
import Button from '../../library/components/Button';
import Input from '../../library/components/Input/Input';
import InputLabel from '../../library/components/Input/InputLabel';
import InputForm from '../../library/components/Input/InputForm';
import Separator from '../../library/components/Separator';
import Card from '../../library/components/Card/Card';
import Stack from '../../library/layouts/Stack';

function Authenticationblock() {
  return (
    <Card className='bg-black w-fit h-fit text-white p-8 rounded-4 border border-white/10'>
      <Stack className='gap-8'>
        <p>Logo</p>
        <h3 className='text-2xl'>Create an account</h3>
        <div className='flex flex-col gap-4'>
          <Input className='flex flex-col gap-2'>
              <InputLabel className='text-tiny'>Work email</InputLabel>
              <InputForm type='email' placeholder='user@example.com' className='h-10 focus:outline-none focus:ring-none focus:border-white/30'/>
          </Input>
          <Input className='flex flex-col gap-2'>
              <InputLabel className='text-tiny'>Password</InputLabel>
              <InputForm placeholder='*******' className='h-10 focus:outline-none focus:ring-none focus:border-white/30'/>
          </Input>
          <Button className='bg-white/5 h-10'>Create account</Button>
        </div>

        <div className='flex flex-row items-center gap-0 w-full'>
            <Separator className='border opacity-20'/>
            <p className='text-tiny opacity-60 px-4'>Continue</p>
            <Separator className='border opacity-20'/>
        </div>
        <div className='flex flex-col gap-4'>
          <Button className='h-8 border border-white/10'>
          <img src="/assets/github.png" className='w-4' />
          Github</Button>  
        </div>
        <p className='text-xs'>By continuing I agree to the Terms & condition, Privacy policy</p>
      </Stack>  
    </Card>
  )
}

export default Authenticationblock;
