import React from 'react';
import Split from '../../library/layouts/Split';
import Box from '../../library/layouts/Box';
import Stack from '../../library/layouts/Stack';
import Frame from '../../library/layouts/Frame';

function BenefitsDemo() {
  return (
    <Stack className='text-white py-24 gap-8'>
        <h3 className='text-3xl mb-12'>Benefits</h3>
        <Split cols={3} className='gap-8'>
            <Box>
                <Stack className='gap-4'>
                    <h6 className='border border-white h-6 w-6 flex items-center justify-center rounded-full text-xs'>1</h6>
                    <h3 className='text-lg'>Pointer</h3>
                    <p className='text-tiny tracking-wider'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ipsam eum quae quia.</p>
                </Stack>
            </Box>
            <Box>
                <Stack className='gap-4'>
                    <h6 className='border border-white h-6 w-6 flex items-center justify-center rounded-full text-xs'>2</h6>
                    <h3 className='text-lg'>Pointer</h3>
                    <p className='text-tiny tracking-wider'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ipsam eum quae quia.</p>
                </Stack>
            </Box>
            <Box>
                <Stack className='gap-4'>
                    <h6 className='border border-white h-6 w-6 flex items-center justify-center rounded-full text-xs'>3</h6>
                    <h3 className='text-lg'>Pointer</h3>
                    <p className='text-tiny tracking-wider'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ipsam eum quae quia.</p>
                </Stack>
            </Box>
        </Split>
        <Frame ratio={3/2} className='bg-white/60 lg:w-2/3 rounded-8 mt-8' />
    </Stack>
  )
}

export default BenefitsDemo;
