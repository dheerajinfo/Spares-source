import React from 'react';
import PageBoundary from '../../library/layouts/PageBoundary';
import Cluster from '../../library/layouts/Cluster';
import Stack from '../../library/layouts/Stack';
import Avatar from '../../library/components/Avatar/Avatar';
import AvatarInitials from '../../library/components/Avatar/AvatarInitials';
import AvatarIcon from '../../library/components/Avatar/AvatarIcon';
import Button from '../../library/components/Button';
import Hovercard from '../../library/components/Hovercard/Hovercard';
import HovercardTrigger from '../../library/components/Hovercard/HovercardTrigger';
import HovercardContent from '../../library/components/Hovercard/HovercardContent';

function PageBoundaryDemo() {
  return (
    <PageBoundary>
      <Cluster className='gap-12 text-white py-12'>
        <p className='text-sm font-normal tracking-widest text-center flex items-center justify-center'>Logo</p>
        <p className='text-sm font-normal tracking-widest text-center flex items-center justify-center'>Logo</p>
        <p className='text-sm font-normal tracking-widest text-center flex items-center justify-center'>Logo</p>
        <p className='text-sm font-normal tracking-widest text-center flex items-center justify-center'>Logo</p>
        <p className='text-sm font-normal tracking-widest text-center flex items-center justify-center'>Logo</p>
        <p className='text-sm font-normal tracking-widest text-center flex items-center justify-center'>Logo</p>
    </Cluster>
        <Stack className='text-white items-center gap-4 py-24'>
        <div className='flex flex-row'>
            <Hovercard className='z-0'>
                <HovercardTrigger>
                    <Avatar className='bg-elevation text-white rounded-full'>
                        <AvatarInitials className='text-xs'></AvatarInitials>
                    </Avatar>
                </HovercardTrigger>
                <HovercardContent className='bottom-full left-1/2 -translate-x-1/2 p-2 bg-elevation border border-white/10 mb-2 rounded-8 text-white w-40'>
                    <div className='p-1 flex flex-col gap-3'>
                        <h1 className='text-base'>DS</h1>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. </p>
                    </div>
                </HovercardContent>
            </Hovercard>
            <Hovercard className='z-10 -ml-4'>
                <HovercardTrigger>
                    <Avatar className='bg-elevation text-white'>
                        <AvatarInitials className='text-xs'>GK</AvatarInitials>
                    </Avatar>
                </HovercardTrigger>
                <HovercardContent className='bottom-full left-1/2 -translate-x-1/2 p-2 bg-elevation border border-white/10 mb-2 rounded-8 text-white w-40'>
                    <div className='p-1 flex flex-col gap-3'>
                        <h1 className='text-base'>GK</h1>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. </p>
                    </div>
                </HovercardContent>
            </Hovercard>

             <Hovercard className='z-20 -ml-4'>
                <HovercardTrigger>
                    <Avatar className='bg-elevation rounded-full text-white'>    
                        <AvatarIcon>
                            <svg width="9" height="14" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.33204 9.00001C8.54118 9.00001 10.332 7.20915 10.332 5C10.332 2.79086 8.54118 1 6.33204 1C4.12289 1 2.33203 2.79086 2.33203 5C2.33203 7.20915 4.12289 9.00001 6.33204 9.00001Z" stroke="white" strokeWidth="2px" />
                                <path d="M1 14.3333C1 11.3878 3.38782 9 6.33334 9C9.27886 9 11.6667 11.3878 11.6667 14.3333V15.4C11.6667 16.2837 10.9503 17 10.0667 17H2.6C1.71635 17 1 16.2837 1 15.4V14.3333Z" stroke="white" strokeWidth="2px"/>
                            </svg>
                        </AvatarIcon>
                    </Avatar>
                </HovercardTrigger>
                <HovercardContent className='bottom-full left-1/2 -translate-x-1/2 p-2 bg-elevation border border-white/10 mb-2 rounded-8 text-white w-40'>
                    <div className='p-1 flex flex-col gap-3'>
                        <Avatar className='border border-white/20 text-white rounded-full'>    
                            <AvatarIcon className='w-fit'>
                                <svg width="9" height="14" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.33204 9.00001C8.54118 9.00001 10.332 7.20915 10.332 5C10.332 2.79086 8.54118 1 6.33204 1C4.12289 1 2.33203 2.79086 2.33203 5C2.33203 7.20915 4.12289 9.00001 6.33204 9.00001Z" stroke="white" strokeWidth="2px" />
                                    <path d="M1 14.3333C1 11.3878 3.38782 9 6.33334 9C9.27886 9 11.6667 11.3878 11.6667 14.3333V15.4C11.6667 16.2837 10.9503 17 10.0667 17H2.6C1.71635 17 1 16.2837 1 15.4V14.3333Z" stroke="white" strokeWidth="2px"/>
                                </svg>
                            </AvatarIcon>
                        </Avatar>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. </p>
                    </div>
                </HovercardContent>
            </Hovercard>
        </div>
        <h3 className='text-3xl'>Lorem ipsum dolor</h3>
        <p className='lg:w-1/2 text-tiny'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nostrum quia? Qui commodi quos excepturi veritatis voluptatem iusto rem,</p>
        <Button className='bg-elevation px-5 mt-4 w-fit'>Try now</Button>
    </Stack>
    </PageBoundary>
  )
}

export default PageBoundaryDemo;
