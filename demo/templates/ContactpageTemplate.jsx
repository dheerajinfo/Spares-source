import React from 'react';
import PageBoundary from '../../library/layouts/PageBoundary';
import HeaderDemo from '../layouts/HeaderDemo';
import ContactDemo from '../layouts/ContactDemo';
import FooterDemo from '../layouts/FooterDemo';

function ContactpageTemplate() {
  return (
    <PageBoundary className='bg-black text-white'>
        <HeaderDemo />
        <div className='flex flex-col items-start justify-start lg:grid lg:grid-cols-2 w-full'>
            <div className='py-24'>
                <h3 className='text-4xl'>Contact Our Team</h3>
                <p className='text-base mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='flex flex-row flex-wrap gap-6 py-12'>
                    <p className='text-xl'>Logo</p>
                    <p className='text-xl'>Logo</p>
                    <p className='text-xl'>Logo</p>
                    <p className='text-xl'>Logo</p>
                    <p className='text-xl'>Logo</p>
                    <p className='text-xl'>Logo</p>
                </div>
            </div>
            <ContactDemo />
        </div>
        <FooterDemo />
    </PageBoundary>
  )
}

export default ContactpageTemplate;
