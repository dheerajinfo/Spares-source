import React from 'react';
import Card from '../../library/components/Card/Card';
import CardImage from '../../library/components/Card/CardImage';
import CardDiscountpercentage from '../../library/components/Card/CardDiscountpercentage';
import CardTitle from '../../library/components/Card/CardTitle';
import CardDescription from '../../library/components/Card/CardDescription';
import CardDiscountprice from '../../library/components/Card/CardDiscountprice';
import CardOriginalprice from '../../library/components/Card/CardOriginalprice';
import CardPrimarybutton from '../../library/components/Card/CardPrimarybutton';

function CardDemoTwo() {
  return (
    <div>
        <Card className='bg-black p-8 hover:shadow-lg w-[288px]'>
            <div className='relative'>
            <CardImage src="./public/assets/orange.png" className='mb-4'  />
            <CardDiscountpercentage className='absolute top-0 right-0 text-white text-xs font-medium'>25% OFF</CardDiscountpercentage>
            </div>

            <CardTitle className="text-lg text-white mt-4">Orange</CardTitle>
            <CardDescription className="text-sm text-white mt-2">
                1kg
            </CardDescription>
            <div className="flex items-center justify-between mt-4">
                <CardDiscountprice className="text-sm text-white font-normal">Rs 20</CardDiscountprice>
                <CardOriginalprice className="line-through text-sm font-normal text-white opacity-90">Rs 30</CardOriginalprice>
            </div>
            <CardPrimarybutton className="mt-4 border text-white border-white/20 text-sm font-normal tracking-normal w-full">
                Add to Cart
            </CardPrimarybutton>
        </Card>
    </div>
  )
}

export default CardDemoTwo;
