import React from 'react';
import Stack from '../../library/layouts/Stack';
import Inline from '../../library/layouts/Inline';
import Card from '../../library/components/Card/Card';
import CardTitle from '../../library/components/Card/CardTitle';
import CardSubTitle from '../../library/components/Card/CardSubTitle';
import CardDescription from '../../library/components/Card/CardDescription';

function Datacardblock() {
  return (
    <Card className='bg-surface text-white p-8 rounded-8 w-full lg:w-1/4'>
        <Stack className='gap-2'>
            <CardTitle className='text-5xl'>56</CardTitle>
            <Inline className='gap-3'>
                <CardSubTitle className='text-sm'>Orders</CardSubTitle>
                <CardDescription className='text-sm'>+3%</CardDescription>
            </Inline>
        </Stack>
    </Card>
  )
}

export default Datacardblock;
