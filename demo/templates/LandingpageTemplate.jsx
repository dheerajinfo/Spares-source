import React from 'react';
import HeaderDemo from '../layouts/HeaderDemo';
import HeroDemoOne from '../layouts/HeroDemoOne';
import PageBoundary from '../../library/layouts/PageBoundary';
import FeaturesDemo from './../layouts/FeaturesDemo';
import CalltoactionDemo from './../layouts/CalltoactionDemo';
import FaqDemo from './../layouts/FaqDemo';
import FooterDemo from './../layouts/FooterDemo';
import ClientsDemo from './../layouts/ClientsDemo';
import BenefitsDemo from './../layouts/BenefitsDemo';

function LandingpageTemplate() {
  return (
    <PageBoundary className='bg-black'>
        <HeaderDemo />
        <HeroDemoOne />
        <FeaturesDemo />
        <ClientsDemo />
        <BenefitsDemo />
        <CalltoactionDemo />
        <FaqDemo />
        <FooterDemo />
    </PageBoundary>
  )
}

export default LandingpageTemplate;
