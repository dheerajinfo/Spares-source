import React from 'react';
import Button from '../../library/components/Button';
import Card from '../../library/components/Card/Card';
import CardTitle from '../../library/components/Card/CardTitle';
import CardSubTitle from '../../library/components/Card/CardSubTitle';
import CardDescription from '../../library/components/Card/CardDescription';
import ToggleSwitch from '../../library/components/Toggle/ToggleSwitch';

function Cookiesblock() {
  return (
    <Card className='bg-surface text-white rounded-8 p-8 w-fit'>
          <div className='flex flex-col gap-8'>  
            <div className='flex flex-row items-start justify-between w-full'>
              <CardTitle className='text-xl font-semibold'>Cookies</CardTitle>
              <ToggleSwitch className='bg-white/20' />
            </div>
            <CardSubTitle className='text-tiny'>Turn on cookies for better user experience</CardSubTitle>
            <CardDescription className='w-full'>These cookies are essential in order to use our web app and use its features.</CardDescription>
            <Button className='border border-white/20 px-5'>Save preferences</Button>
          </div>  
    </Card>
  )
}

export default Cookiesblock;
