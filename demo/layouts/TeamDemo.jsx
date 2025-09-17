import React from 'react'
import Stack from '../../library/layouts/Stack'
import Cluster from '../../library/layouts/Cluster'
import Frame from '../../library/layouts/Frame'

function TeamDemo() {
  return (
    <Stack className='text-white py-24'>
        <h3 className='text-3xl mb-12'>Team</h3>
        <Cluster className='gap-8'>
            <Stack className='gap-4 p-8 max-w-60 border border-white/10 rounded-8'>
                <Frame ratio={2/3} src="/assets/executive.png" alt="Awww" className='rounded-8 object-cover' />
                <h3 className='text-xl'>John Doe</h3>
                <h6 className='text-base'>Executive</h6>
                <p className='text-tiny max-w-[288px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Stack>
        </Cluster>
    </Stack>
  )
}

export default TeamDemo
