import React from 'react';
import Card from '../../library/components/Card/Card';
import CardImage from '../../library/components/Card/CardImage';
import CardProfileimage from '../../library/components/Card/CardProfileimage';
import CardTitle from '../../library/components/Card/CardTitle';
import CardSubtitle from '../../library/components/Card/CardSubtitle';
import CardHeadline from '../../library/components/Card/CardHeadline';
import CardSubheadline from '../../library/components/Card/CardHeadline';
import CardPrimarybutton from '../../library/components/Card/CardPrimarybutton';
import CardSecondarybutton from '../../library/components/Card/CardSecondarybutton';

function CardDemoThree() {
  return (
    <Card className="text-white bg-black rounded-6 p-8 w-[288px]">
      <CardTitle className="text-xl font-semibold">Introductory Session</CardTitle>
      <CardSubtitle className="text-base opacity-90">Live this Saturday</CardSubtitle>
      <CardImage src="./public/assets/physics.png" className="my-4" />
      <div className="flex items-center gap-3">
        <CardProfileimage
          src="./public/assets/physics.jpg"
          className="w-10 h-10 rounded-full my-4"
        >
          <img className='rounded-full' src="/public/assets/professor.png" alt="profile_img" />
        </CardProfileimage>
        <div>
          <CardHeadline className="text-lg font-bold">John Doe</CardHeadline>
          <CardSubheadline className="text-sm opacity-80">Physics Teacher</CardSubheadline>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-row w-full gap-2 mt-4">
          <CardPrimarybutton className="bg-white text-black w-full">
            Join
          </CardPrimarybutton>
          <CardSecondarybutton className="bg-black border border-white/10 w-full">
            Share
          </CardSecondarybutton>
        </div>
      </div>
    </Card>
  )
}

export default CardDemoThree;
