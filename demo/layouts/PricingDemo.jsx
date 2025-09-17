import React from 'react';
import Stack from '../../library/layouts/Stack';
import Cluster from '../../library/layouts/Cluster';
import Inline from '../../library/layouts/Inline';
import Card from '../../library/components/Card/Card';
import CardTitle from '../../library/components/Card/CardTitle';
import CardDescription from '../../library/components/Card/CardDescription';
import CardDiscountprice from '../../library/components/Card/CardDiscountprice';
import CardPrimarybutton from '../../library/components/Card/CardPrimarybutton';

function PricingDemo() {
    const icon = (
    <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M20.0028 1.35355C20.1981 1.15829 20.1981 0.841709 20.0028 0.646447C19.8075 0.451184 19.4909 0.451184 19.2957 0.646447L10.2492 9.69292C9.59091 10.3512 8.49818 10.2571 7.96214 9.49593L7.05804 8.21211C6.89904 7.98634 6.58712 7.9322 6.36135 8.0912C6.13557 8.25019 6.08144 8.56211 6.24043 8.78789L7.14453 10.0717C8.03793 11.3403 9.85915 11.4972 10.9563 10.4L20.0028 1.35355ZM2.03277 11.1697C1.24659 8.23562 2.98779 5.21977 5.92186 4.43359C6.89032 4.17409 7.8662 4.18987 8.76816 4.43236C9.03484 4.50406 9.30914 4.346 9.38083 4.07932C9.45253 3.81265 9.29447 3.53835 9.02779 3.46666C7.9606 3.17974 6.80583 3.16145 5.66304 3.46766C2.19551 4.39678 0.137724 7.96097 1.06685 11.4285C1.99597 14.896 5.56016 16.9538 9.02769 16.0247C9.62031 15.8659 10.359 15.5192 11.0042 15.0301C11.6447 14.5446 12.2494 13.8754 12.4787 13.0491C12.5525 12.783 12.3967 12.5075 12.1306 12.4336C11.8645 12.3598 11.589 12.5156 11.5151 12.7817C11.3676 13.3133 10.9507 13.8158 10.4001 14.2332C9.85405 14.6472 9.23187 14.9347 8.76887 15.0588C5.8348 15.845 2.81895 14.1037 2.03277 11.1697Z" fill="white"/>
    </svg>
    );
    const price = (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.6694 4.93436C6.10581 4.49795 6.71926 4.28747 7.33168 4.36402L10.4744 4.75686C11.3823 4.87035 12.0974 5.58546 12.2109 6.49335L12.6037 9.63604C12.6802 10.2485 12.4698 10.8619 12.0334 11.2983L7.77528 15.5564C6.99423 16.3375 5.7279 16.3375 4.94685 15.5564L1.41132 12.0209C0.630268 11.2398 0.630268 9.97349 1.41132 9.19244L5.6694 4.93436Z" stroke="white"/>
        <path d="M10.6966 6.91418C10.2814 6.54771 10.0195 6.01153 10.0195 5.41418C10.0195 4.30961 10.915 3.41418 12.0195 3.41418C13.1241 3.41418 14.0195 4.30961 14.0195 5.41418C14.0195 6.28879 13.4581 7.03228 12.676 7.30394" stroke="white" strokeLinecap="round"/>
    </svg>
    );

  return (
    <Stack className='text-white items-center justify-center'>
        <h3 className='text-3xl mb-12'>Pricing</h3>
        <Cluster className='gap-8 justify-center'>
            <Stack className='gap-8'>
                <Card className='border border-white/10 p-6 flex flex-col gap-4'>
                    <Inline className='gap-3'>
                        {price}
                        <CardTitle className='text-base'>Plan A</CardTitle>
                    </Inline>
                    <CardDiscountprice className='text-3xl'>$0</CardDiscountprice>
                    <CardDescription> user/month</CardDescription>
                    <CardPrimarybutton className='mt-4 border border-white'>Get Started</CardPrimarybutton>
                </Card>
                <Stack className='gap-4'>
                    <Inline className='gap-3'>{icon}<p className='text-base'>Limited time access</p></Inline>
                    <Inline className='gap-3'>{icon}<p className='text-base'>Access to limited features</p></Inline>
                    <Inline className='gap-3'>{icon}<p className='text-base'>No customization</p></Inline>
                    <Inline className='gap-3'>{icon}<p className='text-base'>Compatible with</p></Inline>
                </Stack>
            </Stack>
            <Stack className='gap-8'>
                <Card className='border border-white/10 p-6 flex flex-col gap-4'>
                    <Inline className='gap-3'>
                        {price}
                        <CardTitle className='text-base'>Plan B</CardTitle>
                    </Inline>
                    <CardDiscountprice className='text-3xl'>$10</CardDiscountprice>
                    <CardDescription> user/month</CardDescription>
                    <CardPrimarybutton className='mt-4 border border-white'>Get Started</CardPrimarybutton>
                </Card>
                <Stack className='gap-4'>
                    <Inline className='gap-3'>{icon}<p className='text-base'>Limited time access</p></Inline>
                    <Inline className='gap-3'>{icon}<p className='text-base'>Access to limited features</p></Inline>
                    <Inline className='gap-3'>{icon}<p className='text-base'>No customization</p></Inline>
                    <Inline className='gap-3'>{icon}<p className='text-base'>Compatible with</p></Inline>
                </Stack>
            </Stack>
        </Cluster>
    </Stack>
  )
}

export default PricingDemo;
