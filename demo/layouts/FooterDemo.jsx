import React from 'react';
import Split from '../../library/layouts/Split';
import Stack from '../../library/layouts/Stack';
import LinkButton from '../../library/components/LinkButton';

function FooterDemo() {
  return (
    <div className='text-white w-full pt-24'>
        <Split cols={4} className='gap-16'>
            <Stack>
                <h3 className='text-3xl mb-8'>Logo</h3>
                <h6 className='text-base mb-2'>Lorem ipsum</h6>
                <p className='text-tiny'>Lorem ipsum dolor sit</p>
            </Stack>
            <Stack>
                <h6 className='text-lg mb-4'>Title</h6>
                <Stack className='gap-3'>
                    <LinkButton>Lorem</LinkButton>
                    <LinkButton>Lorem</LinkButton>
                    <LinkButton>Lorem</LinkButton>
                    <LinkButton>Lorem</LinkButton>
                    <LinkButton>Lorem</LinkButton>
                    <LinkButton>Lorem</LinkButton>
                </Stack>
            </Stack>
            <Stack>
                <h6 className='text-lg mb-4'>Title</h6>
                <Stack className='gap-3'>
                    <LinkButton>Lorem</LinkButton>
                    <LinkButton>Lorem</LinkButton>
                    <LinkButton>Lorem</LinkButton>
                    <LinkButton>Lorem</LinkButton>
                </Stack>
            </Stack>
            <Stack>
                <h6 className='text-lg mb-4'>Title</h6>
                <Stack className='gap-3'>
                    <LinkButton>Lorem</LinkButton>
                    <LinkButton>Lorem</LinkButton>
                    <LinkButton>Lorem</LinkButton>
                </Stack>
            </Stack>
        </Split>
        <Split cols={3} className='gap-4 py-16 w-full'>
            <p className='text-sm flex items-center justify-start'>Socials</p>
            <p className='text-sm flex items-center lg:justify-center'>Terms & Privacy</p>
            <p className='text-sm flex items-center lg:justify-end'>Copyright</p>
        </Split>
    </div>
  )
}

export default FooterDemo;
