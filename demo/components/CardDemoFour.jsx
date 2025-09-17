import React from 'react';
import Card from '../../library/components/Card/Card';
import CardImage from '../../library/components/Card/CardImage';
import CardTitle from '../../library/components/Card/CardTitle';
import CardSubheadline from '../../library/components/Card/CardHeadline';

function CardDemoFour() {
  return (
  <Card className='bg-black flex flex-col w-[288px]'>
    <CardImage src="/assets/cosmos.png" />
    <div className='bg-black h-fit p-3'>
      <CardTitle className="text-white text-sm">Intro to Cosmology</CardTitle>
      <CardSubheadline className="text-white/40">12 min · Beginner</CardSubheadline>
    </div>
  </Card>
  )
}

export default CardDemoFour;
