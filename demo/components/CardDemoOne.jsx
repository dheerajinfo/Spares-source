import React from 'react';
import Card from '../../library/components/Card/Card';
import CardProfileimage from '../../library/components/Card/CardProfileimage';
import CardTitle from '../../library/components/Card/CardTitle';
import CardSubtitle from '../../library/components/Card/CardSubtitle';
import CardDescription from '../../library/components/Card/CardDescription';
import CardSecondarybutton from '../../library/components/Card/CardSecondarybutton';

function CardDemoOne() {
  return (
    <Card className='p-8 bg-black w-[288px]'>
        <CardProfileimage className="opacity-100 rounded-full">
        <img className='rounded-full' src="/public/assets/executive.png" alt="profile_img" />
        </CardProfileimage>  
        <div className='flex flex-col mt-2 gap-1'>
          <CardTitle className="text-white text-lg mt-2">John Doe</CardTitle>
          <CardSubtitle className="text-white text-sm opacity-70">Product Manager</CardSubtitle>
          <CardDescription className="text-white text-sm mt-2">
            Passionate about building delightful user experiences.
          </CardDescription>
        </div>
        <CardSecondarybutton className="bg-black border border-white/20 text-sm font-normal tracking-wider text-white w-full mt-6">
            Connect
        </CardSecondarybutton>
    </Card>
  )
}

export default CardDemoOne;
