import React from 'react';
import PageBoundary from '../../library/layouts/PageBoundary';
import HeaderDemo from '../layouts/HeaderDemo';
import FooterDemo from '../layouts/FooterDemo';
import TeamDemo from '../layouts/TeamDemo';
import CareersDemo from '../layouts/CareersDemo';

function AboutpageTemplate() {
  return (
    <PageBoundary className='bg-black text-white'>
        <HeaderDemo />
        <div className='w-full'>
            <div className='flex flex-col gap-8 py-24'>
                <h3 className='text-3xl'>Mission</h3>
                <p className='text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero blanditiis harum enim, laboriosam eligendi dolorum officiis, a placeat eos quae voluptatum aperiam quasi doloribus autem voluptatem beatae explicabo possimus nam?</p>
            </div>
            <div className='flex flex-col gap-8 py-24'>
                <h3 className='text-3xl'>Our Values</h3>
                <div className='flex flex-col gap-8 lg:grid lg:grid-cols-2'>
                    <div className='flex flex-col gap-4'>
                        <h6 className='text-xl'>Lorem</h6>
                        <p className='text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, cum dicta voluptates excepturi quasi, tempora ea voluptatum atque explicabo fugiat eligendi cumque nisi id assumenda facilis ducimus est cupiditate culpa.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h6 className='text-xl'>Lorem</h6>
                        <p className='text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, cum dicta voluptates excepturi quasi, tempora ea voluptatum atque explicabo fugiat eligendi cumque nisi id assumenda facilis ducimus est cupiditate culpa.</p>
                    </div>
                </div>
            </div>
            <TeamDemo />
            <CareersDemo />
        </div>
        <FooterDemo />
    </PageBoundary>
  )
}

export default AboutpageTemplate;
